//creating Array
var fruits = ['apple' , 'cherry' , 'banana' ]

//index start counting from 0
console.log("Fruits index:", fruits[2]);

//changing elements
//update an array item by specifing its index and setting a new value
fruits[1]= 'blueberry';
console.log("new value in the array:",fruits);

//mixing data types and getting value 2:
var mixedDatatypes = ['hello', true, {name: 'john'}, [1, 2, 3,], false, [1, 2, 3, 6]]
console.log("value:", mixedDatatypes[1]);

//finding length
console.log("fruits length: " , fruits.length);

//adding elements append new iteams to the end of the array 
fruits.push('date', 'cherry');
console.log("after-appending:", fruits);

//removing elements
//remove iteams from the end or specific postion in the array 
console.log("remove fruit", fruits.pop());
console.log("after-pop:", fruits);

//joining arrays 
var allfruits = fruits.concat(mixedDatatypes);
console.log("concat:", allfruits);

//finding index 
console.log("inex-of:", allfruits.indexOf('date'));

//turning into string 
//convert the array into single 
var fruitstring= allfruits.join(',');
console.log("converted:", fruitstring);

//building with push 
var numbers =[];
numbers.push(1,2,3,4,5,6 );
console.log("numbers array:", numbers);

//adding to the beginning of the ray 
numbers.unshift(8,9,10);
console.log("added:", numbers);
