import React, { Component } from "react";
import axios from "axios";
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
      this.props.getCurrentRating();
      this.setState({
        id: this.props.auth.user.id
      });
      this.setState({
        rating: this.state.rating
      });
    }
  }

  onStarClick = (nextValue, prevValue, name) => {
    const data = {
      id: this.state.id,
      rating: nextValue
    };
    this.setState({
      rating: nextValue
    });

    axios
      .post("/users/", data)
      .then(res => {
        console.log(res);
        this.setState({
          rating: res.data.rating
        });
        // localStorage.setItem("rating", res.data.rating);
      })
      .catch(err => console.log(err));
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
