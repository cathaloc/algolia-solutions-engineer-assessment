import React from "react";

export default class SearchFilterOption extends React.Component {
  render() {
    return (
      <li>
        <div onClick={ this.props.onClick } class={ "filter-option " + (this.props.filterOption.isRefined ? 'is-selected' : '') } href="#">
          <span class="filter-option-count">{this.props.filterOption.count}</span>
          <span class="filter-option-name">{this.props.filterOption.name}</span>
        </div>
      </li>
    );
  }
}
