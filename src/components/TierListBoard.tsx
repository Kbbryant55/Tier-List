import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import TierRow from "./TierRow";
import TileCard from "./TileCard";

interface TierListBoardType {
  tierNames: string[];
  options: any[];
}

//This object is dynamic depending on the board passed in
interface DynamicItemsTypes {
  [key: string]: any;
}

const TierListBoard = ({ tierNames, options }: TierListBoardType) => {
  let containerArray = tierNames.reduce((accumulator, value, index) => {
    if (index === tierNames.length - 1) {
      return { ...accumulator, [value]: options.map((option) => option.id) };
    } else return { ...accumulator, [value]: [] };
  }, {});

  const [items, setItems] = useState<DynamicItemsTypes>(containerArray);
  const [activeId, setActiveId] = useState(null);
  const [activeLabel, setActiveLabel] = useState("");
  const [activeImgUrl, setActiveImgUrl] = useState("");

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findTierContainer = (id: string) => {
    if (id in items) {
      return id;
    }

    const foundContainer = Object.keys(items).find((key) =>
      items[key].includes(id)
    );

    return foundContainer;
  };

  const handleDragStart = (event: any) => {
    const { active } = event;
    const selectedOption = options.find((x) => x.id === active.id);

    setActiveId(active.id);
    setActiveLabel(selectedOption.label);
    setActiveImgUrl(selectedOption.imgSrc);
  };

  const handleDrag = (event: any) => {
    const { active, over, draggingRect } = event;

    const activeContainer = findTierContainer(active.id);
    const overContainer = findTierContainer(over.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prevItemsState: DynamicItemsTypes) => {
      const activeItems = prevItemsState[activeContainer];
      const overItems = prevItemsState[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems?.indexOf(active.id);
      const overIndex = overItems?.indexOf(over.id);

      let newIndex;
      if (over.id in prevItemsState) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect?.offsetTop > over.rect.offsetTop + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prevItemsState,
        [activeContainer]: [
          ...prevItemsState[activeContainer].filter(
            (item: any) => item !== active.id
          ),
        ],
        [overContainer]: [
          ...prevItemsState[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prevItemsState[overContainer].slice(
            newIndex,
            prevItemsState[overContainer].length
          ),
        ],
      };
    });
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    const activeContainer = findTierContainer(active.id);
    const overContainer = findTierContainer(over.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].indexOf(active.id);
    const overIndex = items[overContainer].indexOf(over.id);

    if (active.id !== over.id) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragOver={handleDrag}
      onDragStart={handleDragStart}
      collisionDetection={closestCorners}
    >
      <>
        {Object.entries<any>(items).map(([key, value]) => {
          return <TierRow id={key} key={key} tiles={options} items={value} />;
        })}
      </>

      <DragOverlay>
        {activeId ? (
          <TileCard id={activeId} label={activeLabel} imgSrc={activeImgUrl} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default TierListBoard;
