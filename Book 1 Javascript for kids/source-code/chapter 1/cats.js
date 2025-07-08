// Draw as many cats as you want!
var drawCats = function (howManyTimes) {
    // This loop starts at 0 and runs until i is less than howManyTimes
    for (var i = 0; i < howManyTimes; i++) {
        // Print the current number followed by a cat face
        console.log(i + " =^.^=");
    }
};

// Call the function and draw 10 cats (from 0 to 9)
drawCats(10); // You can put any number here instead of 10.


// Draw as many cats as you want — but counting down!
var drawCats = function (howManyTimes) {
    // This loop starts at 55 and decreases until i is less than or equal to howManyTimes
    for (var i = 55; i > howManyTimes; i--) {
        // Print the current number followed by a cat face
        console.log(i + " =^.^=");
    }
};

// Call the function and draw cats from 55 down to 50 (excluding 49)
drawCats(49); // You can put any number here instead of 49.
