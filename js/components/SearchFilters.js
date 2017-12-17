import React from "react";

import SearchFilter from "./SearchFilter";

export default class SearchFilters extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="search-filters-container">
        <ul>
          <SearchFilter type="Food/Cuisine"/>
          <SearchFilter type="Payment Method"/>
        </ul>
      </div>
    );
  }
}
