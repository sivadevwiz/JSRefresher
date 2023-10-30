import axios from "axios";
const url = "https://fakestoreapi.com/carts/2";
// export const axios_value = () => {
//     const data =  axios
//       .get(url)
//       .then((response) => {
//         // Handle the successful response
//         console.log(response.data);
//         return response.data;
//       })
//       .catch((error) => {
//         // Handle the error response
//         console.log(error);
//       });
  
//     return data;
//   };

  export const axios_value = await axios
  .get(url)
  .then((response) => {
    // Handle the successful response
    // console.log(response.data);
    return response.data;
  })
  .catch((error) => {
    // Handle the error response
    console.log(error);
  });
  
  console.log("axios_value............", axios_value);
  