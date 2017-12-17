import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class SearchStore extends EventEmitter {
  constructor() {
    super();
    this.searchResults = [];
  }

  createSearchResults(results) {
    this.searchResults = results;
    this.emit("searchResults:update");
  }

  clearSearchResults() {
    this.searchResults = [];
    this.emit("searchResults:update");
  }

  getResults() {
    return this.searchResults;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_SEARCH_RESULTS": {
        this.createSearchResults(action.results);
      }
    }
  }
}

const searchStore = new SearchStore;
dispatcher.register(searchStore.handleActions.bind(searchStore));
export default searchStore;