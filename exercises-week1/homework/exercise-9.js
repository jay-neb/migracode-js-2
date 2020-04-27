/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

2. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice
NOTE: If there is not enough stock, product cannot be added to the shopping cart

3. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

4. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will subtract 1 in the product stock of bought products
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
var product3 = {
  id: 3,
  name: "Portable Speaker",
  price: 18.99,
  stock: 64
};
var product4 = {
  id: 4,
  name: "Laptop Charger",
  price: 11.50,
  stock: 30
};

// Part 1
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

// Part 2
function addToShoppingCart(id) {
  var product = getProduct(id);
  // If the product is in stock, add to the shopping cart and add the price
  if (product.stock > 0) {
    shoppingCart.selectedProducts.push(product);
    shoppingCart.totalPrice += product.price;
  }
}

// This function gets a product from the products array given the product id
function getProduct(id) {
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.id === id) {
      return product;
    }
  }
}

// Part 3
function removeFromShoppingCart(id) {
  var product = getProduct(id);
  // First get the index of the product from the selected products
  var index = shoppingCart.selectedProducts.indexOf(product);
  // If the index is more than -1 (i.e. the product is in the array)
  // remove it using the splice function and subtract the price
  if (index > -1) {
    shoppingCart.selectedProducts.splice(index, 1);
    shoppingCart.totalPrice -= product.price;
  }
}

function shop() {
  var selectedProducts = shoppingCart.selectedProducts;
  // Loop through all the selected products
  for (var i = 0; i < selectedProducts.length; i++) {
    var selectedProduct = selectedProducts[i];
    // Get the product from the products array using the id
    var product = getProduct(selectedProduct.id);
    // Decrease the stock by 1
    product.stock--;
  }
  // Reset the shopping cart variables because it's now empty
  shoppingCart.selectedProducts = [];
  shoppingCart.totalPrice = 0;
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice.toFixed(2));
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice.toFixed(2));
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice.toFixed(2));
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice.toFixed(2));
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice.toFixed(2));
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));