import dispatcher from "../dispatcher";

import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const client = algoliasearch("UQVI3CAH7Y", "e35273058dd560989ad1c84cbe9f4f81");
const algoliaQuerier = algoliasearchHelper(client, "restaurants", {
  facets: ['food_type', 'payment_options']
});

algoliaQuerier.on('result', searchResultsRecieved);

export function performSearch(query, filters) {
  algoliaQuerier.setQuery(query).search();
}

export function toggleFilter(filterType, filterOption) {
  algoliaQuerier.toggleFacetRefinement(filterType, filterOption).search();
}

function searchResultsRecieved(results) {
  dispatcher.dispatch({
    type: 'UPDATE_SEARCH_RESULTS',
    results: results.hits
  });

  results.facets.forEach((facet) => {
    dispatcher.dispatch({
      type: 'UPDATE_SEARCH_FILTER_OPTIONS',
      filter_type: facet.name,
      filter_options: results.getFacetValues(facet.name)
    })
  })
}
