import React, { Component } from "react";
import { Container, Nav, Form, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";

class AuthNavbar extends Component {
  componentDidMount() {}

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Container>
        <Nav className="mr-auto">
          <Link
            to="/dashboard/super-administrator/users-administration"
            style={{ color: "gray", textDecoration: "inherit" }}
          >
            <b>Usuario</b>
          </Link>
          <Link
            to="/dashboard/super-administrator/roles-administration"
            style={{ color: "gray", textDecoration: "inherit" }}
          >
            <b>Rol</b>
          </Link>
        </Nav>
        <Form inline>
          <Col md="auto">
            <b style={{ color: "white" }}>{user.nombre}</b>
          </Col>
          <Col md="auto">
            <Link
              to="/login"
              className="btn btn-outline-primary"
              onClick={this.onLogoutClick}
            >
              Cerrar Sesión
            </Link>
          </Col>
        </Form>
      </Container>
    );
  }
}

AuthNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
})(withRouter(AuthNavbar));
