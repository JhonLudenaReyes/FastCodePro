import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ListUsersByRole from "../User/ListUsersByRole";
import ListRolesByRole from "../Role/ListRolesByRole";
import RoleRegister from "../Role/RoleRegister";
import ListUserRolesByRole from "../UserRoles/ListUserRolesByRole";
import UserRoleRegister from "../UserRoles/UserRoleRegister";
class RolesAdmin extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={6}>
              <Row className="justify-content-md-center">
                <h1>Lista de usuarios</h1>
                <ListUsersByRole />
              </Row>
              <Row className="justify-content-md-center">
                <h1>Lista de roles</h1>
                <ListRolesByRole />
              </Row>
              <Row className="justify-content-md-center">
                <h1>Roles</h1>
                <RoleRegister />
              </Row>
            </Col>
            {" - - "}
            <Col>
              <Row className="justify-content-md-center">
                <h1>Roles de usuario</h1>
                <ListUserRolesByRole />
              </Row>
              <Row className="justify-content-md-center">
                <h1>Asignación de Roles</h1>
                <UserRoleRegister />
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect()(withRouter(RolesAdmin));
