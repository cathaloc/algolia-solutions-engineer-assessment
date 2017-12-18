import React from "react";

import SearchResult from "./SearchResult";

export default class SearchResults extends React.Component {
  render() {
    const searchResults = this.props.searchResults.map((result) => {
      return <SearchResult searchResult={result} key={result.objectID}/>;
    });

    return (
      <div class="search-results-container">
        <div class="search-results-details">34 results found in 0.002 seconds</div>
        <ul>
          {searchResults}
        </ul>
      </div>
    );
  }
}
