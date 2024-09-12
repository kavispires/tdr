import { Button, Flex, Typography } from 'antd';
import { Item } from 'components/Sprites';
import { UseResourceFirebaseDataReturnType } from 'hooks/useResourceFirebaseData';
import { useTDResource } from 'hooks/useTDResource';
import { difference, sampleSize } from 'lodash';
import { useState } from 'react';
import { DailyDiscSet, Item as ItemT } from 'types';
import { removeDuplicates, sortItemsIds } from 'utils';

import { PlusOutlined } from '@ant-design/icons';

import { ItemsTypeahead } from '../ItemsTypeahead';
import { PasteIds } from '../ParseIds';

type ItemsDiscSetExpandedRowProps = {
  disc: DailyDiscSet;
  addEntryToUpdate: UseResourceFirebaseDataReturnType<DailyDiscSet>['addEntryToUpdate'];
};

export function ItemsDiscSetExpandedRow({ disc, addEntryToUpdate }: ItemsDiscSetExpandedRowProps) {
  const onUpdate = (itemId: string) => {
    addEntryToUpdate(disc.id, {
      ...disc,
      itemsIds: removeDuplicates(sortItemsIds([...disc.itemsIds, itemId])),
    });
  };

  const onUpdateBatch = (itemIds: string[]) => {
    addEntryToUpdate(disc.id, {
      ...disc,
      itemsIds: removeDuplicates(sortItemsIds([...disc.itemsIds, ...itemIds])),
    });
  };

  return (
    <Flex gap={16}>
      <div>
        <Typography.Paragraph>Add Item</Typography.Paragraph>
        <ItemsTypeahead onFinish={onUpdate} />
      </div>

      <RandomSample onUpdate={onUpdate} disc={disc} />

      <PasteIds onUpdateBatch={onUpdateBatch} />
    </Flex>
  );
}

type RandomSampleProps = {
  onUpdate: (itemId: string) => void;
  disc: DailyDiscSet;
};

function RandomSample({ onUpdate, disc }: RandomSampleProps) {
  const itemsTypeaheadQuery = useTDResource<ItemT>('items');
  const getSample = (quantity: number) => {
    return difference(sampleSize(Object.keys(itemsTypeaheadQuery.data ?? {}), quantity), disc.itemsIds);
  };

  const [sampledItems, setSampledItems] = useState<string[]>(getSample(5));

  const onSample = () => {
    setSampledItems(getSample(20));
  };

  return (
    <div>
      <Typography.Paragraph>
        Random Sample{' '}
        <Button size="small" onClick={onSample}>
          Get
        </Button>
      </Typography.Paragraph>
      <Flex gap={16} wrap="wrap">
        {sampledItems.map((itemId, index) => (
          <Flex key={`sample-${itemId}-${index}`} gap={2} vertical>
            <Item id={itemId} width={60} />
            <Flex justify="center" gap={6}>
              <Typography.Text>{itemId}</Typography.Text>
              <Button size="small" shape="circle" onClick={() => onUpdate(itemId)}>
                <PlusOutlined />
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </div>
  );
}
