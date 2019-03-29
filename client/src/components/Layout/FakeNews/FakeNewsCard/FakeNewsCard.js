import React from "react";

import "./FakeNewsCard.css";
import "./FakeSection/FakeSection";
import FakeSection from "./FakeSection/FakeSection";

const fakeNewsCard = () => {
  return (
    <div className="container">
      <section id="main-content">
        <section className="wrapper main-wrapper row">
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <FakeSection />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <FakeSection />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <FakeSection />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <FakeSection />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <FakeSection />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <FakeSection />
          </div>
        </section>
      </section>
    </div>
  );
};

export default fakeNewsCard;
