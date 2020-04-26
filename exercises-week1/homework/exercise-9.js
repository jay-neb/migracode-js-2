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

3. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

4. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will subtract 1 in the product stock of bought products

5. If there is not enough stock, product cannot be added to the shopping cart
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

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

function addToShoppingCart(id) {
  var product = getProduct(id);
  if (product.stock > 0) {
    shoppingCart.selectedProducts.push(product);
    shoppingCart.totalPrice += product.price;
  }
}

function getProduct(id) {
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.id === id) {
      return product;
    }
  }
}

function removeFromShoppingCart(id) {
  // Option 1
  var selectedProducts = shoppingCart.selectedProducts;
  for (var i = selectedProducts.length - 1; i >= 0; i--) {
    var selectedProduct = selectedProducts[i];
    if (selectedProduct.id === id) {
      selectedProducts.splice(i, 1);
      shoppingCart.totalPrice -= selectedProduct.price;
    }
  }

  // Option 2
  // var product = getProduct(id);
  // var index = shoppingCart.selectedProducts.indexOf(product);
  // if (index >= 0) {
  //   shoppingCart.selectedProducts.splice(index, 1);
  //   shoppingCart.totalPrice -= product.price;
  // }
}

function shop() {
  var selectedProducts = shoppingCart.selectedProducts;
  for (var i = 0; i < selectedProducts.length; i++) {
    var selectedProduct = selectedProducts[i];
    var product = getProduct(selectedProduct.id);
    product.stock--;
  }
  shoppingCart.selectedProducts = [];
  shoppingCart.totalPrice = 0;
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));


/*
function Product (id, name, price, stock) {
  this.id= id;
  this.name = name;
  this.price = price;
  this.stock = stock;
}
var product5 = new Product(5, "Laptop", 29.99, 20);
products.push(product5);
*/