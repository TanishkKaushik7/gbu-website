
import { useState } from 'react';
import AdvancedSearchFilter from './AdvancedSearchFilter';

import PropTypes from 'prop-types';

const EventFilters = ({
  onSearch,
  onDateFilter,
  onTypeFilter,
  onYearFilter,
  types,
  years
}) => {
  return (
    <AdvancedSearchFilter
      onSearch={onSearch}
      onDateFilter={onDateFilter}
      onTypeFilter={onTypeFilter}
      onYearFilter={onYearFilter}
      types={types}
      years={years}
      placeholder="Search events..."
    />
  );
};

export default EventFilters;
EventFilters.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onDateFilter: PropTypes.func.isRequired,
  onTypeFilter: PropTypes.func.isRequired,
  onYearFilter: PropTypes.func.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  years: PropTypes.arrayOf(PropTypes.string).isRequired,
};

