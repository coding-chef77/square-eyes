const descriptContainer = document.querySelector(".description");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.hgportfolio.one/wp-json/wc/store/products/" + id;

const name = params.get("title");
console.log(name);
async function getMovieInfo() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    createHtml(details);
  } catch (error) {
    descriptContainer.innerHTML = `<p>Ooops, something went wrong!</p>
                                   <p>Please try again later :)</p>
    `;
  }
}

getMovieInfo();

function createHtml(details) {
  descriptContainer.innerHTML = `
                                <div class="background-movie">
                                <h1 id="header-film">${details.name}</h1>
                                <div class="description">                          
                                ${details.description}
                                </div>
                                <img class="image-individual" src="${details.images[0].src}"></img>
                                </div>`;
}
