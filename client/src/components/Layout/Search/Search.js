import React from "react";

import "./Search.css";
import Footer from "../Footer/Footer";

const search = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <form className="navbar-form searchbar" action="">
            <div className="form-group" style={{ display: "inline" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search News Channels, Anchors, Journalists and more..."
                />
                <button type="submit">
                  <span className="input-group-addon">
                    <i
                      className="fa fa-search"
                      style={{
                        color: "white"
                      }}
                    />
                  </span>
                </button>
              </div>
              <hr color="grey" style={{ marginTop: "1px" }} />
            </div>
          </form>
        </div>
      </div>
      <Footer style={{ marginTop: "200px" }} />
    </div>
  );
};
export default search;
