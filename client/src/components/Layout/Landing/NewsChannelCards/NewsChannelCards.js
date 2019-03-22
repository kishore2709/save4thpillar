import React from "react";
import "./NewsChannelCards.css";

const newsChannelCards = () => {
  return (
    <div>
      <div className="container py-3">
        <div className="card">
          <div className="row ">
            <div className="col-md-7 px-3">
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

                <br />
                <p className="h3 font-italic">Rating stars</p>
              </div>
            </div>

            <div className="col-md-5">
              <div>
                <img
                  className="d-block"
                  src="https://picsum.photos/450/300?image=1072"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer" style={{ marginTop: "700px" }}>
        Footer goes here
      </div>
    </div>
  );
};

export default newsChannelCards;
