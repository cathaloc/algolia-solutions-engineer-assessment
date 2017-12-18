import React from "react";

import SearchFilter from "./SearchFilter";

export default class SearchFilters extends React.Component {
  constructor() {
    super();
  }

  render() {
    const searchFilters = Object.keys(this.props.searchFilters).map((filterType, i) => {
      const filterOptions = this.props.searchFilters[filterType]

      return <SearchFilter searchFilterType={filterType} searchFilterOptions={filterOptions} key={i} />;
    });

    return (
      <div class="search-filters-container">
        <ul>
          { searchFilters }
        </ul>
      </div>
    );
  }
}
