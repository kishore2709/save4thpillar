import React, { Component } from "react";
import "./NewsChannelCards.css";

import NewsChannelCard from "./NewsChannelCard/NewsChannelCard";
import NewsChannelCard1 from "./NewsChannelCard/NewsChannelCard1";

class NewsChannelCards extends Component {
  state = {
    posts: []
  };

  render() {
    return (
      <div>
        <NewsChannelCard />
        <NewsChannelCard1 />

        <div className="footer" style={{ marginTop: "700px" }}>
          Footer goes here
        </div>
      </div>
    );
  }
}
export default NewsChannelCards;
