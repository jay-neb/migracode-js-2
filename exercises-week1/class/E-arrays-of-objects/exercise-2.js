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

function getDestinationsWithin500Kms(destinations) {
    var destinationsWithin500Kms = [];
    for (var i = 0; i < destinations.length; i++) {
        var destination = destinations[i];
        if (isWithin500Kms(destination)) {
            destinationsWithin500Kms.push(destination);
        }
    }
    return destinationsWithin500Kms;
}

function getDestinationNames(destinations) {
    var destinationNames = [];
    for (var i = 0; i < destinations.length; i++) {
        var destination = destinations[i];
        destinationNames.push(getName(destination));
    }
    return destinationNames;
}

function isWithin500Kms(destination) {
    return destination.distanceKms <= 500;
}

function getName(destination) {
    return destination.destinationName;
}

function getDestinationNamesReachableByFerry(destinations) {
    var destinationsReachableByFerry = [];
    for (var i = 0; i < destinations.length; i++) {
        var destination = destinations[i];
        if (isReachableByFerry(destination)) {
            destinationsReachableByFerry.push(destination.destinationName);
        }
    }
    return destinationsReachableByFerry;
}

function isReachableByFerry(destination) {
    return isReachableBy(destination, "ferry");
    // var transportations = destination.transportations;
    // for (var i = 0; i < transportations.length; i++) {
    //     var transportation = transportations.length;
    //     if (transportation === "ferry") {
    //         return true;
    //     }
    // }
    // return false;
}

function isReachableByTrain(destination) {
    return isReachableBy(destination, "train");
}

function isReachableBy(destination, transporation) {
    var index = destination.transportations.indexOf(transporation);
    return index >= 0;
}

function getDestinationsMoreThan300KmsAwayByTrain(destinations) {
    var destinationsMoreThan300KmsAwayByTrain = [];
    for (var i = 0; i < destinations.length; i++) {
        var destination = destinations[i];
        if (isReachableBy(destination, "train") && destination.distanceKms > 300) {
            destinationsMoreThan300KmsAwayByTrain.push(destination.destinationName);
        }
    }
    return destinationsMoreThan300KmsAwayByTrain;
}

//var destinationsWithin500Kms = getDestinationsWithin500Kms(travelDestinations);
//var destinationNamesWithin500Kms = getDestinationNames(destinationsWithin500Kms);
var destinationsWithin500Kms = travelDestinations.filter(isWithin500Kms);
var destinationNamesWithin500Kms = destinationsWithin500Kms.map(getName);

var destinationNamesReachableByFerry = getDestinationNamesReachableByFerry(travelDestinations);

var destinationNamesMoreThan300KmsAwayByTrain = getDestinationsMoreThan300KmsAwayByTrain(travelDestinations);
console.log(destinationNamesMoreThan300KmsAwayByTrain);

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// console.log("Question 1) Expected result: Edinburgh,Dublin, actual result: " + destinationNamesWithin500Kms);
// console.log("Question 2) Expected result: Dublin, actual result: " + destinationNameReachableByFerry);
// console.log("Question 3) Expected result: London,Paris, actual result: " + destinationNamesMoreThan300KmsAwayByTrain);
