const newSet = new Set();

newSet.add(1);
newSet.add(2);
newSet.add(3);

console.log("newSet....", newSet);
console.log("typeof newSet....", typeof newSet);
console.log("newSet instanceof Set....", newSet instanceof Set);

const setOne = new Set([1, 2, 3]);

console.log("setOne....", setOne);
console.log("setOne.keys()....", setOne.keys());
console.log("setOne.keys()....", setOne.values());
