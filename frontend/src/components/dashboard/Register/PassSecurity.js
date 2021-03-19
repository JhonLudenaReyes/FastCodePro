import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { putPassword } from "../../../actions/userActions";
import { Container, Form, Col, Button, Alert } from "react-bootstrap";

class PassSecurity extends Component {
  state = {
    email: "",
    userId: 1,
  };

  componentDidMount() {}

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const Data = {
      correo_electronico: this.state.email,
      idUsuario: this.state.userId,
    };

    this.props.putPassword(Data);

    this.setState({
      email: "",
      userId: 1,
    });
  };

  render() {
    const { verification } = this.props.user;

    return (
      <Container>
        {verification === 1 && (
          <Alert key={1} variant="primary">
            Sus datos han sido actualizados correctamente..!
          </Alert>
        )}
        <Col>
          <h4>
            <b>Regístrate</b> a continuación
          </h4>
        </Col>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Control
              onChange={this.onChange}
              value={this.state.email}
              id="email"
              type="email"
              placeholder="Ingrese su correo electrónico"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Regístrate
          </Button>
        </Form>
      </Container>
    );
  }
}

PassSecurity.propTypes = {
  putPassword: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { putPassword })(PassSecurity);