import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormRegister from './FormRegister'
import PassSecurity from './PassSecurity'

class Register extends Component {

  componentDidMount() {
    
  }

  render() {

    return (
      <Container>
        <Row>
          <Col>
            <FormRegister/>
          </Col>
          <Col>
            <PassSecurity/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(Register);