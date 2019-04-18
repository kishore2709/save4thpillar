import React from "react";

import Rating from "../../Rating/Rating";
import "./NewsChannelCard.css";
import NDTV from "../../../../../assets/ndtv.png";

const newsChannelCard = props => {
    return (
        <div>
            <div className="container py-3">
                <div className="card">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-md-12 col-lg-7 col-xl-7 col-sm-12">
                            <div className="card-block px-6">
                                <h4 className="card-title">{props.name}</h4>
                                <p className="text-justify">{props.info}</p>
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
