import React from "react";

export default class SearchQuery extends React.Component {
  render() {
    return (
      <div class="search-query-container">
        <input class="search-query" placeholder="Search for Restaurants by Name, Cuisine, Location" />
      </div>
    );
  }
}
