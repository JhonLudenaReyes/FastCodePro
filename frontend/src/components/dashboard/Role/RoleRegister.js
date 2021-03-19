import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { saveRoleRegister } from "../../../actions/rolActions";

class RoleRegister extends Component {
  //Establece el estado de este componente...
  state = {
    roleDescription: "",
    observations: "",
  };

  //Captura los datos del formulario y los almacena en el state...
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  //Captura los datos del state y los envia como parametro a la función saveRoleRegister para que los guarde en la base de datos, luego limpia el formulario...
  onSubmit = (e) => {
    e.preventDefault();

    //Datos del state
    const dataSave = {
      descripcionRol: this.state.roleDescription,
      observaciones: this.state.observations,
    };

    //Función que guarda la información en la base de datos...
    this.props.saveRoleRegister(dataSave);

    //Función que limpia el formulario...
    this.clearState();
  };

  //Esta función establece los parametros del state en vacio...
  clearState = () => {
    this.setState({
      roleDescription: "",
      observations: "",
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
                <b>Registrar rol de usuario</b> a continuación
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
                <Form.Label>Ingrese rol de usuario</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.roleDescription}
                  id="roleDescription"
                  type="text"
                  placeholder="Ingrese nombre del rol"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ingrese las observaciones</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.observations}
                  id="observations"
                  type="text"
                  placeholder="Ingrese observaciones"
                />
              </Form.Group>
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

RoleRegister.propTypes = {
  saveRoleRegister: PropTypes.func.isRequired,
  role: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  role: state.role,
});

export default connect(mapStateToProps, {
  saveRoleRegister,
})(withRouter(RoleRegister));
