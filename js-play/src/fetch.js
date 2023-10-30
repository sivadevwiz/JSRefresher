console.log("working");

const value = await fetch("https://fakestoreapi.com/carts/2")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log("Error........", error);
  });

console.log("value......", value);
