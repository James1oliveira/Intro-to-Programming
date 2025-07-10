//Array of friends:
// Define the Friend Objects
//Create an Array of Friends:
//The friends array now holds three elements, each of which is an object representing a friend.
console.log("-------------objects array 1--------------")

var friends = [
    {
        name: "Anna",
        age: 11,
        luckyNumbers: [2, 4, 8, 16]
    },

    {
        name: "Dave",
        age: 5,
        luckyNumbers: [3, 9, 40]
    },

    {
        name: "Kate",
        age: 9,
        luckyNumbers: [1, 2, 3]
    },

    {
        names: "James",
        age: 23,
        luckyNumbers: [2, 6, 12]
    }

];

// Accessing Objects in the Array:
console.log("Friend Object: ", friends[1]);

// Accessing Properties within an Object:
console.log("Friend-age: ", friends[1].age);

// Accessing Nested Arrays within Objects:
console.log("Lucky Number: ", friends[0].luckyNumbers[1]);
