import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import IndexSuperAdmin from "../IndexPage/IndexSuperAdmin";

class DashboardSuperAdmin extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <IndexSuperAdmin />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect()(withRouter(DashboardSuperAdmin));
