// const resultContainer = document.querySelector(".results");

// const baseUrl = "https://whttps://moviesdatabase.p.rapidapi.com/";

// async function getProducts(url) {
//   const response = await fetch(url);
//   const products = await response.json();
//   resultContainer.innerHTML = "";

//   products.forEach(function (product) {
//     resultContainer.innerHTML += `
//     <div class="result">
//     <a href="film_page_descripton.html?id=${product.id}">
//     <h2>${product.name}</h2>
//     <img class="image" src="${product.images[0].src}"></img>

//     </a>
//     </div
//     `;
//   });
// }

// getProducts(baseUrl);

document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
});
