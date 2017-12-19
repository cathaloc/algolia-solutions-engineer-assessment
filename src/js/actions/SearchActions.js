import dispatcher from "../dispatcher";

import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const client = algoliasearch("UQVI3CAH7Y", "e35273058dd560989ad1c84cbe9f4f81");
const algoliaQuerier = algoliasearchHelper(client, "restaurants", {
  facets: ['food_type', 'payment_options'],
  aroundLatLngViaIP: true
});

if("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(userLocationObtained);
}

algoliaQuerier.on('result', searchResultsRecieved);

export function performSearch(query) {
  algoliaQuerier.setQuery(query).setPage(0).search();
}

export function getNextPageOfResults() {
  algoliaQuerier.nextPage().search();
}

export function toggleFilter(filterType, filterOption) {
  algoliaQuerier.toggleFacetRefinement(filterType, filterOption).search();
}

function userLocationObtained(position) {
  const latLong = `${position.coords.latitude}, ${position.coords.longitude}`;
  algoliaQuerier.setQueryParameter('aroundLatLngViaIP', false)
  algoliaQuerier.setQueryParameter('aroundLatLng', latLong)
}

function searchResultsRecieved(results) {
  dispatcher.dispatch({
    type: 'UPDATE_SEARCH_RESULTS',
    results: results
  });

  dispatcher.dispatch({
    type: 'UPDATE_SEARCH_STATISTICS',
    nbHits: results.nbHits,
    processingTimeMS: results.processingTimeMS
  });

  results.facets.forEach((facet) => {
    dispatcher.dispatch({
      type: 'UPDATE_SEARCH_FILTER_OPTIONS',
      filter_type: facet.name,
      filter_options: results.getFacetValues(facet.name)
    })
  })
}
