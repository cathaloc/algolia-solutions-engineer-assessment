import React from "react";

import SearchFilters from "../components/SearchFilters"
import SearchQuery from "../components/SearchQuery"
import SearchResults from "../components/SearchResults"
import SearchStore from "../stores/SearchStore"
import * as SearchActions from "../actions/SearchActions";

export default class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      searchQuery: "",
      searchResults: SearchStore.getResults(),
      searchFilters: [],
      lastSearchStatistics: {
        totalResults: 0,
        processingTimeMS: 0
      }
    }
    this.performSearch();
  }

  componentWillMount() {
    SearchStore.on("searchResults:update", () => {
      this.setState({searchResults: SearchStore.getResults()});
    });

    SearchStore.on("searchFilters:update", () => {
      this.setState({searchFilters: SearchStore.getFilters()});
    });
    SearchStore.on("lastSearchStatistics:update", () => {
      this.setState({lastSearchStatistics: SearchStore.getLastSearchStatistics()});
    });
  }

  flexStyle = {
    display: 'flex'
  }

  searchQueryChanged(e) {
    this.setState({searchQuery: e.target.value}, () => {
      this.performSearch();
    });
  }

  performSearch() {
    SearchActions.performSearch(this.state.searchQuery, {});
  }

  render() {
    return (
      <div>
        <SearchQuery onChange={this.searchQueryChanged.bind(this)}/>
        <div style={this.flexStyle}>
          <SearchFilters searchFilters={this.state.searchFilters} />
          <SearchResults searchStatistics={ this.state.lastSearchStatistics }searchResults={this.state.searchResults} />
        </div>
      </div>
    );
  }
}
