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
    isAuthenticated: false
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
    if (this.state.isAuthenticated) {
      this.setState({
        rating: nextValue
      });
      localStorage.setItem("rating", nextValue);

      const ratingdata = {
        id: this.props.auth.user.id,
        rating: nextValue
      };

      this.props.getCurrentRating(ratingdata);
    }
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

        {rating ? (
          <p
            style={{
              marginLeft: "10px",
              marginTop: "-10px"
            }}
          >
            {" "}
            you rated: {rating}
          </p>
        ) : null}
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
