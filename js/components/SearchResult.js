import React from "react";

import SearchResult from "./SearchResult";

export default class SearchResults extends React.Component {
  render() {
    const { searchResult } = this.props;
    return (
      <li class="search-result">
        <img class="search-result-thumbnail" src={ searchResult.image_url }/>
        <div class="search-result-details">
          <label class="search-result-title">{ searchResult.name }</label>
          <div>
            <span class="search-result-stars">{ searchResult.stars_count } / 5.0 stars</span>
            <span class="search-result-ratings">({ searchResult.reviews_count } reviews)</span>
          </div>
          <div class="search-result-extra-details">{searchResult.food_type} | {searchResult.neighborhood} | {searchResult.price_range} </div>
        </div>
      </li>
    );
  }
}
