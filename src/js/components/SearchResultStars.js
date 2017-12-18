import React from "react";

export default class SearchResultsStars extends React.Component {

  render() {
    const filledStarsCount = Math.round(this.props.starsCount);
    const emptyStarsCount = 5 - filledStarsCount;

    var stars = [];
    for( var i=1; i <=5; i++) {
      const starClass = `search-result-star${ i <= filledStarsCount ? ' is-filled' : '' }`
      const star = <span key={i} class={starClass} />
      stars.push(star)
    }

    return (
      <span class="search-result-stars">
        {stars}
      </span>
    );
  }
}
