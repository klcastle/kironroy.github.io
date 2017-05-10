**Code Snippets:**
*  variables

```
// variables use camelCase

var myDog = 'Rex';

// A constructor function is given a capitalized name
  // to make it clear that it is a constructor

  var Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
  };

```

*  Understand String Immutability
```
// Javascript strings are Immutabilie

var myStr = "Jello World";

myStr[0] = "H";

console.log(myStr);

/*
In ruby strings are mutabilie

myStr = "Jello World"

myStr[0] = "H"

puts myStr

*/

```

*  == vs ===
```
// == Equality Operato checks if two pieces of data VALUES are the EQUAL
// === Strict Equality Operator checks both VALUE and DATA type

var number = 26;
var numberString = '26';

console.log(number == numberString); // true
console.log(number === numberString); // false
```
*  JavaScript Objects (Ruby = Hash, Python = Dictionary)

```
// . dot notation
 // The dot operator is what you use
 // when you know the name of the property
 // you're trying to access ahead of time.

var myObj = {
prop1: "val1",
prop2: "val2"
};

var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2


// [] bracket notation
 // use to access data with white spaces

var movies = {
  "Cool Runnings": "Bobsleigh",
  "Cellar Door": "Donnie Darko",
  "Quantum Data": "Interstellar"
};

console.log(movies["Quantum Data"]);

console.log('');

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

 // use to access data with variables

var playerNumber = 16;       
var player = testObj.playerNumber; // undefined   
var player = testObj[playerNumber]; // "Montana"

console.log(player);

```

*  Accessing JavaScript Objects

```
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.

myDog["name"] = "Happy Coder";
myDog.name = "Happy Coder"; // best practice

```

*  typeof method

```
typeof(3) === typeof(4.32); // true

 // 3 is a "number" and 4.32 is a "number" as well,
 // so the equality comparison of the types returns true.
 // JavaScript has the same data type for integer and floating point numbers.

```
