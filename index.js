const menu = document.getElementById("menu");
const apiURL = "https://fakestoreapi.com/products";
const objectArray = [];

async function fetchProducts() {
  const response = await fetch(apiURL);
  const data = await response.json();
  for (const product of data) {
    const { title, description, price } = product;
    const productObj = { title, description, price };
    objectArray.push(productObj);
  }
  console.log(objectArray);
  renderMenu();
}

function renderMenu() {
  for (const product of objectArray) {
    const productsMenu = document.createElement("li");
    productsMenu.textContent = product.description;
    menu.appendChild(productsMenu);
  }
}

fetchProducts().then(() => {
  // You can now safely access the populated objectArray here
  console.log(objectArray[0]);
}).catch((error) => {
  console.error(error);
});


