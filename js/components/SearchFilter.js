import React from "react";

import * as SearchActions from "../actions/SearchActions";
import SearchFilterOption from "./SearchFilterOption";


export default class SearchFilter extends React.Component {
  static FILTER_NAMES = {
    food_type: "Food Type",
    payment_options: "Payment Options"
  }

  filterOptionClicked(searchFilterOption) {
    const { searchFilterType } = this.props;
    SearchActions.toggleFilter(searchFilterType, searchFilterOption.name);
  }

  render() {
    var filterOptionsToDisplay = [];

    const selectedFilterOption = this.props.searchFilterOptions.find((filterOption) => {
      return filterOption.isRefined;
    });

    if(selectedFilterOption) {
      filterOptionsToDisplay = [selectedFilterOption]
    } else {
      filterOptionsToDisplay = this.props.searchFilterOptions.slice(0, 5);
    }

    filterOptionsToDisplay = filterOptionsToDisplay.map((option, i) => {
      return (
        <SearchFilterOption onClick={ this.filterOptionClicked.bind(this, option) } filterOption={option} key={i} />
      );
    });

    const name = SearchFilter.FILTER_NAMES[this.props.searchFilterType];
    return (
      <li class="search-filter">
        <h4>{name}</h4>
        <ul>
          { filterOptionsToDisplay }
        </ul>
      </li>
    );
  }
}
