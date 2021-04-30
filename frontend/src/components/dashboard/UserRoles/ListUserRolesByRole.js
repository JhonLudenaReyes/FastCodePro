import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table, Button } from "react-bootstrap";

import { getListUserRolesByRole } from "../../../actions/userRolesActions";
import { saveUserRoleList } from "../../../actions/userRolesActions";
import "./Styles/ListUserRolesByRole.css";
class ListUserRolesByRole extends Component {
  componentDidMount() {
    this.getListUserRoles();
  }

  /*componentDidUpdate(prevProps) {
    const { listUserRolesByRole } = this.props.userRole;
    if (listUserRolesByRole === prevProps.role.listUserRolesByRole) {
      this.getListUserRoles();
    }
  }*/

  getListUserRoles = () => {
    const { user } = this.props.auth;
    this.props.getListUserRolesByRole(user.rol);
  };

  handleClickEdit = (userRoleId, userId, roleId, observations) => {
    const data = {
      userRoleId,
      userId,
      roleId,
      observations,
    };
    console.log(data);
    this.props.saveUserRoleList(data);
  };

  render() {
    const { listUserRolesByRole } = this.props.userRole;

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Id Usuario Rol</th>
              <th>Id Usuario</th>
              <th>Id Rol</th>
              <th>Observaciones</th>
              <th>
                Acciones{" "}
                <Link to="#" className="btn btn-outline-primary">
                  Agregar
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {listUserRolesByRole.map((userRole, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{userRole.idRoles_Usuario}</td>
                <td>{userRole.idUsuario}</td>
                <td>{userRole.idRol}</td>
                <td>{userRole.observaciones}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.handleClickEdit(
                        userRole.idRoles_Usuario,
                        userRole.idUsuario,
                        userRole.idRol,
                        userRole.observaciones
                      )
                    }
                  >
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

ListUserRolesByRole.propTypes = {
  getListUserRolesByRole: PropTypes.func.isRequired,
  saveUserRoleList: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userRole: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  userRole: state.userRole,
});

export default connect(mapStateToProps, {
  getListUserRolesByRole,
  saveUserRoleList,
})(withRouter(ListUserRolesByRole));
