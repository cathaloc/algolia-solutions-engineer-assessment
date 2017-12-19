import React from "react";

import SearchResult from "./SearchResult";
import * as SearchActions from "../actions/SearchActions";

export default class SearchResults extends React.Component {

  constructor() {
    super();
    this.disableInfiniteSearch = false;
  }

  loadMoreResults() {
    SearchActions.getNextPageOfResults();
  }

  searchResultsDidScroll(e) {
    if(this.disableInfiniteSearch)
      return;

    const distanceFromBottom = e.target.scrollHeight - e.target.offsetHeight - e.target.scrollTop;
    if (distanceFromBottom == 0) {
      this.disableInfiniteSearch = true;
      console.log("Loading")
      this.loadMoreResults();
    }
  }

  componentDidUpdate() {
    this.disableInfiniteSearch = false;
  }

  render() {
    const searchResults = this.props.searchResults.map((result) => {
      return <SearchResult searchResult={result} key={result.objectID}/>;
    });

    const { totalResults } = this.props.searchStatistics;
    const { processingTimeMS } = this.props.searchStatistics;
    const searchDetails = `${totalResults} results found in ${processingTimeMS / 1000} seconds.`

    return (
      <div onScroll={this.searchResultsDidScroll.bind(this)} class="search-results-container">
        <div class="search-results-details" ref={(el) => { this.resultsTop = el; }}>{ searchDetails }</div>
        <ul>
          {searchResults}
        </ul>
        <div class='search-results-actions'>
          <button onClick={this.loadMoreResults.bind(this)} class='search-results-show-more'>Show More</button>
        </div>
      </div>
    );
  }
}
