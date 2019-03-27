import React from "react";

import Rating from "../../Rating/Rating";
import "./NewsChannelCard.css";
import IndiaToday from "../../../../../assets/indiatoday.png";

const newsChannelCard1 = () => {
  return (
    <div>
      <div className="container py-3">
        <div className="card">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-md-12 col-lg-7 col-xl-7 col-sm-12">
              <div className="card-block px-6">
                <h4 className="card-title">India Today </h4>
                <p className="text-justify">
                  India Today is a 24-hour English language television network
                  based in Noida, Uttar Pradesh that carries news, current
                  affairs and business programming in India. The channel is
                  owned by TV Today Network Ltd, which is a part of Living
                  Media.
                </p>
                <div className="row">
                  <div className="col-md-7 col-xl-7 col-sm-8 col-xs-8">
                    <Rating />
                  </div>
                  <div className="col-md-5 col-xl-5 col-sm-4 col-xs-4">
                    <p
                      className="h5 text-danger font-italic"
                      style={{ paddingTop: "10px" }}
                    >
                      <u>write review</u>
                    </p>
                  </div>
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
                  src={IndiaToday}
                  alt=""
                  style={{
                    width: "95%",
                    height: "200px",
                    position: "center",
                    marginBottom: "20px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newsChannelCard1;
