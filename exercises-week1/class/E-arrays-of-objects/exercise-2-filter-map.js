/* 
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

var destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"]
};

var destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};

var destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};

var destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};

var travelDestinations = [destination1, destination2, destination3, destination4];

/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

// 1) Filter the travelDestinations array to return all destination names reachable within 500 kms.

// Step 1: Use the filter function to get an array that contains all the destination objects that are within 500 kms
var destinationsWithin500Kms = travelDestinations.filter(isWithin500Kms);
// Step 2: Use the map function to get an array that contains only the names of the all the destinations within 500 kms
var destinationNamesWithin500Kms = destinationsWithin500Kms.map(getName);

// Used by the filter function to check if a destination is within 500 kms
function isWithin500Kms(destination) {
    return destination.distanceKms <= 500;
}

// Used by the map function to get the name of a destination
function getName(destination) {
    return destination.destinationName;
}
//


// 2) Find a destination name reachable by ferry.

// Step 1: Use the filter function to get an array that contains all the destination objects that are reachable by ferry
var destinationsReachableByFerry = travelDestinations.filter(isReachableByFerry);
// Step 2: Use the map function to get an array that contains only the names of the all the destinations reachable by ferry
var destinationNamesReachableByFerry = destinationsReachableByFerry.map(getName);

// Used by the filter function to check if a destination is reachable by ferry
function isReachableByFerry(destination) {
    return destination.transportations.includes("ferry");
}
//


// 3

// Step 1: Use the filter function to get an array that contains all
//  the destination objects that are more than 300 kms away and reachable by ferry
var destinationsMoreThan300KmsAwayByTrain = travelDestinations.filter(isMoreThan300KmsAwayAndReachableByTrain);
// Step 2: Use the map function to get an array that contains only the names of the all
// the destinations that are more than 300 kms away and reachable by ferry
var destinationNamesMoreThan300KmsAwayByTrain = destinationsMoreThan300KmsAwayByTrain.map(getName);

// Used by the filter function to check if a destination is more than 300 kms away and reachable by train
function isMoreThan300KmsAwayAndReachableByTrain(destination) {
    return destination.distanceKms > 300 && destination.transportations.includes("train");
}
//

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

 console.log("Question 1) Expected result: Edinburgh,Dublin, actual result: " + destinationNamesWithin500Kms);
 console.log("Question 2) Expected result: Dublin, actual result: " + destinationNamesReachableByFerry);
 console.log("Question 3) Expected result: London,Paris, actual result: " + destinationNamesMoreThan300KmsAwayByTrain);
