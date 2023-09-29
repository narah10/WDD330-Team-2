import productDetails from "./productDetails.mjs";
import { getParam } from "./utils.mjs";

// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }
const productId = getParam("product");
productDetails(productId, ".product-detail");

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
  // .addEventListener("click", addToCartHandler);
