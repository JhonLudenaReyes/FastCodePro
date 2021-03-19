import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveRegister } from "../../../actions/userActions";
import { Container, Form, Col, Button, Alert } from "react-bootstrap";

class FormRegister extends Component {
  state = {
    userId: 1,
    names: "",
    lastName1: "",
    lastName2: "",
    email: "",
    user: "",
    password: "",
    userObservations: "",
    userState: "A",
  };

  componentDidMount() {}

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const Data = {
      idUsuario: this.state.userId,
      nombres: this.state.names,
      apellidoUno: this.state.lastName1,
      apellidoDos: this.state.lastName2,
      email: this.state.email,
      usuario: this.state.user,
      contrasenia: this.state.password,
      observacionesUsuario: this.state.userObservations,
      estatusUsuario: this.state.userState,
    };

    this.props.saveRegister(Data);

    this.setState({
      userId: 1,
      names: "",
      lastName1: "",
      lastName2: "",
      email: "",
      user: "",
      password: "",
      userObservations: "",
      userState: "A",
    });
  };

  render() {
    const { verification } = this.props.user;

    return (
      <Container>
        {verification === 1 && (
          <Alert key={1} variant="primary">
            Sus datos han sido guardados con exito..!
          </Alert>
        )}
        <Col>
          <h4>
            <b>Regístrate</b> a continuación
          </h4>
        </Col>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.names}
              id="names"
              type="text"
              placeholder="Escriba sus nombres completos"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.lastName1}
              id="lastName1"
              type="text"
              placeholder="Escriba su primer apellido"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.lastName2}
              id="lastName2"
              type="text"
              placeholder="Escriba su segundo apellido"
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
              value={this.state.user}
              id="user"
              type="text"
              placeholder="Ingrese nombre de usuario"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.password}
              id="password"
              type="password"
              placeholder="Contraseña"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.userObservations}
              id="userObservations"
              type="text"
              placeholder="Registre las observaciones del usuario"
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

FormRegister.propTypes = {
  saveRegister: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { saveRegister })(FormRegister);
