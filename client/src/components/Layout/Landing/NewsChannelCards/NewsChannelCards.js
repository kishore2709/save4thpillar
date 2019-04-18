import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getChannels } from "../../../../actions/getChannels";

import "./NewsChannelCards.css";

import NewsChannelCard from "./NewsChannelCard/NewsChannelCard";

import axios from "axios";

class NewsChannelCards extends Component {
    state = {
        channels: [],
        show: false
    };

    componentDidMount() {
        axios
            .get("/channels/get-channels")
            .then(res => {
                console.log(res);
                this.setState({ channels: res.data, show: true });
            })
            .catch(err => console.log(err));
        // getChannels();
        // if (this.props.channels) {
        //     this.setState({
        //         yes: true
        //     });
        // }
    }

    render() {
        let channels = (
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                Loading...please wait
            </h1>
        );
        if (this.state.show) {
            channels = this.state.channels.map(channnel => {
                return (
                    <NewsChannelCard
                        key={channnel.id}
                        name={channnel.name}
                        info={channnel.info}
                        website={channnel.website}
                        twitter={channnel.twitter}
                        facebook={channnel.facebook}
                    />
                );
            });
        }
        return (
            <div>
                <div>{channels}</div>
            </div>
        );
    }
}
// NewsChannelCards.propTypes = {
//     getChannels: PropTypes.func.isRequired,
//     getData: PropTypes.object.isRequired,
//     channels: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     getData: state.getData
// });

// export default connect(
//     mapStateToProps,
//     { getChannels }
// )(NewsChannelCards);
export default NewsChannelCards;
