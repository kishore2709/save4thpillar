import React from "react";
import "./NewsChannelCard.css";

import NDTV from "../../../../../assets/ndtv.png";

const newsChannelCard = () => {
  return (
    <div>
      <div className="container py-3">
        <div className="card">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-md-12 col-lg-7 col-xl-7 col-sm-12">
              <div className="card-block px-6">
                <h4 className="card-title">NDTV </h4>
                <p className="text-justify">
                  New Delhi Television Limited (NDTV) is an Indian television
                  media company founded in 1988 by Radhika Roy, a journalist. In
                  a talk on the 25th anniversary of NDTV, her husband Prannoy
                  Roy said that he joined NDTV a few weeks after Radhika had
                  founded it. NDTV is an acronym for the original name of the
                  company, New Delhi Television.
                </p>

                <div class="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
            </div>

            <div
              className="col-md-12 col-lg-5 col-xl-5 col-sm-12"
              style={{ marginTop: "50px" }}
            >
              <div>
                <img
                  className="d-block"
                  src={NDTV}
                  alt=""
                  style={{ width: "95%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newsChannelCard;
