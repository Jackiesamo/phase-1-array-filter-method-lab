// Code your solution here
// index.js

// Function to find drivers that exactly match the name passed in
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose name starts with the given substring
function fuzzyMatch(drivers, substring) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(substring.toLowerCase()));
}

// Function to find drivers whose name matches a given name in a list of driver objects
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

Module.exports = { findMatching, fuzzyMatch, matchName };

