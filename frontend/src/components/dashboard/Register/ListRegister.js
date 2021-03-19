import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRegisters } from "../../../actions/userActions";
import { Table } from "react-bootstrap";

class ListRegister extends Component {
  state = {};

  componentDidMount() {
    this.props.getRegisters();
  }

  render() {
    const { registers } = this.props.user;

    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        {registers.map((register, index) => (
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        ))}
      </Table>
    );
  }
}

ListRegister.propTypes = {
  getRegisters: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getRegisters })(ListRegister);
