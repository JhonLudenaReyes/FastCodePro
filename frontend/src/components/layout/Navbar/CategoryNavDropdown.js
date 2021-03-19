import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllCategories } from "../../../actions/categoryActions";

class CategoryNavDropdown extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    const { categories } = this.props.category;
    let { Controller, Ban } = this.props;

    return (
      <NavDropdown title="Certificaciones">
        {categories.map(
          (category, index) =>
            category.idCategoria !== Controller && (
              <NavDropdown
                title={category.descripcionCategoria}
                key={index}
                href=""
              >
                {(Controller = category.idCategoria)}
                {(Ban = true)}
                {Ban === true &&
                  categories.map(
                    (categ, index) =>
                      Controller === categ.idCategoria && (
                        <NavDropdown.Item key={index} href="">
                          {categ.nombreCurso}
                        </NavDropdown.Item>
                      )
                  )}
                {(Ban = false)}
              </NavDropdown>
            )
        )}
      </NavDropdown>
    );
  }
}

CategoryNavDropdown.propTypes = {
  getAllCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, {
  getAllCategories,
})(CategoryNavDropdown);
