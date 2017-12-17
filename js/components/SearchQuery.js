import React from "react";

export default class SearchQuery extends React.Component {
  render() {
    return (
      <div class="search-query-container">
        <input onChange={this.props.onChange} class="search-query" placeholder="Search for Restaurants by Name, Cuisine, Location" />
      </div>
    );
  }
}
