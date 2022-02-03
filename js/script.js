const resultContainer = document.querySelector(".results");

const baseUrl =
  "https://www.hgportfolio.one/wp-json/wc/v1/products?consumer_key=ck_7c308eadf64e1ada28e4eec1c5cd2991f5bdc421&consumer_secret=cs_10828a248005464dcfb737feb0990f39c9c5578a";

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();

  products.forEach(function (product) {
    resultContainer.innerHTML += `
    <div class="result">
    <a href="film_page_descripton.html?id=${product.id}">
    <h2>${product.name}</h2>
    <img class="image" src="${product.images[0].src}"></img>
                               
    </a>
    </div
    `;
  });
}

getProducts(baseUrl);
