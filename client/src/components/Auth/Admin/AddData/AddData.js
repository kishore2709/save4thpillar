import React, { Component } from "react";

import Footer from "../../../Layout/Footer/Footer";

import "./AddData.css";

class AddData extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  render() {
    return (
      <div>
        <div className="container bg-light">
          <h2 className="pt-3 pb-4">
            <i className="fa fa-plus" aria-hidden="true" />
            &nbsp; Add New channel
          </h2>
          <form>
            <div className="form-group row">
              <label for="inputName3" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="name"
                  className="form-control"
                  id="inputName3"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputName3" className="col-sm-2 col-form-label">
                info
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  placeholder="please enter basic information here"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputName3" className="col-sm-2 col-form-label">
                image
              </label>
              <div className="col-sm-10">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label
                    className="custom-file-label text-left"
                    for="customFile"
                  >
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputName3" className="col-sm-2 col-form-label">
                website
              </label>
              <div className="col-sm-10">
                <input
                  type="name"
                  className="form-control"
                  id="inputName3"
                  placeholder="website"
                />
              </div>
            </div>

            <div className="form-group row">
              <label for="inputName3" className="col-sm-2 col-form-label">
                twitter page
              </label>
              <div className="col-sm-10">
                <input
                  type="name"
                  className="form-control"
                  id="inputName3"
                  placeholder="twitter page"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputName3" className="col-sm-2 col-form-label">
                facebook page
              </label>
              <div className="col-sm-10">
                <input
                  type="name"
                  className="form-control"
                  id="inputName3"
                  placeholder="facebook page"
                />
              </div>
            </div>

            <div className="form-group row ">
              <div className="col-sm-10 pt-3">
                <button className="btn btn-danger  mb-5">Add Now</button>
              </div>
            </div>
          </form>
        </div>
        <Footer style={{ marginTop: "500px" }} />
      </div>
    );
  }
}

export default AddData;
