import { DataLoadingWrapper } from 'components/DataLoadingWrapper';
import { isEmpty } from 'lodash';
import { useImagesRelationshipsContext } from './ImagesRelationshipsContext';
import { Card, FloatButton, Image, Tag } from 'antd';
import {
  ExpandOutlined,
  FileImageOutlined,
  ForkOutlined,
  LoadingOutlined,
  SyncOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { ImageCard } from '../ImageCard';
import { RelationshipCountTag } from './RelationshipCountTag';
import { TransparentButton } from 'components/Common';
import { useMemo, useRef } from 'react';
import { useMeasure } from 'react-use';

export function RelationshipsContent() {
  const {
    query: { isDirty, isSaving, save, stats, ...query },
    randomGroups: { cardIds, cards, onSelect, selection, relate, nextSet, deselectAll, cycles },
    showIds,
    cardSize,
  } = useImagesRelationshipsContext();

  const cardRef = useRef<HTMLDivElement>(null);
  const [ref, { width: containerWidth }] = useMeasure<HTMLDivElement>();

  const [cardQuantity, cardWidth] = useMemo(() => {
    const cq = Math.floor(containerWidth / cardSize) + 1;
    const cw = Math.floor(containerWidth / cq);
    return [cq, cw];
  }, [cardSize, containerWidth]);

  const onNextSet = () => {
    nextSet();
    cardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <DataLoadingWrapper
      isLoading={query.isLoading}
      error={query.error}
      hasResponseData={!isEmpty(query.data)}
    >
      <div ref={ref} className="my-6">
        <Card
          title="Card Relationship Matching"
          extra={
            <span>
              <FileImageOutlined /> {cycles}
            </span>
          }
          className="image-card-categorizer-card"
          ref={cardRef}
        >
          <Image.PreviewGroup>
            <div
              className="image-cards-group"
              style={{ gridTemplateColumns: `repeat(${Math.max(cardQuantity, 1)}, 1fr)` }}
            >
              {cardIds.map((cardId: string, index: number) => {
                const isSelected = selection.includes(cardId);
                const card = cards[index];

                return (
                  <div className="image-card-card__image" key={cardId}>
                    <TransparentButton
                      onClick={() => onSelect(cardId)}
                      active={isSelected}
                      className="image-cards-group__button"
                      activeClass="image-cards-group__button--active"
                    >
                      <ImageCard id={cardId} width={cardWidth - 24} preview={false} />
                      <div>
                        {showIds && <Tag>{cardId}</Tag>}
                        {/* <Button size="small">{isSelected ? 'Deselect' : 'Select'}</Button> */}
                        <RelationshipCountTag card={card} />
                      </div>
                    </TransparentButton>
                  </div>
                );
              })}
            </div>
          </Image.PreviewGroup>
          <Actions
            isSaving={isSaving}
            isDirty={isDirty}
            selection={selection}
            relate={relate}
            deselectAll={deselectAll}
            onNextSet={onNextSet}
          />
        </Card>
      </div>
    </DataLoadingWrapper>
  );
}

type ActionsProps = {
  isSaving: boolean;
  isDirty: boolean;
  selection: string[];
  relate: () => void;
  deselectAll: () => void;
  onNextSet: () => void;
};

const Actions = ({ isSaving, isDirty, selection, relate, deselectAll, onNextSet }: ActionsProps) => {
  if (isSaving) {
    return (
      <>
        <FloatButton icon={<LoadingOutlined />} />
      </>
    );
  }

  const onRelate = () => {
    if (selection.length < 2) return;
    relate();
  };

  return (
    // <FloatButton.Group shape="square" style={{ right: 24 }}>
    // </FloatButton.Group>
    <>
      {isDirty && (
        <FloatButton icon={<WarningOutlined />} type="primary" style={{ right: 24 + 70 + 70 + 70 }} />
      )}
      <FloatButton
        icon={<ExpandOutlined />}
        style={{ right: 24 + 70 + 70 }}
        // tooltip="Deselect"
        onClick={deselectAll}
      />
      <FloatButton
        icon={<ForkOutlined />}
        style={{ right: 24 + 70 }}
        type={selection.length < 2 ? 'default' : 'primary'}
        // tooltip="Relate"
        badge={{ count: selection.length, size: 'small' }}
        onClick={onRelate}
      />
      <FloatButton
        icon={<SyncOutlined />}
        style={{ right: 24 }}
        // tooltip="Next Set"
        onClick={onNextSet}
      />
    </>
  );
};
