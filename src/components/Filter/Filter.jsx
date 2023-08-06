import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyle, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterStyle>
      <FilterLabel>
        Find contact by Name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => onChange(evt.target.value)}
        ></FilterInput>
      </FilterLabel>
    </FilterStyle>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
