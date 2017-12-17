import React from "react";

import SearchFilters from "../components/SearchFilters"
import SearchQuery from "../components/SearchQuery"
import SearchResults from "../components/SearchResults"

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchQuery />
        <SearchFilters />
        <SearchResults />
      </div>
    );
  }
}
