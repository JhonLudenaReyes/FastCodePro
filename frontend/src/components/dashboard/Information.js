import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveInformation } from "../../actions/informationActions";
import { Container, Form, Col, Button } from "react-bootstrap";

class Information extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    provincia: "",
    age: "",
    interes: "",
  };

  componentDidMount() {}

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const Data = {
      nombres: this.state.firstName,
      apellidos: this.state.lastName,
      telefono: this.state.phone,
      correo_electronico: this.state.email,
      pais: this.state.country,
      provincia: this.state.provincia,
      edad: this.state.age,
      programa_interes: this.state.interes,
    };

    this.props.saveInformation(Data);

    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      country: "",
      provincia: "",
      age: "",
      interes: "",
    });
  };

  render() {
    return (
      <Container>
        <Col>
          <h4>
            <b>Regístrate</b> a continuación
          </h4>
        </Col>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.firstName}
              id="firstName"
              type="text"
              placeholder="Escriba sus nombres completos"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.lastName}
              id="lastName"
              type="text"
              placeholder="Escriba sus apellidos completos"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.phone}
              id="phone"
              type="number"
              placeholder="Ingrese su número de teléfono"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.email}
              id="email"
              type="email"
              placeholder="Ingrese su correo electrónico"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.country}
              id="country"
              type="text"
              placeholder="Escriba su país de nacionalidad"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.provincia}
              id="provincia"
              type="text"
              placeholder="Escriba su provincia de origen"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.age}
              id="age"
              type="number"
              placeholder="Ingrese su edad"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.interes}
              id="interes"
              type="text"
              placeholder="Ingrese su programa de interes"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Regístrate
          </Button>
        </Form>
      </Container>
    );
  }
}

Information.propTypes = {
  saveInformation: PropTypes.func.isRequired,
  //verification: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  //verification: state.verification,
});

export default connect(mapStateToProps, { saveInformation })(Information);
