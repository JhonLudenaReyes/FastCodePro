import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table } from "react-bootstrap";

import { getListUsersByRole } from "../../../actions/userActions";
import { deleteUserById } from "../../../actions/userActions";
import { getUser } from "../../../actions/userActions";
import { getActionToDo } from "../../../actions/userActions";

class ListUsersByRole extends Component {
  state = {};

  componentDidMount() {
    this.getListUser();
  }

  componentDidUpdate() {}

  getListUser = () => {
    const { user } = this.props.auth;
    this.props.getListUsersByRole(user.rol);
  };

  //Recibe el id de usuario y ejecuta la funcion saveSelectedItem y le pasa dicho id para guardarlo en el store
  handleClickEdit = (userId) => {
    this.props.getUser(userId);
    this.props.getActionToDo(true);
  };

  handleClickDelete = (userId) => {
    const userData = {
      estatusUsuario: "P",
      idUsuario: userId,
    };
    this.props.deleteUserById(userData);
  };

  render() {
    //const { user } = this.props.auth;
    const { listUsersByRole } = this.props.user;

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Id Usuario</th>
              <th>Nombre De Usuario</th>
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
            {listUsersByRole.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.idUsuario}</td>
                <td>{user.nombre}</td>
                <td>
                  <Link
                    to="/dashboard/super-administrator/users-administration/user-edit"
                    className="btn btn-outline-primary"
                    onClick={() => this.handleClickEdit(user.idUsuario)}
                  >
                    Editar
                  </Link>{" "}
                  <Link
                    to="/dashboard/super-administrator"
                    className="btn btn-outline-primary"
                    onClick={() => this.handleClickDelete(user.idUsuario)}
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

ListUsersByRole.propTypes = {
  getListUsersByRole: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps, {
  getListUsersByRole,
  deleteUserById,
  getUser,
  getActionToDo,
})(withRouter(ListUsersByRole));
