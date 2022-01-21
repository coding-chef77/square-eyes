// const url = "https://www.thecocktaildb.com/api/json/v2/9973533/recent.php";

// const resultContainer = document.querySelector(".results");

// async function getCoctailList() {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();

//     resultContainer.innerHTML = "";

//     const coctails = result.drinks;

//     coctails.forEach(function (drinks) {
//       resultContainer.innerHTML += `<a href="details.html?id=${drinks.idDrink}" class="card">
//                                       <div class="image" style="background-image: url('${drinks.strDrinkThumb}');"></div>
//                                       <div class="details">
//                                         <h4>${drinks.strDrink}</h4>
//                                       </div>
//                                     </a>`;
//     });
//   } catch (error) {
//     resultContainer.innerHTML = "Ooops, an amature has been working on this!";
//   }
// }
// getCoctailList();

const baseUrl = "https://www.hgportfolio.one/wp-json/wc/store/products";
const resultContainer = document.querySelector(".results");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(function (product) {
    resultContainer.innerHTML += `
    <div>
    <h2>${product.name}</h2>
    <div class="image"><${product.images}</div>
    </div>`;
  });
}
getProducts(baseUrl);
