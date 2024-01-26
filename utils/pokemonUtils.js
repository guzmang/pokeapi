'use strict'

const axios = require('axios');

// One request HTTP
async function doARequest(url) {
  try {
    const response = await axios.get(url);
    console.log(`Request completed to ${url}`);
    return response.data;
  } catch (error) {
    console.error(`Error in request to ${url}:`, error);
    throw error;
  }
}

// Multiple request HTTP
async function executeRequestsInOrder(urls) {
  const response = [];
  for (const url of urls) {
    try {
      const res = await doARequest(url);
      response.push(res);
    } catch (error) {
      console.error('An error occurred during the execution of the requests: ', error);
      break; // Stop loop if there is an error
    }
  }
  console.log('All requests has been completed in order.');
  return response;
}

module.exports = {
    executeRequestsInOrder
}