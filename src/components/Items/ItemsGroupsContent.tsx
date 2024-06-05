import { Col, Flex, Row, Table, TableProps, Typography } from 'antd';
import { PaginationWrapper } from 'components/Common/PaginationWrapper';
import { Item } from 'components/Sprites';
import { useCopyToClipboardFunction } from 'hooks/useCopyToClipboardFunction';
import { useGridPagination } from 'hooks/useGridPagination';
import { useQueryParams } from 'hooks/useQueryParams';
import { UseResourceFirebaseDataReturnType } from 'hooks/useResourceFirebaseData';
import { useTDResource } from 'hooks/useTDResource';
import { orderBy } from 'lodash';
import { useMemo } from 'react';
import { Item as ItemT, ItemGroup } from 'types';
import { removeDuplicates } from 'utils';

import { ItemGroupsCard } from './ItemGroupsCard';

export function ItemsGroupsContent({ data, addEntryToUpdate }: UseResourceFirebaseDataReturnType<ItemGroup>) {
  const { is } = useQueryParams();
  const itemsTypeaheadQuery = useTDResource<ItemT>('items');

  const grousByItem = useMemo(() => {
    return Object.values(data ?? []).reduce((acc: Record<string, string[]>, group) => {
      if (!group.itemsIds) {
        console.warn('Group without items', group);
      }
      group.itemsIds.forEach((itemId) => {
        if (!acc[itemId]) {
          acc[itemId] = [];
        }
        acc[itemId].push(group.id);
      });

      return acc;
    }, {});
  }, [data]);

  const groupsTypeahead = useMemo(
    () =>
      orderBy(
        Object.keys(data).map((id) => ({ label: id, value: id })),
        'label'
      ),
    [data]
  );

  const onUpdateItemGroups = (itemId: string, groupIds: string[]) => {
    // Compare previous groups in items with new groups
    const previousGroups = grousByItem[itemId] ?? [];
    const groupsToAdd = groupIds.filter((id) => !previousGroups.includes(id));
    const groupsToRemove = previousGroups.filter((id) => !groupIds.includes(id));

    // Add item to groups
    groupsToAdd.forEach((groupId) => {
      addEntryToUpdate(groupId, {
        id: groupId,
        itemsIds: removeDuplicates([...(data[groupId]?.itemsIds ?? []), itemId]),
      });
    });

    // Remove item from groups
    groupsToRemove.forEach((groupId) => {
      addEntryToUpdate(groupId, {
        id: groupId,
        itemsIds: removeDuplicates(data[groupId]?.itemsIds.filter((id) => id !== itemId)),
      });
    });
  };

  return (
    <>
      {is('display', 'group') && <ItemsGroupsByGroupTable data={data} />}
      {is('display', 'item') && (
        <ItemsGroupsByItemTable
          items={itemsTypeaheadQuery.data}
          grousByItem={grousByItem}
          groupsTypeahead={groupsTypeahead}
          onUpdateItemGroups={onUpdateItemGroups}
        />
      )}
    </>
  );
}

function ItemsGroupsByGroupTable({ data }: Pick<UseResourceFirebaseDataReturnType<ItemGroup>, 'data'>) {
  const copyToClipboard = useCopyToClipboardFunction();

  const columns: TableProps<ItemGroup>['columns'] = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <span>{id}</span>,
    },
    {
      title: 'Items',
      dataIndex: 'itemsIds',
      key: 'itemsIds',
      render: (itemsIds: string[], record) => (
        <Flex gap={6} wrap="wrap" key={`items-${record.id}`}>
          {itemsIds.map((itemId) => (
            <Flex key={`${record.id}-${itemId}`} gap={2} vertical>
              <Item id={itemId} width={60} />
              <Flex justify="center">
                <Typography.Text onClick={() => copyToClipboard(itemId)}>{itemId}</Typography.Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      ),
    },
    {
      title: 'Count',
      dataIndex: 'itemsIds',
      key: 'count',
      render: (itemsIds: string[]) => removeDuplicates(itemsIds).filter(Boolean).length,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={Object.values(data)}
      className="my-4"
      pagination={{ showQuickJumper: true }}
    />
  );
}

type ItemsGroupsByItemTableProps = {
  items: Dictionary<ItemT>;
  grousByItem: Record<string, string[]>;
  groupsTypeahead: { value: string; label: string }[];
  onUpdateItemGroups: (itemId: string, groupIds: string[]) => void;
};

function ItemsGroupsByItemTable({
  items,
  grousByItem,
  groupsTypeahead,
  onUpdateItemGroups,
}: ItemsGroupsByItemTableProps) {
  const { is } = useQueryParams();
  const showOnlyEmpty = is('emptyOnly');

  const data = useMemo(
    () => (showOnlyEmpty ? Object.values(items).filter((v) => !grousByItem[v.id]) : Object.values(items)),
    [items, grousByItem, showOnlyEmpty]
  );

  const { page, pagination } = useGridPagination({ data });

  return (
    <>
      <Typography.Title level={2}>Groups by Items ({data.length})</Typography.Title>
      <PaginationWrapper pagination={pagination}>
        <Row gutter={[16, 16]} className="my-4">
          {page.map((item) => (
            <Col key={item.id} xs={24} sm={24} md={12} lg={6} xl={4}>
              <ItemGroupsCard
                item={item}
                itemGroups={grousByItem[item.id]}
                groupsTypeahead={groupsTypeahead}
                onUpdateItemGroups={onUpdateItemGroups}
              />
            </Col>
          ))}
        </Row>
      </PaginationWrapper>
    </>
  );
}