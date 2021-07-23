import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table, Button } from "react-bootstrap";

import axios from "axios";

import { savePermit } from "../../../actions/permitActions";
import { saveAction } from "../../../actions/permitActions";

class ListPermits extends Component {
  state = {
    permits: [],
  };

  componentDidMount() {
    this.getListPermits();
  }

  componentDidUpdate(prevProps) {
    const { action } = this.props.permit;
    if (action !== prevProps.permit.action) {
      this.getListPermits();
      this.props.saveAction(false);
    }
  }

  getListPermits = () => {
    axios
      .get(`/services_fastcode/webapi/permisos_service`)
      .then((res) => {
        this.changeState(res.data);
      })
      .catch((err) => console.log(err));
  };
  changeState = (dataPermits) => {
    console.log(dataPermits);
    this.setState({
      permits: dataPermits,
    });
  };

  handleClickEdit = (permitId, permit, state) => {
    const data = {
      permitId,
      permit,
      state,
    };
    console.log(data);
    this.props.savePermit(data);
  };

  handleClickDelete = (permitId) => {
    var r = confirm("Está seguro que desea eliminar este registro");
    if (r == true) {
      axios
        .get(`/services_fastcode/webapi/permisos_two_service/${permitId}`)
        .then(() => {
          this.getListPermits();
          alert("El registro se ha eliminado correctamente");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Sus datos no se han modificado");
    }
  };

  render() {
    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Id Permiso</th>
              <th>Nombre Del permiso</th>
              <th>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.permits.map((permit, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{permit.idPermisos}</td>
                <td>{permit.descripcion}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.handleClickEdit(
                        permit.idPermisos,
                        permit.descripcion,
                        permit.estatusPermiso
                      )
                    }
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    onClick={() => this.handleClickDelete(permit.idPermisos)}
                  >
                    Eliminar
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

ListPermits.propTypes = {
  savePermit: PropTypes.func.isRequired,
  permit: PropTypes.object.isRequired,
  saveAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  permit: state.permit,
});

export default connect(mapStateToProps, {
  savePermit,
  saveAction,
})(withRouter(ListPermits));
