const menu = document.getElementById("menu");
const apiURL = "https://fakestoreapi.com/products";
const objectArray = [];

async function fetchComments() {
  const response = await fetch(apiURL);
  const data = await response.json();
  for (const product of data) {
    const { title, description, price } = product;
    const productObj = { title, description, price };
    objectArray.push(productObj);
  }
  console.log(objectArray);
  function renderMenu() {
    for (const product of objectArray) {
      const productsMenu = document.createElement("li");
      productsMenu.textContent = product.description;
      menu.appendChild(productsMenu);
    }
  }
  renderMenu();
}

fetchComments();


