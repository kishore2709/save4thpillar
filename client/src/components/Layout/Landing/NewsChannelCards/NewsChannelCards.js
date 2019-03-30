import React, { Component } from "react";
import "./NewsChannelCards.css";
// import axios from "axios";

import NewsChannelCard from "./NewsChannelCard/NewsChannelCard";
import NewsChannelCard1 from "./NewsChannelCard/NewsChannelCard1";

class NewsChannelCards extends Component {
  state = {
    posts: []
  };

  // componentDidMount() {
  //   axios
  //     .get("/users/login/")
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // }

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
