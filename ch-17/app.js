// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);


// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.

sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(4, 66, 45);
console.log(sizes);


// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.

var diz = ["S"];
diz.unshift("hehe");
alert(diz[0]);
console.log(diz);



// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".

sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2,0,"L");
console.log(sizes);


var arr = ["asad", "BAQAR", "C","Rahman"]
var a=arr.splice(2,0,"1","2","3","4")
console.log(a,"var a")
console.log(arr,"var arr")


// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array, 
// regSizes.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
regSizes = sizes.slice(0,3);
console.log(regSizes);


// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,3,25,26);
console.log(pets,"Pets");


// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,2);
console.log(pets,"Pets");

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
 reducePets=pets.slice(3,5);
console.log(pets,"Pets");
console.log(reducePets);