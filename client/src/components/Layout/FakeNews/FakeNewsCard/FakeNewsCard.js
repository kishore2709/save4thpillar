import React from "react";

import "./FakeNewsCard.css";

const fakeNewsCard = () => {
  return (
    <div>
      <section id="main-content">
        <section className="wrapper main-wrapper row">
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <section className="box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda vitae optio alias!{" "}
              </p>
            </section>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <section className="box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda vitae optio alias!{" "}
              </p>
            </section>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12">
            <section className="box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda vitae optio alias!{" "}
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default fakeNewsCard;
