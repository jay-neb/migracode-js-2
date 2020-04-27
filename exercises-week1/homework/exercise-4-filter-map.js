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
        // Step 1: Use the filter function to get all objects of restaurants that have available seats
        var availableRestaurants = this.restaurants.filter(function (restaurant) {
            var availableSeats = restaurant.totalSeats - restaurant.numberOfCustomers;
            return availableSeats >= numberOfPeople;
        });
        // Step 2: Use the map function to get all restaurant names that are available
        var availableRestaurantNames = availableRestaurants.map(function (restaurant) {
            return restaurant.name;
        });
        return availableRestaurantNames;
    },
    findRestaurantServingDish: function(dishName) {
        // Step 1: Use the filter function to get all objects of restaurants that serve the dish
        var restaurantsServingDish = this.restaurants.filter(function (restaurant) {
            return restaurant.menu.includes(dishName);
        });
        // Step 2: Use the map function to get all restaurant names that serve the dish
        var restaurantNamesServingDish = restaurantsServingDish.map(function (restaurant) {
            return restaurant.name;
        });
        return restaurantNamesServingDish;
    },
    countNumberOfRestaurantsInArea: function(area) {
        // Use the filter function to get all objects of restaurants in the area
        var restaurantsInArea = this.restaurants.filter(function (restaurant) {
            return restaurant.address.area === area;
        });
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
