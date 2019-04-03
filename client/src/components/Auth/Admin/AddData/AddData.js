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
            Add New channels/Journalists/Reporters/Anchors
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
