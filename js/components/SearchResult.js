import React from "react";

import SearchResult from "./SearchResult";

export default class SearchResults extends React.Component {
  render() {
    return (
      <li class="search-result">
        <image class="search-result-thumbnail" src="https://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg"/>
        <div class="search-result-details">
          <label class="search-result-title">This is a search result </label>
          <div>
            <span class="search-result-stars">4.2 / 5.0 stars</span>
            <span class="search-result-ratings">(1025 ratings)</span>
          </div>
          <div class="search-result-extra-details">American & Seafood | SOMA | $31 to $50 </div>
        </div>
      </li>
    );
  }
}
