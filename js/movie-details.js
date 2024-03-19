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
  const url = `https://www.omdbapi.com/?i=${id}&apikey=53361d6&plot=full`;

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
  <div class="movie-card">
  <h2>${movie.Title} (${movie.Year})</h2>
  <div class="movie-details">
    <div class="movie-poster">
      <img src="${movie.Poster}" alt="${movie.Title}">
    </div>
    <div class="movie-info">
      <p>${movie.Plot}</p>
      <p>Director: ${movie.Director}</p>
      <p>Actors: ${movie.Actors}</p>
      <p>Release Year: ${movie.Year}</p>
      <p>Runtime: ${movie.Runtime}</p>
    </div>
  </div>
</div>
  `;

  const returnButton = document.createElement("button");
  returnButton.textContent = "Back to Films";
  returnButton.onclick = () => window.history.back();
  returnButton.className = "return-button"; // Add a class for styling
  resultsContainer.appendChild(returnButton);
}

function displayError(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}
