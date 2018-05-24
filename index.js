var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {};
  let price =  {};
  newItem["itemName"] = item;
  price["price"] = Math.floor(Math.random() * 101);
  newItem = Object.assign(newItem,price)
  cart.push(newItem)

  return `${newItem["itemName"]} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
