import React from "react";


export default class SearchFilter extends React.Component {
  render() {
    return (
      <li class="search-filter">
        <h4>{this.props.type}</h4>
        <ul>
          <li>Italian</li>
          <li>Italian</li>
          <li>Italian</li>
          <li>Italian</li>
          <li>Italian</li>
        </ul>
      </li>
    );
  }
}
