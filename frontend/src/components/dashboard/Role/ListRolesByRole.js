import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table, Button } from "react-bootstrap";

import { getListRolesByRole } from "../../../actions/rolActions";
import { saveRoleList } from "../../../actions/rolActions";
import { deleteRoleById } from "../../../actions/rolActions";
class ListRolesByRole extends Component {
  componentDidMount() {
    this.getListRole();
  }

  componentDidUpdate(prevProps) {
    const { listRolesByRole } = this.props.role;
    if (listRolesByRole === prevProps.role.listRolesByRole) {
      this.getListRole();
    }
  }

  getListRole = () => {
    const { user } = this.props.auth;
    this.props.getListRolesByRole(user.rol);
  };

  handleClickEdit = (roleId, roleDescription, roleObservations) => {
    const data = {
      roleId,
      roleDescription,
      roleObservations,
    };
    console.log(data);
    this.props.saveRoleList(data);
  };

  handleClickDelete = (roleId) => {
    console.log(roleId);
    this.props.deleteRoleById(roleId);
  };

  render() {
    const { listRolesByRole } = this.props.role;

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Id Rol</th>
              <th>Nombre De Rol</th>
              <th>Observaciones</th>
              <th>
                Acciones{" "}
                <Link
                  to="/dashboard/super-administrator/users-administration/user-save"
                  className="btn btn-outline-primary"
                >
                  Agregar
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {listRolesByRole.map((rol, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{rol.idRol}</td>
                <td>{rol.descripcionRol}</td>
                <td>{rol.observaciones}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.handleClickEdit(
                        rol.idRol,
                        rol.descripcionRol,
                        rol.observaciones
                      )
                    }
                  >
                    Editar
                  </Button>{" "}
                  <Link
                    to="/dashboard/super-administrator"
                    className="btn btn-outline-primary"
                    onClick={() => this.handleClickDelete(rol.idRol)}
                  >
                    Eliminar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

ListRolesByRole.propTypes = {
  getListRolesByRole: PropTypes.func.isRequired,
  saveRoleList: PropTypes.func.isRequired,
  deleteRoleById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  role: state.role,
});

export default connect(mapStateToProps, {
  getListRolesByRole,
  saveRoleList,
  deleteRoleById,
})(withRouter(ListRolesByRole));
