import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getChannels } from "../../../../actions/getChannels";

import "./NewsChannelCards.css";

import NewsChannelCard from "./NewsChannelCard/NewsChannelCard";
import NewsChannelCard1 from "./NewsChannelCard/NewsChannelCard1";
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
        if (this.state.show) {
            let NewsChannelCard = <NewsChannelCard />;
        }

        return (
            <div>
                <NewsChannelCard />
                <NewsChannelCard1 />
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
