import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";

import { saveUserRoleRegister } from "../../../actions/userRolesActions";
import { editUserRoleRegister } from "../../../actions/userRolesActions";

class UserRoleRegister extends Component {
  //Establece el estado de este componente...
  state = {
    userRoleId: "",
    userId: "",
    roleId: "",
    observations: "",
    userOptions: [],
    selectedUserOption: null,
    options: [],
    selectedOption: null,
  };

  componentDidMount() {
    const { listRolesByRole } = this.props.role;
    this.changeStateSelect(listRolesByRole);

    const { listUsersByRole } = this.props.user;
    this.changeStateUserSelect(listUsersByRole);
  }

  handleChangeUser = (selectedUserOption) => {
    this.setState({ selectedUserOption });
    console.log(`Option selected:`, selectedUserOption);
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  changeStateUserSelect = (listUsersByRole) => {
    const users = [];
    listUsersByRole.map(
      (user, index) =>
        (users[index] = {
          value: user.idUsuario,
          label: user.nombre,
        })
    );
    this.setState({
      userOptions: users,
    });
  };

  changeStateSelect = (listRolesByRole) => {
    const roles = [];
    listRolesByRole.map(
      (role, index) =>
        (roles[index] = {
          value: role.idRol,
          label: role.descripcionRol,
        })
    );
    this.setState({
      options: roles,
    });
  };

  componentDidUpdate(prevProps) {
    const { userRole } = this.props.userRole;
    if (userRole !== prevProps.userRole.userRole) {
      this.changeState(userRole);
    }
  }

  changeState = (userRole) => {
    this.setState({
      userRoleId: userRole.userRoleId,
      userId: userRole.userId,
      roleId: userRole.roleId,
      observations: userRole.observations,
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
      idUsuario: this.state.selectedUserOption.value,
      idRol: this.state.selectedOption.value,
      observaciones: this.state.observations,
    };

    const dataEdit = {
      idUsuario: this.state.selectedUserOption.value,
      idRol: this.state.selectedOption.value,
      observaciones: this.state.observations,
      idUsuarioRol: this.state.userRoleId,
    };

    if (this.state.userRoleId) {
      this.props.editUserRoleRegister(dataEdit);
    } else {
      console.log(dataSave);
      this.props.saveUserRoleRegister(dataSave);
    }

    //Función que limpia el formulario...
    this.clearState();
  };

  //Esta función establece los parametros del state en vacio...
  clearState = () => {
    this.setState({
      userRoleId: "",
      userId: "",
      roleId: "",
      observations: "",
      selectedUserOption: null,
      selectedOption: null,
    });
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedUserOption } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Col>
              <h4>
                <b>Registro roles de usuario</b> a continuación
              </h4>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Seleccione un usuario</Form.Label>
                <Select
                  value={selectedUserOption}
                  onChange={this.handleChangeUser}
                  options={this.state.userOptions}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Seleccione un rol</Form.Label>
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={this.state.options}
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

UserRoleRegister.propTypes = {
  saveUserRoleRegister: PropTypes.func.isRequired,
  editUserRoleRegister: PropTypes.func.isRequired,
  userRole: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userRole: state.userRole,
  role: state.role,
  user: state.user,
});

export default connect(mapStateToProps, {
  saveUserRoleRegister,
  editUserRoleRegister,
})(withRouter(UserRoleRegister));
