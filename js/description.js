const descriptContainer = document.querySelector(".description");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url =
  "https://www.hgportfolio.one/wp-json/wc/v1/products/" +
  id +
  "?consumer_key=ck_7c308eadf64e1ada28e4eec1c5cd2991f5bdc421&consumer_secrets=cs_10828a248005464dcfb737feb0990f39c9c5578a";

const name = params.get("title");

async function getDescription() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHtml(details);
  } catch (error) {
    descriptContainer.innerHTML = `<p>Ooops, something went wrong!</p>
                                   <p>Please try again later :)</p>
    `;
  }
}

getDescription();

function createHtml(details) {
  descriptContainer.innerHTML = `
                                <h1>${product.name}</h1>
                                <div class="description">                          
                                ${product.description}

                                </div>
                                <img class="image" src="${product.images[0].src}"></img>`;
}
