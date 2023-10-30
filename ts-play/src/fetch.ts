

// export const sampleFunc = () => {
//     console.log("fetch.ts");
// }

export const value = await fetch("https://fakestoreapi.com/carts/2")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log("Error........", error);
  });

// console.log("value......", value);


export const new_value = async (url: any) => {
    let fetchValue = await fetch(url).then((res) => res.json())
    .then((data) => data);
  
    return fetchValue;
  };
  
  console.log(
    'new value.....',
    new_value('https://fakestoreapi.com/carts/2')
      
  );
  