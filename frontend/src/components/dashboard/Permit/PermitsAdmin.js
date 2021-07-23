import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ListPermits from "./ListPermits";
import PermitRegister from "./PermitRegister";

class PermitsAdmin extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <ListPermits />
            </Col>
            <Col md="auto">
              <PermitRegister />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect()(withRouter(PermitsAdmin));
