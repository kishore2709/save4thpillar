import React, { Component } from "react";

import {
  Container,
  Table,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";

import classnames from "classnames";

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
              <Row>
                <Col sm="12">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Ranking</th>
                        <th>Channel Name</th>
                        <th>Current Rating</th>
                        <th>Read Comments</th>
                        <th>Rate this Channel</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>NDTV</td>
                        <td>7/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger" size="sm">
                            Rate Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Aaj Tak</td>
                        <td>4/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger" size="sm">
                            Rate Now
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Times Now</td>
                        <td>2/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger" size="sm">
                            Rate Now
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Ranking</th>
                        <th>Anchor Name</th>
                        <th>Current Rating</th>
                        <th>Read Comments</th>
                        <th>Rate this Anchor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ravish Kumar</td>
                        <td>8/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger">Rate Now</Button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Barkha Dutt</td>
                        <td>6/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger">Rate Now</Button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Arnab Goswami</td>
                        <td> -10/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger">Rate Now</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Ranking</th>
                        <th>Journalist/Reporter Name</th>
                        <th>Current Rating</th>
                        <th>Read Comments</th>
                        <th>Rate this Journalist/Reporter</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Rajat Sharma </td>
                        <td>7/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger">Rate Now</Button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Anjana</td>
                        <td>3/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger">Rate Now</Button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Abhisar Sharma</td>
                        <td>5/10</td>
                        <td>read more...</td>
                        <td>
                          <Button color="danger">Rate Now</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}
export default Landing;
