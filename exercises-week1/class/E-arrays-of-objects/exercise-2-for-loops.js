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
var destinationNamesWithin500Kms = getDestinationNamesWithin500Kms(travelDestinations);

function getDestinationNamesWithin500Kms(destinations) {
    // Define this empty array which will store all the destination names within 500 kms
    var destinationNamesWithin500Kms = [];
    // Loop through all the destinations
    for (var i = 0; i < destinations.length; i++) {
        var destination = destinations[i];
        // If a destination is within 500 kms, push it to the destination names array
        if (destination.distanceKms <= 500) {
            destinationNamesWithin500Kms.push(destination.destinationName);
        }
    }
    return destinationNamesWithin500Kms;
}
//


// 2) Find a destination name reachable by ferry.
var destinationNamesReachableByFerry = getDestinationNamesReachableByFerry(travelDestinations);

function getDestinationNamesReachableByFerry(destinations) {
    // Define this empty array which will store all the destination names reachable by ferry
    var destinationNamesReachableByFerry = [];
    // Loop through all the destinations
    for (var i = 0; i < destinations.length; i++) {
        var destination = destinations[i];
        // If a destination is reachable by ferry, push it to the destination names array
        if (destination.transportations.includes("ferry")) {
            destinationNamesReachableByFerry.push(destination.destinationName);
        }
    }
    return destinationNamesReachableByFerry;
}
//


// 3) Print in the console all the destination names more than 300 kms far away and reachable by train.
var destinationNamesMoreThan300KmsAwayByTrain = getDestinationsMoreThan300KmsAwayByTrain(travelDestinations);

function getDestinationsMoreThan300KmsAwayByTrain(destinations) {
    // Define this empty array which will store all the destination names more than 300 kms away and reachable by train
    var destinationNamesMoreThan300KmsAwayByTrain = [];
    // Loop through all the destinations
    for (var i = 0; i < destinations.length; i++) {
        var destination = destinations[i];
        // Since there are 2 conditions, it's better to store each one in a variable so that the code is easier to read
        var isMoreThan300KmsAway = destination.distanceKms > 300;
        var isReachableByTrain = destination.transportations.includes("train");
        // If a destination meets both conditions, push it to the destination names array
        if (isMoreThan300KmsAway && isReachableByTrain) {
            var destinationName = destination.destinationName;
            destinationNamesMoreThan300KmsAwayByTrain.push(destinationName);
        }
    }
    return destinationNamesMoreThan300KmsAwayByTrain;
}
//

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

 console.log("Question 1) Expected result: Edinburgh,Dublin, actual result: " + destinationNamesWithin500Kms);
 console.log("Question 2) Expected result: Dublin, actual result: " + destinationNamesReachableByFerry);
 console.log("Question 3) Expected result: London,Paris, actual result: " + destinationNamesMoreThan300KmsAwayByTrain);
