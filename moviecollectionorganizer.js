// Advanced Movie Collection Organizer

// Initialize movie arrays
let actionMovies = ['Die Hard', 'Mad Max: Fury Road', 'John Wick'];
let dramaMovies = ['The Shawshank Redemption', 'Forrest Gump', 'The Godfather'];
let movieYears = [1988, 2015, 2014, 1994, 1972];

// Function to merge two arrays of movies
function mergeMovies(arr1, arr2) {
  let merged = arr1.concat(arr2);
  console.log('All Movies:', merged);
  return merged;
}

// Function to sort movie titles alphabetically
function sortMovies(movies) {
  let sorted = [...movies].sort();
  console.log('Sorted Movies:', sorted);
  return sorted;
}

// Function to sort movie years numerically
function sortYears(years) {
  let sorted = [...years].sort((a, b) => a - b);
  console.log('Sorted Movie Years:', sorted);
  return sorted;
}

// Function to display movie titles
function displayMovies(movies) {
  console.log('Movie Titles:');
  movies.forEach((movie) => console.log(movie));
}

// Function to get movie titles in uppercase
function getUppercaseMovies(movies) {
  let uppercase = movies.map((movie) => movie.toUpperCase());
  console.log('Uppercase Movies:', uppercase);
  return uppercase;
}

// Function to get movies containing 'The'
function getMoviesWithThe(movies) {
  let withThe = movies.filter((movie) => movie.includes('The'));
  console.log("Movies with 'The':", withThe);
  return withThe;
}

// Function to calculate the total length of all movie titles
function getTotalTitleLength(movies) {
  let total = movies.reduce((sum, movie) => sum + movie.length, 0);
  console.log('Total Length of All Movie Titles:', total);
  return total;
}

// Function to concatenate titles from right to left
function getConcatenatedTitles(movies) {
  let concatenated = movies.reduceRight((acc, movie) => acc + ' ' + movie, '').trim();
  console.log('Concatenated Titles from Right to Left:', concatenated);
  return concatenated;
}

// Function to check if all movies contain 'e'
function checkAllMoviesContainE(movies) {
  let allContainE = movies.every((movie) => movie.toLowerCase().includes('e'));
  console.log("All movies contain 'e':", allContainE);
  return allContainE;
}

// Function to check if any movie contains 'e'
function checkAnyMovieContainsE(movies) {
  let someContainE = movies.some((movie) => movie.toLowerCase().includes('e'));
  console.log("At least one movie contains 'e':", someContainE);
  return someContainE;
}

// Function to find the index of a specific movie title
function findMovieIndex(movies, title) {
  let index = movies.indexOf(title);
  console.log(`Index of '${title}':`, index);
  return index;
}

// Function to find the last index of a specific movie title
function findLastMovieIndex(movies, title) {
  let lastIndex = movies.lastIndexOf(title);
  console.log(`Last Index of '${title}':`, lastIndex);
  return lastIndex;
}

// Function to find the first movie with a title longer than 10 characters
function findLongTitleMovie(movies) {
  let longTitle = movies.find((movie) => movie.length > 10);
  console.log('First movie with a title longer than 10 characters:', longTitle);
  return longTitle;
}

// Function to find the index of the first movie with a title longer than 10 characters
function findLongTitleMovieIndex(movies) {
  let index = movies.findIndex((movie) => movie.length > 10);
  console.log('Index of first movie with a title longer than 10 characters:', index);
  return index;
}

// Function to check if a specific movie title is included in the array
function checkMovieInclusion(movies, title) {
  let included = movies.includes(title);
  console.log(`Array includes '${title}':`, included);
  return included;
}

// Main execution
let allMovies = mergeMovies(actionMovies, dramaMovies);
let sortedMovies = sortMovies(allMovies);
sortYears(movieYears);
displayMovies(allMovies);
getUppercaseMovies(allMovies);
getMoviesWithThe(allMovies);
getTotalTitleLength(allMovies);
getConcatenatedTitles(allMovies);
checkAllMoviesContainE(allMovies);
checkAnyMovieContainsE(allMovies);
findMovieIndex(allMovies, 'Mad Max: Fury Road');
allMovies.push('Mad Max: Fury Road'); // Add duplicate for demonstration
findLastMovieIndex(allMovies, 'Mad Max: Fury Road');
findLongTitleMovie(allMovies);
findLongTitleMovieIndex(allMovies);
checkMovieInclusion(allMovies, 'Die Hard');
