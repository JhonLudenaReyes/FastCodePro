import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import { connect } from "react-redux";
//import CategoryNavDropdown from "./CategoryNavDropdown";
import Search from "./Search";
import LogButton from "./LogButton";

class GuestNavbar extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Search />
        <Nav variant="pills" className="ml-auto">
          <Nav.Link href="#home">Cursos</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#home">Agenda</Nav.Link>
          <Nav.Link href="#link">Contactanos</Nav.Link>
          {/*<CategoryNavDropdown />*/}
        </Nav>
        <LogButton />
      </Container>
    );
  }
}

export default connect()(GuestNavbar);
