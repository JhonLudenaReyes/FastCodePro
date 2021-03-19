import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoryActions";
import { Col, Button, Accordion, Card, Image } from "react-bootstrap";

class Category extends Component {
  state = {};

  componentDidMount() {
    const { user } = this.props.auth;
    this.props.getCategories(user.idUsuario);
  }

  render() {
    //const { user } = this.props.auth;
    const { categories } = this.props.category;
    let { Controller, Ban } = this.props;

    return (
      <Col>
        {categories.map((category, index) => (
          <Accordion key={index}>
            <Card>
              {category.idCategoria !== Controller && (
                <Card.Header>
                  {(Controller = category.idCategoria)}
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h4>
                      <Image
                        src={`data:image/png[jpg];base64, ${category.logo_categoria}`}
                        roundedCircle
                        width="80"
                        height="80"
                      />
                      {category.descripcionCategoria}
                    </h4>
                    {(Ban = true)}
                  </Accordion.Toggle>
                </Card.Header>
              )}
              {Ban === true &&
                categories.map(
                  (categ, index) =>
                    Controller === categ.idCategoria && (
                      <Accordion.Collapse eventKey="0" key={index}>
                        <Card.Body>
                          <h4>
                            <Image
                              src={`data:image/png[jpg];base64, ${categ.logo_Curso}`}
                              roundedCircle
                              width="50"
                              height="50"
                            />
                            {categ.nombreCurso}
                          </h4>
                        </Card.Body>
                      </Accordion.Collapse>
                    )
                )}
              {(Ban = false)}
            </Card>
          </Accordion>
        ))}
      </Col>
    );
  }
}

Category.propTypes = {
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  category: state.category,
});

export default connect(mapStateToProps, { getCategories })(Category);