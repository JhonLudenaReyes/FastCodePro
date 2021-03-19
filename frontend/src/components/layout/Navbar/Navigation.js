import React, { Component } from "react";
import { Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AuthNavbar from "./AuthNavbar";
import GuestNavbar from "./GuestNavbar";

import Logo from '../../../static/img/logo_codeway5.png';

class Navigation extends Component {
  componentDidMount() {}

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = <AuthNavbar />;

    const guestLinks = <GuestNavbar/>;

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <Image src={ Logo } width="50" height= "50" rounded />
            <b>FastCode</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated ? authLinks : guestLinks}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigation);