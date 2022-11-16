import React, { useState } from "react";
import imageNotAvailableURL from "../noImageAvailable.jpg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface TileCardType {
  id: string;
  label: string;
  imgSrc: string;
}

const TileCard = ({ label, imgSrc, id }: TileCardType) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [imgUrl, setImgUrl] = useState(imgSrc || imageNotAvailableURL);

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="w-36 min-w-[7rem] h-36  bg-[#0167FF] rounded-xl shadow-2xl hover:bg-[#5b82d4]"
    >
      <div className="p-3 flex flex-col justify-center items-center truncate">
        <img
          src={imgUrl}
          className="w-24 h-24"
          onError={() => setImgUrl(imageNotAvailableURL)}
          referrerPolicy="no-referrer"
          alt={"not available"}
        />
        <div className="text-xs italic font-display whitespace-normal text-clip text-start text-[#FFFFFF]">
          {label}
        </div>
      </div>
    </div>
  );
};

export default TileCard;
