import React from "react";

import SearchResult from "./SearchResult";

export default class SearchResults extends React.Component {
  render() {
    const searchResults = this.props.searchResults.map((result) => {
      return <SearchResult searchResult={result} key={result.objectID}/>;
    });

    const { totalResults } = this.props.searchStatistics;
    const { processingTimeMS } = this.props.searchStatistics;
    const searchDetails = `${totalResults} results found in ${processingTimeMS / 1000} seconds.`

    return (
      <div class="search-results-container">
        <div class="search-results-details">{ searchDetails }</div>
        <ul>
          {searchResults}
        </ul>
      </div>
    );
  }
}
