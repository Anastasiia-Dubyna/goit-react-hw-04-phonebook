import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterStyle, FilterInput, FilterLabel } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <FilterStyle>
        <FilterLabel>
          Find contact by Name
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
          ></FilterInput>
        </FilterLabel>
      </FilterStyle>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
