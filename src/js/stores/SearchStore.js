import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class SearchStore extends EventEmitter {
  constructor() {
    super();
    this.searchResults = [];
    this.searchFilters = {};
  }

  // WRITE methods
  
  createSearchResults(results) {
    this.searchResults = results;
    this.emit("searchResults:update");
  }

  clearSearchResults() {
    this.searchResults = [];
    this.emit("searchResults:update");
  }

  createSearchFilterOptions(filter_type, filter_options) {
    this.searchFilters[filter_type] = filter_options;
    this.emit("searchFilters:update");
  }

  // READ methods
  
  getResults() {
    return this.searchResults;
  }

  getFilters() {
    return this.searchFilters;
  }

  // ACTION handler

  handleActions(action) {
    switch(action.type) {
      case "UPDATE_SEARCH_RESULTS":
        this.createSearchResults(action.results);
      break;

      case "UPDATE_SEARCH_FILTER_OPTIONS":
        this.createSearchFilterOptions(action.filter_type, action.filter_options);
      break;
    }
  }
}

const searchStore = new SearchStore;
dispatcher.register(searchStore.handleActions.bind(searchStore));
export default searchStore;