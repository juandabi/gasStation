const submitFuel = document.getElementById("submitFuel");
submitFuel.addEventListener("click", saveFuelSold);
const fuelSoldList = [];

function saveFuelSold() {
  const valueFuel = parseFloat(document.getElementById("fuelSold").value);
  fuelSoldList.push(valueFuel);
  console.log(fuelSoldList);
}

function printLastFuelSold() {
  const printList = fuelSoldList.slice(-5).reverse();
  console.log(printList);
}

function imprimir() {
  const node = document.createElement("li");
  const textnode = document.createTextNode("hola");
  node.appendChild(textnode);
  document.getElementById("OrderListFuelSold").appendChild(node);
}
