import React from "react";
import TileCard, { TileCardType } from "./TileCard";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

interface TierRowType {
  tiles: Array<TileCardType>;
  items: any[];
  id: string;
}

const TierRow = ({ tiles, items, id }: TierRowType) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div className="w-full min-h-[11rem]  border  bg-[#F1F1F1] border-black flex">
      <div className="w-[8rem] m-h-[8rem] bg-[#FFBF7E] text-xl border-r-2 border-black  flex justify-center items-center">
        {id}
      </div>
      <SortableContext
        id={id}
        items={items}
        strategy={horizontalListSortingStrategy}
      >
        <div
          ref={setNodeRef}
          className="w-fit h-full p-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5"
        >
          {items.map((id) => {
            const tileObject = tiles.find((x) => x.id === id);

            if (!tileObject) return <></>;

            return (
              <TileCard
                key={`${id}-key`}
                id={id}
                label={tileObject.label}
                imgSrc={tileObject.imgSrc}
              />
            );
          })}
        </div>
      </SortableContext>
    </div>
  );
};

export default TierRow;
