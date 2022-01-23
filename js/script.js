const baseUrl = "https://www.hgportfolio.one/wp-json/wc/store/products";
const resultContainer = document.querySelector(".results");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();

  resultContainer.innerHTML = "";

  products.forEach(function (product) {
    resultContainer.innerHTML += `
    <div class="result">
    <a href="film_page_descripton.html">
    <h2>${product.name}</h2>
    <img class="image" src="${product.images[0].src}"></img>                               
    </a>
    </div
    `;
  });
}

getProducts(baseUrl);
