import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LogButton extends Component {
  render() {
    return (
      <Form inline>
        <Row>
          <Col md="auto">
            <Link to="/register" className="btn btn-outline-primary">
              Registrarse
            </Link>
          </Col>
          <Col md="auto">
            <Link to="/login" className="btn btn-outline-primary">
              Iniciar Sesión
            </Link>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect()(LogButton);
