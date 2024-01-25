document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const keyword = document.getElementById("search-keyword").value;
  searchMovies(keyword);
});

async function searchMovies(keyword) {
  const apiKey = "53361d6";
  const apiUrl = `http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;

  try {
    document.getElementById("loader").style.display = "block";
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    if (data.Response === "True") {
      displayResults(data.Search);
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").textContent = error.message;
  } finally {
    document.getElementById("loader").style.display = "none";
  }
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results
  results.forEach((movie) => {
    const div = document.createElement("div");
    div.className = "result";
    div.innerHTML = `
      <a href="film_page_description.html?id=${movie.imdbID}">
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster}" alt="${movie.Title}">
      </a>
    `;
    resultsContainer.appendChild(div);
  });
}
