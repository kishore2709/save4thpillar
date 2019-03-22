import React, { Component } from "react";
import classnames from "classnames";

import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import NewsChannelCards from "./NewsChannelCards/NewsChannelCards";

class Landing extends Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                <span className="text-danger">News Channels</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                <span className="text-danger">News Anchors</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                <span className="text-danger">Journalists/Reporters</span>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <NewsChannelCards />
            </TabPane>
            <TabPane tabId="2"> tab pane 2</TabPane>
            <TabPane tabId="3"> tab pane 3</TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}
export default Landing;
