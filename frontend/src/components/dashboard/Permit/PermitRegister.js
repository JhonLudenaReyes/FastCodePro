import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { saveAction } from "../../../actions/permitActions";

import axios from "axios";

class PermitRegister extends Component {
  //Establece el estado de este componente...
  state = {
    permitId: "",
    permit: "",
    state: "",
  };

  componentDidUpdate(prevProps) {
    const { permit } = this.props.permit;
    if (permit !== prevProps.permit.permit) {
      this.updateState(permit);
    }
  }

  updateState = (permit) => {
    this.setState({
      permitId: permit.permitId,
      permit: permit.permit,
      state: permit.state,
    });
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
      descripcion: this.state.permit,
    };

    const dataEdit = {
      descripcion: this.state.permit,
      estatusPermiso: this.state.state,
      idPermisos: this.state.permitId,
    };

    if (this.state.permitId === "") {
      this.savePermitRegister(dataSave);
    } else {
      this.editPermitRegister(dataEdit);
    }

    this.props.saveAction(true);

    //Función que limpia el formulario...
    this.clearState();
  };

  savePermitRegister = (dataSave) => {
    axios
      .post(`/services_fastcode/webapi/permisos_service`, dataSave)
      .then((res) => {
        console.log(res.dataSave);
        alert("Sus datos han sido guardados con exito");
      })
      .catch((err) => console.log(err));
  };

  editPermitRegister = (dataEdit) => {
    axios
      .put(`/services_fastcode/webapi/permisos_service`, dataEdit)
      .then((res) => {
        console.log(res.dataEdit);
        alert("Sus datos han sido actualizado con exito");
      })
      .catch((err) => console.log(err));
  };

  //Esta función establece los parametros del state en vacio...
  clearState = () => {
    this.setState({
      permitId: "",
      permit: "",
      state: "",
    });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Col>
              <h4>
                <b>Registro de permisos</b> de usuarios
              </h4>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Ingrese permiso de usuario</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.permit}
                  id="permit"
                  type="text"
                  placeholder="Ingrese nombre del permiso"
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

PermitRegister.propTypes = {
  permit: PropTypes.object.isRequired,
  saveAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  permit: state.permit,
});

export default connect(mapStateToProps, {
  saveAction,
})(withRouter(PermitRegister));
