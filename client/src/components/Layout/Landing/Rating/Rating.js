import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

class Rating extends Component {
  constructor() {
    super();

    this.state = {
      rating: null
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  render() {
    const { rating } = this.state;

    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick}
          emptyStarColor={"#ccc"}
          starColor={"orange"}
          renderStarIcon={() => (
            <span style={{ fontSize: "24px" }}>
              <i className="fas fa-star" />
            </span>
          )}
        />

        <p>you rated: {rating}</p>
      </div>
    );
  }
}

export default Rating;
