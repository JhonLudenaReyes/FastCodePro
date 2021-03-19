import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { saveUserRegister } from "../../../actions/userActions";
import { editUserRegister } from "../../../actions/userActions";
import { getUser } from "../../../actions/userActions";
import { getActionToDo } from "../../../actions/userActions";

class UserRegister extends Component {
  state = {
    userId: "",
    firstName: "",
    lastName1: "",
    lastName2: "",
    email: "",
    user: "",
    password: "",
    userComments: "",
    userState: "",
  };

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    const { actionToDo } = this.props.user;
    const { user } = this.props.user;
    if (user !== prevProps.user.user) {
      this.changeState(user);
      //this.props.getActionToDo(false);
    }
  }

  //Esta función recibe los datos del ususario y actualiza el state con esos datos
  changeState = (user) => {
    this.setState({
      userId: user.idUsuario,
      firstName: user.nombre,
      lastName1: user.apellidoUno,
      lastName2: user.apellidoDos,
      email: user.email,
      user: user.usuario,
      password: user.contrasenia,
      userComments: user.observacionesUsuario,
      userState: user.estado,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleClickClose = () => {
    this.props.getActionToDo(false);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const dataSave = {
      nombre: this.state.firstName,
      apellidoUno: this.state.lastName1,
      apellidoDos: this.state.lastName2,
      email: this.state.email,
      usuario: this.state.user,
      contrasenia: this.state.password,
      observacionesUsuario: this.state.userComments,
    };

    const dataEdit = {
      nombre: this.state.firstName,
      apellidoUno: this.state.lastName1,
      apellidoDos: this.state.lastName2,
      email: this.state.email,
      usuario: this.state.user,
      contrasenia: this.state.password,
      observacionesUsuario: this.state.userComments,
      estatusUsuario: this.state.userState,
      idUsuario: this.state.userId,
    };

    const { actionToDo } = this.props.user;
    if (actionToDo === false) {
      this.props.saveUserRegister(dataSave);
    } else {
      this.props.editUserRegister(dataEdit);
    }

    this.clearState();
  };

  clearState = () => {
    this.setState({
      firstName: "",
      lastName1: "",
      lastName2: "",
      email: "",
      user: "",
      password: "",
      userComments: "",
    });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <i className="material-icons left">keyboard_backspace</i>
              Volver a inicio
            </Link>
            <Col>
              <h4>
                <b>Regístrate</b> a continuación
              </h4>
              <p>
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" style={{ textDecoration: "inherit" }}>
                  Iniciar sesión
                </Link>
              </p>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Ingrese su nombre</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.firstName}
                  id="firstName"
                  type="text"
                  placeholder="Ingrese nombre completo"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ingrese su primer apellido</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.lastName1}
                  id="lastName1"
                  type="text"
                  placeholder="Ingrese primer apellido"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ingrese su segundo apellido</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.lastName2}
                  id="lastName2"
                  type="text"
                  placeholder="Ingrese segundo apellido"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                  placeholder="Ingrese correo electrónico"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ingrese nombre de usuario</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.user}
                  id="user"
                  type="text"
                  placeholder="Ingrese su usuario"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ingrese las observaciones de ususario</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.userComments}
                  id="userComments"
                  type="text"
                  placeholder="Ingrese observaciones de usuario"
                />
              </Form.Group>
              <Link
                to="/dashboard/super-administrator/users-administration"
                className="btn btn-outline-primary"
                onClick={() => this.handleClickClose()}
              >
                Cerrar
              </Link>{" "}
              <Button variant="primary" type="submit">
                Guardar cambios
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

UserRegister.propTypes = {
  saveUserRegister: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  saveUserRegister,
  editUserRegister,
  getUser,
  getActionToDo,
})(withRouter(UserRegister));
