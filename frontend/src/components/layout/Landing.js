import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Information from "../dashboard/Information";

class Landing extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h4>
              <b>FastCode</b> una plataforma de{" "}
              <span style={{ fontFamily: "monospace" }}>EDUCACIÓN</span> virtual
              para fomentar el aprendizaje
            </h4>
            <p align="center">
              Estudiar es la mejor herramienta para alcanzar tus sueños...
            </p>
            <br/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Link to="/register" className="btn btn-primary">
              Registrarse
            </Link>
          </Col>
          <Col md="auto">
            <Link to="/login" className="btn btn-primary">
              Iniciar Sesión
            </Link>
          </Col>
          <Col md="auto">
            <Information />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
