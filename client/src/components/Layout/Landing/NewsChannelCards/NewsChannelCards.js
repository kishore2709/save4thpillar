import React from "react";
import "./NewsChannelCards.css";

import NewsChannelCard from "./NewsChannelCard/NewsChannelCard";

const newsChannelCards = () => {
  return (
    <div>
      <NewsChannelCard />
      <NewsChannelCard />
      <NewsChannelCard />
      <div className="footer" style={{ marginTop: "700px" }}>
        Footer goes here
      </div>
    </div>
  );
};

export default newsChannelCards;
