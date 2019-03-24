import React, { Component } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentRating } from "../../../../actions/ratingActions";

import StarRatingComponent from "react-star-rating-component";

class Rating extends Component {
  state = {
    rating: null,
    id: null
  };

  componentDidMount() {
    if (this.props.auth) {
      this.setState({
        id: this.props.auth.user.id,
        rating: localStorage.getItem("rating")
      });
    }
  }

  onStarClick = (nextValue, prevValue, name) => {
    const ratingdata = {
      id: this.props.auth.user.id,
      rating: nextValue
    };

    this.setState({
      rating: nextValue
    });
    localStorage.setItem("rating", nextValue);
    this.props.getCurrentRating(ratingdata);
  };

  render() {
    const { rating } = this.state;

    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={+this.state.rating}
          onStarClick={this.onStarClick}
          emptyStarColor={"#ccc"}
          starColor={"orange"}
          renderStarIcon={() => (
            <span style={{ fontSize: "20px" }}>
              <i className="fas fa-star" />
            </span>
          )}
        />
        <p
          style={{
            marginLeft: "10px",
            marginTop: "-10px"
          }}
        >
          you rated: {rating}
        </p>
        <p>{this.state.rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentRating }
)(Rating);
