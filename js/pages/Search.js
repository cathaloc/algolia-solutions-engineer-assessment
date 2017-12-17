import React from "react";

import SearchFilters from "../components/SearchFilters"
import SearchQuery from "../components/SearchQuery"
import SearchResults from "../components/SearchResults"

export default class Search extends React.Component {

  flexStyle = {
    display: 'flex'
  }

  render() {
    return (
      <div>
        <SearchQuery />
        <div style={this.flexStyle}>
          <SearchFilters />
          <SearchResults />
        </div>
      </div>
    );
  }
}
