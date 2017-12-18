import React from "react";

import SearchResult from "./SearchResult";
import SearchResultStars from "./SearchResultStars";

export default class SearchResults extends React.Component {
  detailsHtml() {
    const { searchResult } = this.props;
    return `${searchResult._highlightResult.food_type.value} | ${searchResult._highlightResult.neighborhood.value} | ${searchResult.price_range}`
  }

  render() {
    const { searchResult } = this.props;
    return (
      <li class="search-result">
        <img class="search-result-thumbnail" src={ searchResult.image_url }/>
        <div class="search-result-details">
          <label class="search-result-title" dangerouslySetInnerHTML={{__html: searchResult._highlightResult.name.value }}></label>
          <div>
            <span class="search-result-star-count">{ searchResult.stars_count }</span>
            <SearchResultStars starsCount={ searchResult.stars_count } />
            <span class="search-result-ratings">({ searchResult.reviews_count } reviews)</span>
          </div>
          <div class="search-result-extra-details" dangerouslySetInnerHTML={{__html: this.detailsHtml()}}></div>
        </div>
      </li>
    );
  }
}
