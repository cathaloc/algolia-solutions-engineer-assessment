import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class SearchStore extends EventEmitter {
  constructor() {
    super();
    this.searchResults = [];
    this.searchFilters = {};
    this.lastSearchStatistics = {
      totalResults: 0,
      processingTimeMS: 0
    };
  }

  // WRITE methods
  
  updateSearchResults(results) {
    this.searchResults = results;
    this.emit("searchResults:update");
  }

  updateSearchFilterOptions(filter_type, filter_options) {
    this.searchFilters[filter_type] = filter_options;
    this.emit("searchFilters:update");
  }

  updateLastSearchStatistics(totalResults, processingTimeMS) {
    this.lastSearchStatistics.totalResults = totalResults;
    this.lastSearchStatistics.processingTimeMS = processingTimeMS;
    this.emit("lastSearchStatistics:update");
  }

  // READ methods
  
  getResults() {
    return this.searchResults;
  }

  getFilters() {
    return this.searchFilters;
  }

  getLastSearchStatistics() {
    return this.lastSearchStatistics;
  }

  // ACTION handler

  handleActions(action) {
    switch(action.type) {
      case "UPDATE_SEARCH_RESULTS":
        this.updateSearchResults(action.results);
      break;

      case "UPDATE_SEARCH_FILTER_OPTIONS":
        this.updateSearchFilterOptions(action.filter_type, action.filter_options);
      break;

      case "UPDATE_SEARCH_STATISTICS":
        this.updateLastSearchStatistics(action.nbHits, action.processingTimeMS);
      break;

    }
  }
}

const searchStore = new SearchStore;
dispatcher.register(searchStore.handleActions.bind(searchStore));
export default searchStore;