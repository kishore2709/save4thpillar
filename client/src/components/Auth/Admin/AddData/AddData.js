import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { registerChannel } from "../../../../actions/addData";
import Footer from "../../../Layout/Footer/Footer";

import "./AddData.css";

class AddChannel extends Component {
  state = {
    name: "",
    info: "",
    website: "",
    twitter: "",
    facebook: "",
    errors: {}
  };

  registerHandler = e => {
    e.preventDefault();

    const channelData = {
      name: this.state.name,
      info: this.state.info,
      website: this.state.website,
      twitter: this.state.twitter,
      facebook: this.state.facebook
    };

    this.props.registerChannel(channelData, this.props.history);
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="container bg-light">
          <h2 className="pt-3 pb-4">
            <i className="fa fa-plus" aria-hidden="true" />
            &nbsp; Add New channel
          </h2>
          <form noValidate onSubmit={this.registerHandler}>
            <div className="form-group row">
              <label htmlFor="inputName3" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  id="inputName3"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChangeHandler}
                />
                {errors.name ? (
                  <p className="text-danger text-left"> {errors.name}</p>
                ) : null}
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputName4" className="col-sm-2 col-form-label">
                info
              </label>
              <div className="col-sm-10">
                <textarea
                  name="info"
                  className="form-control"
                  placeholder="please enter basic information here"
                  id="inputName4"
                  rows="5"
                  value={this.state.info}
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputName5" className="col-sm-2 col-form-label">
                website
              </label>
              <div className="col-sm-10">
                <input
                  name="website"
                  className="form-control"
                  id="inputName5"
                  value={this.state.website}
                  placeholder="website"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputName6" className="col-sm-2 col-form-label">
                twitter page
              </label>
              <div className="col-sm-10">
                <input
                  name="twitter"
                  className="form-control"
                  id="inputName6"
                  value={this.state.twitter}
                  placeholder="twitter page"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName7" className="col-sm-2 col-form-label">
                facebook page
              </label>
              <div className="col-sm-10">
                <input
                  name="facebook"
                  className="form-control"
                  id="inputName7"
                  value={this.state.facebook}
                  placeholder="facebook page"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>

            <div className="form-group row ">
              <div className="col-sm-10 pt-3">
                <button type="submit" className="btn btn-danger  mb-5">
                  Add Now
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer style={{ marginTop: "500px" }} />
      </div>
    );
  }
}

AddChannel.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerChannel }
)(AddChannel);
