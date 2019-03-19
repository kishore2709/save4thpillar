import React, { Component } from "react";
import axios from "axios";

class About extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const posts = res.data.slice(0, 4);
        posts.map(post => console.log(post));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <p
          className="h4 text-danger"
          style={{ lineHeight: "40px", marginTop: "25%" }}
        >
          We, here at save4thpillar are group of people who are trying to hard
          to make this world a better place. The name as suggessts that Media is
          our fourth pillar of any Democracy. So, we are trying hard to make a
          transparent open voting system. <br /> Basically save4thpillar is open
          to all platform where everyone can come and vote for their favourite
          News Channels, News Anchors, Jounalists etc.
          <br />
          For controlling the dublicacy we are trying to make a high filtering
          and IP aunthentication.
        </p>
      </div>
    );
  }
}

export default About;