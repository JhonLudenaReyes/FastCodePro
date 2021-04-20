import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";

import { saveRoleRegister } from "../../../actions/rolActions";
import { editRoleRegister } from "../../../actions/rolActions";

const options = [
  { value: 1, label: "Jhon" },
  { value: 2, label: "Michael" },
  { value: 3, label: "Carlos" },
];
class RoleRegister extends Component {
  //Establece el estado de este componente...
  state = {
    roleId: "",
    roleDescription: "",
    roleObservations: "",
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  componentDidUpdate(prevProps) {
    const { role } = this.props.role;
    if (role !== prevProps.role.role) {
      this.changeState(role);
    }
  }

  changeState = (role) => {
    this.setState({
      roleId: role.roleId,
      roleDescription: role.roleDescription,
      roleObservations: role.roleObservations,
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
      descripcionRol: this.state.roleDescription,
      observaciones: this.state.roleObservations,
    };

    const dataEdit = {
      descripcionRol: this.state.roleDescription,
      observaciones: this.state.roleObservations,
      estatusRol: "A",
      idRol: this.state.roleId,
    };

    if (this.state.roleId) {
      this.props.editRoleRegister(dataEdit);
    } else {
      this.props.saveRoleRegister(dataSave);
    }

    //Función que limpia el formulario...
    this.clearState();
  };

  //Esta función establece los parametros del state en vacio...
  clearState = () => {
    this.setState({
      roleId: "",
      roleDescription: "",
      roleObservations: "",
    });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Col>
              <h4>
                <b>Registrar rol de usuario</b> a continuación
              </h4>
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
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
              <Form.Group>
                <Form.Label>Ingrese las observaciones</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.roleObservations}
                  id="roleObservations"
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
  editRoleRegister: PropTypes.func.isRequired,
  role: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  role: state.role,
});

export default connect(mapStateToProps, {
  saveRoleRegister,
  editRoleRegister,
})(withRouter(RoleRegister));
