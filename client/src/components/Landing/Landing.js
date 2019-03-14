import React, { Component } from "react";

import { Container, Table, Button } from "reactstrap";

class Landing extends Component {
  render() {
    return (
      <div>
        <Container>
          <Table responsive>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Channel Name</th>
                <th>Current Rating</th>
                <th>Read Comments</th>
                <th>Rate This</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>NDTV</td>
                <td>7/10</td>
                <td>read more...</td>
                <td>
                  <Button color="danger">Rate Now</Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Aaj Tak</td>
                <td>4/10</td>
                <td>read more...</td>
                <td>
                  <Button color="danger">Rate Now</Button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Times Now</td>
                <td>2/10</td>
                <td>read more...</td>
                <td>
                  <Button color="danger">Rate Now</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default Landing;
