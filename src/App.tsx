import React from "react";
import "./App.css";
import Header from "./components/Header";
import TierListBoard from "./components/TierListBoard";

const tiers = ["Love It", "Like It", "Leave It", "Haven't Played"];

const jackboxPartyPacks = [
  {
    id: "1",
    label: "Party Pack 1",
    imgSrc:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/games/switch/t/the-jackbox-party-pack-switch/hero",
  },
  {
    id: "2",
    label: "Party Pack 2",
    imgSrc:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-jackbox-party-pack-2-switch/hero",
  },
  {
    id: "3",
    label: "Party Pack 3",
    imgSrc:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-jackbox-party-pack-3-switch/hero",
  },
  {
    id: "4",
    label: "Party Pack 4",
    imgSrc:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-jackbox-party-pack-4-switch/hero",
  },
  {
    id: "5",
    label: "Party Pack 5",
    imgSrc:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_700/ncom/en_US/games/switch/t/the-jackbox-party-pack-5-switch/hero",
  },
  {
    id: "6",
    label: "Party Pack 6",
    imgSrc:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_500/ncom/en_US/games/switch/t/the-jackbox-party-pack-6-switch/hero",
  },
  {
    id: "7",
    label: "Party Pack 7",
    imgSrc:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_500/ncom/en_US/games/switch/t/the-jackbox-party-pack-7-switch/hero",
  },
  {
    id: "8",
    label: "Party Pack 8",
    imgSrc:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_500/ncom/en_US/games/switch/t/the-jackbox-party-pack-8-switch/hero",
  },
  {
    id: "9",
    label: "Party Pack 9",
    imgSrc:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_500/ncom/en_US/games/switch/t/the-jackbox-party-pack-9-switch/hero",
  },
];

export const HomePage = () => {
  return (
    <div className="App">
      <Header appLabel={"Game Tier List"} buttonLabel={"Add Video Game"} />
      <div className="App-container">
        <div className="h-full m-10">
          <TierListBoard tierNames={tiers} options={jackboxPartyPacks} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
