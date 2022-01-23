const descriptContainer = document.querySelector(".description");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("description");

const url = "https://www.hgportfolio.one/wp-json/wc/store/products" + id;

async function getDescription() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);

    createHtml(filmDetails);
  } catch (error) {
    descriptContainer.innerHTML = `<p>Ooops, something went wrong!</p>
                                   <p>Please try again later :)</p>
    `;
  }
}

getDescription();

function createHtml(product) {
  descriptContainer.innerHTML = `
                                <div class="result">
                                <2>${product.name}</2>
                               
                                <img class="image" src="${product.images[0].src}"></img>
                                <p>${product.description}</p>  
                                </div>`;
}
