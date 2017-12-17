import dispatcher from "../dispatcher";

import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const client = algoliasearch("UQVI3CAH7Y", "e35273058dd560989ad1c84cbe9f4f81");
const helper = algoliasearchHelper(client, "restaurants");

helper.on('result', searchResultsRecieved);

function renderHits(content) {
  console.log(content)
}

export function performSearch(query, filters) {
  helper.setQuery(query).search();
}

function searchResultsRecieved(results) {
  dispatcher.dispatch({
    type: 'CREATE_SEARCH_RESULTS',
    results: results.hits
  });
}