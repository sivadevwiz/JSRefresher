const array_one = ["test", "one", "two"];

console.log(array_one.toString());

console.log(array_one);
console.log(typeof array_one);

const my_array = [];

my_array[0] = (a, b) => a + b;

console.log(my_array);
console.log(my_array[0]);
console.log(my_array[0](2, 3)); // function saved can be called too

const num_array = [1, 2, 3, 4, 5];

console.log("array....", num_array);
console.log("First element....", num_array[0]);
console.log("Last element....", num_array[num_array.length - 1]);

// Adding element with higher indices

const num_array1 = [1, 2, 3];
num_array1[6] = 7; // adds undefined holes

console.log("num_array1.......", num_array1);

console.log("for each....");
num_array1.forEach((i) => console.log(i)); // 1,2,3,7

console.log("for loop....");

for (let i = 0; i < num_array1.length; i++) {
  console.log(num_array1[i]);
}
// 1,2, 3x undefined, 7 - undefined holes

//Associative Arrays
const person = [];

person["first"] = "Siva";

console.log(person[0]); // undefined
console.log(person["first"]); // Siva

const points = new Array(40); // not same as [40]
console.log("points array....", points); // 40 x undefined

const points1 = new Array(40, 100, 10);
console.log("points array....", points1);

// To identify Array

const arr = [1, 2, 3];
console.log("typeof", typeof arr); // object
console.log("Array.isArray", Array.isArray(arr)); // true
console.log("instance of Array", arr instanceof Array); // true

// Array delete

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; // causes empty or undefined hole
console.log("fruits....", fruits); // [empty, 'Orange', 'Apple', 'Mango']

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
console.log("arr3.......", arr3);

const arr4 = [...arr1, ...arr2];
console.log("arr4.......", arr4); // [1,2,3,4,5,6]

const arr5 = [arr1, arr2];
console.log("arr5.......", arr5); //  [Array(3), Array(3)]

const arr6 = [1, 2, 3, 4, 5];
console.log(arr6.splice(0, 2, "one", "two")); // diplays the removed items [1,2]

const arr7 = [1, 2, 3, 4, 5];
arr7.splice(0, 2, "one", "two");
console.log(arr7); // ['one', 'two', 3, 4, 5]

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1);

console.log("fruits1.slice(1)....", fruits1.slice(1));
console.log("fruits1.slice(2)....", fruits1.slice(2));
console.log("citrus....", citrus);
console.log("fruits1....", fruits1);

const num_array2 = [1, 111, 11];
console.log(num_array2.sort());
console.log(num_array2);

const num_array3 = [40, 100, 1, 5, 25, 10];
// won't work for numeric arrays
console.log(num_array3.sort()); // [1, 10, 100, 25, 40, 5]

// Ascending order
console.log(num_array3.sort((a, b) => a - b)); // [1, 5, 10, 25, 40, 100]

// Descending order
console.log(num_array3.sort((a, b) => b - a)); // [100, 40, 25, 10, 5, 1]

const num_array4 = [40, 100, -1, 1, 5, -5, 25, 10];
console.log(num_array4.sort((a, b) => a - b));

console.log("Max value........", num_array4.sort((a, b) => b - a)[0]);
console.log("Min value........", num_array4.sort((a, b) => a - b)[0]);

console.log("num_array4...", num_array4); // Array will be sorted

// better way to find max and min
const num_array5 = [40, 100, -1, 1, 5, -5, 25, 10];
console.log("num_array5...", num_array5);
console.log("Max value.......", Math.max.apply(null, num_array5));
console.log("Min value.......", Math.min.apply(null, num_array5));
console.log("num_array5...", num_array5); // [40, 100, -1, 1, 5, -5, 25, 10] - Array will not be sorted

const myArrayMax = (arr) => {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};

console.log("num_array5...", num_array5);
console.log("Max value...", myArrayMax(num_array5));
console.log("num_array5...", num_array5);

// Sorting complex arrays with objects

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

console.log("cars........", cars);
console.log(
  "cars sorted........",
  cars.sort((a, b) => a.year - b.year)
);

console.log(
  "cars sort with alphabets",
  cars.sort((a, b) => {
    let x = a.type.toLowerCase;
    let y = b.type.toLowerCase;
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  })
);
console.log("cars........", cars);

// Array flat - flattens to 1 level

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log("nestedArray....", nestedArray);

const flattenedArray = nestedArray.flat();

console.log("flattenedArray2...", flattenedArray);

// Deeper array - flatten to 2 level

const deepArray = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log("deepArray....", deepArray);

const flattenedArray2 = deepArray.flat(2);

console.log("flattenedArray2...", flattenedArray2);
