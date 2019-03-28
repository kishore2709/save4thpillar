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
      </div>
    );
  }
}
export default NewsChannelCards;
