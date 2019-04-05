import React, { Component } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentRating } from "../../../../actions/ratingActions";

import StarRatingComponent from "react-star-rating-component";

class Rating extends Component {
  state = {
    rating: null,
    id: null,
    isAuthenticated: null
  };

  componentDidMount() {
    if (this.props.auth) {
      const currentRatingValue = localStorage.getItem("rating");
      this.setState({
        id: this.props.auth.user.id,
        rating: currentRatingValue,
        isAuthenticated: true
      });
    }
  }
  onStarClick = (nextValue, prevValue, name) => {
    if (this.props.auth) {
      this.setState({
        rating: nextValue
      });
      localStorage.setItem("rating", nextValue);

      const ratingdata = {
        id: this.props.auth.user.id,
        rating: nextValue
      };

      this.props.getCurrentRating(ratingdata);
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const { rating } = this.state;
    const isAuthenticated = this.state.isAuthenticated;
    let star;

    if (isAuthenticated == null) {
      star = null;
    } else {
      star = (
        <p style={{ marginLeft: "10px", marginTop: "-10px" }}>
          {" "}
          you rated: {rating}
        </p>
      );
    }

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
            <span style={{ fontSize: "25px" }}>
              <i className="fas fa-star" />
            </span>
          )}
        />
        {star}
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
