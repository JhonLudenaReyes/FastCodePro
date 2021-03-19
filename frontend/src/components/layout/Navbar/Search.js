import React, { Component } from "react";
import { Form, FormControl, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    return (
      <Row>
        <Col md="auto">
          <Form inline className="ml-auto">
            <FormControl
              type="text"
              placeholder="Busqueda..."
              className="mr-sm-2"
            />
            <Button variant="outline-primary">Buscar</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default connect()(Search);