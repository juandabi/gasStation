//variables for Fuel

const submitFuel = document.getElementById("submitFuel");
submitFuel.addEventListener("click", printLastFuelSold);
const fuelSoldList = [];

function saveFuelSold() {
  const valueFuel = parseFloat(document.getElementById("fuelSold").value);
  if (!isNaN(valueFuel)) {
    //Value is a number then push in array
    console.log("🚀 ~ valueFuel", valueFuel);
    fuelSoldList.push(valueFuel);
    console.log(fuelSoldList);
  }
}

function printLastFuelSold() {
  saveFuelSold();
  const printList = fuelSoldList.slice(-5).reverse();
  const OrderListFuelSold = document.getElementById("OrderListFuelSold");
  OrderListFuelSold.innerHTML = ""; //Delete all child nodes
  printList.forEach((element) => {
    // Prints last five child nodes
    const node = document.createElement("li");
    const textnode = document.createTextNode(element + " gallons");
    node.appendChild(textnode);
    document.getElementById("OrderListFuelSold").appendChild(node);
  });
  document.getElementById("fuelSold").value = ""; //delete value of input text box
}

//variables for ACPM
const submitACPM = document.getElementById("submitACPM");
submitACPM.addEventListener("click", printLastACPMSold);
const acpmSoldList = [];

function saveACPMSold() {
  const valueACPM = parseFloat(document.getElementById("acpmSold").value);
  if (!isNaN(valueACPM)) {
    //Value is a number then push in array
    console.log("🚀 ~ valueACPM", valueACPM);
    acpmSoldList.push(valueACPM);
    console.log(acpmSoldList);
  }
}

function printLastACPMSold() {
  saveACPMSold();
  const printList = acpmSoldList.slice(-5).reverse();
  const OrderListACPMSold = document.getElementById("OrderListACPMSold");
  OrderListACPMSold.innerHTML = ""; //Delete all child nodes
  printList.forEach((element) => {
    // Prints last five child nodes
    const node = document.createElement("li");
    const textnode = document.createTextNode(element + " gallons");
    node.appendChild(textnode);
    document.getElementById("OrderListACPMSold").appendChild(node);
  });
  document.getElementById("acpmSold").value = ""; //delete value of input text box
}

//Modify progress bar tanks
function ProgressBar(soldList, porcentageValue) {
  const barFuelTank = document.getElementById("barFuelTank");
  const barACPMTank = document.getElementById("barACPMTank");
  if (soldList == fuelSoldList) {
    barFuelTank.style.height = porcentageValue;
  } else {
    barACPMTank.style.height = porcentageValue;
  }
}

//Sum all item in array
function sumSoldList(soldList) {
  return soldList.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function ShowActualValue(soldList) {
  const maxCapacity = 500;
  const actualValue = maxCapacity - sumSoldList(soldList);
  const porcentageValue = (actualValue / maxCapacity) * 100 + "%";
  return actualValue, porcentageValue;
}

function progressBarFuelTank() {
  const soldList = fuelSoldList;
  sumSoldList(soldList);
  ShowActualValue(soldList);

  console.log(porcertageValue);
}

const porcentageValue = (maxCapacity, actualValue) => {
  return (actualValue / maxCapacity) * 100 + "%";
};

const actualValue = (maxCapacity, sumSoldList) => {
  return maxCapacity - sumSoldList;
};
