document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");

  if (movieId) {
    fetchMovieDetails(movieId);
  } else {
    displayError("No movie ID provided");
  }
});

async function fetchMovieDetails(id) {
  const url = `http://www.omdbapi.com/?i=${id}&apikey=53361d6&plot=full`;

  try {
    document.getElementById("loader").style.display = "block";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const movie = await response.json();
    displayMovieDetails(movie);
  } catch (error) {
    displayError(error.message);
  } finally {
    document.getElementById("loader").style.display = "none";
  }
}

function displayMovieDetails(movie) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `
    <h2>${movie.Title} (${movie.Year})</h2>
    <img src="${movie.Poster}" alt="${movie.Title}">
    <p>${movie.Plot}</p>
    <p>Actors: ${movie.Actors}</p>
    <p>Runtime: ${movie.Runtime}</p>
    <!-- Add other details as needed -->
  `;
}

function displayError(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}
