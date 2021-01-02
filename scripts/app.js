// const printFuelSold = (valueFuel) => {
//   let x = parseFloat(valueFuel.value);
//   console.log(x);
// };

function printFuelSold(valueFuel) {
  let num = parseInt(valueFuel.value);
  console.log(num);
}

let valueFuel = document.getElementById("fuelSold");
let submitFuel = document.getElementById("submitFuel");
submitFuel.addEventListener("click", printFuelSold);

