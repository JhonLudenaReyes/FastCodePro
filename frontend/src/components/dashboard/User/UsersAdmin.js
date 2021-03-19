import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ListUsersByRole from "./ListUsersByRole";

class UsersAdmin extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <ListUsersByRole />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect()(withRouter(UsersAdmin));
