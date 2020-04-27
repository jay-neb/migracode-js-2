/* 
Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, 
the number of customers in the restaurant at the moment and the menu with prices.

We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

1) Define a method findAvailableRestaurants which takes a number of people in parameter and returns 
all the restaurant names which have the required number of seats available at the moment.

2) Define a method findRestaurantServingDish which takes a dish name in parameter and returns
all the restaurant names serving this dish.

3) Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west),
and returns the number of restaurants in this area.
*/

var restaurant1 = {
    name: "Paesano",
    totalSeats: 10,
    numberOfCustomers: 8,
    address: {
        city: "Glasgow",
        area: "center"
    },
    menu: ["pizza", "calzone", "salad"]
};

var restaurant2 = {
    name: "Ubiquitous Chip",
    totalSeats: 20,
    numberOfCustomers: 10,
    address: {
        city: "Glasgow",
        area: "west"
    },
    menu: ["salad", "chocolate cake", "roast lamb"]
};

var restaurant3 = {
    name: "Monkeyz",
    totalSeats: 15,
    numberOfCustomers: 8,
    address: {
        city: "Glasgow",
        area: "center"
    },
    menu: ["stew", "chocolate cake", "panini"]
};

var restaurants = [restaurant1, restaurant2, restaurant3];

/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/


var restaurantFinderApplication = {
    applicationName: "Restaurant Finder",
    applicationVersion: "1.0",
    restaurants: restaurants,
    findAvailableRestaurants: function(numberOfPeople) {
        // Define an empty array that will store all available restaurants
        var availableRestaurants = [];
        // Loop through all the restaurants
        for (var i = 0; i < this.restaurants.length; i++) {
            var restaurant = this.restaurants[i];
            // Find the number of available seats by subtracting the number of customers from total seats
            var availableSeats = restaurant.totalSeats - restaurant.numberOfCustomers;
            // If there are enough available seats, push the restaurant name to the available restaurants
            if (availableSeats >= numberOfPeople) {
                availableRestaurants.push(restaurant.name);
            }
        }
        return availableRestaurants;
    },
    findRestaurantServingDish: function(dishName) {
        // Define an empty array that will store all restaurants serving the dish
        var restaurantsServingDish = [];
        // Loop through all the restaurants
        for (var i = 0; i < this.restaurants.length; i++) {
            var restaurant = this.restaurants[i];
            // If the restaurant menu contains the dish name, push the restaurant name to serving dish array
            if (restaurant.menu.includes(dishName)) {
                restaurantsServingDish.push(restaurant.name);
            }
        }
        return restaurantsServingDish;
    },
    countNumberOfRestaurantsInArea: function(area) {
        // Define an empty array that will store all restaurants in the area
        var restaurantsInArea = [];
        for (var i = 0; i < this.restaurants.length; i++) {
            var restaurant = restaurants[i];
            // If the restaurant area is equal to the area, push the restaurant object to the restaurants in area array
            if (restaurant.address.area === area) {
                restaurantsInArea.push(restaurant);
            }
        }
        // Get the number of restaurants in the area by getting the array length
        var numberOfRestaurantsInArea = restaurantsInArea.length;
        return numberOfRestaurantsInArea;
    }
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

var restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(5);
console.log("Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: " + restaurantsAvailableFor5People);

var restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish("salad");
console.log("Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: " + restaurantsServingSalad);

var numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea("center");
console.log("Number of restaurants in city centre: Expected result: 2, actual result: " + numberOfRestaurantsInCityCentre);
