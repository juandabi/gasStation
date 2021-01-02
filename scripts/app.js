//variables for Fuel
const submitFuel = document.getElementById("submitFuel");
submitFuel.addEventListener("click", printLastFuelSold);
const fuelSoldList = [10, 20, 30];

function saveFuelSold(soldList) {
  const valueFuel = parseFloat(document.getElementById("fuelSold").value);
  const valueACPM = parseFloat(document.getElementById("acpmSold").value);

  
  if (!isNaN(valueFuel)) {
    //Value is a number then push in array
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
const acpmSoldList = [50, 40, 90];

function saveACPMSold() {
  const valueACPM = parseFloat(document.getElementById("acpmSold").value);
  if (!isNaN(valueACPM)) {
    //Value is a number then push in array
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

//Modify vetical bar size in the  tanks
function modifyVerticalBar(soldList, porcentageValue) {
  const barFuelTank = document.getElementById("barFuelTank"); //id vertical bar
  const barACPMTank = document.getElementById("barACPMTank"); //id vertical bar
  if (soldList == fuelSoldList) {
    barFuelTank.style.height = porcentageValue;
  } else {
    barACPMTank.style.height = porcentageValue;
  }
}

//sum array sold list
const sumSoldList = (soldList) => {
  return soldList.reduce(function (a, b) {
    return a + b;
  }, 0);
};

//get actual value of tank, substraction sum sold list of max capacity
const actualValue = (maxCapacity, sumSoldList) => {
  return maxCapacity - sumSoldList;
};

//get porcentage value --  actual value / max capacity
const porcentageValue = (maxCapacity, actualValue) => {
  return (actualValue / maxCapacity) * 100 + "%";
};

//function to modify progress bar in the fuel tank
function progressBarFuelTank() {
  const soldList = fuelSoldList;
  const maxCapacity = 500;
  const sum = sumSoldList(soldList);
  const actual = actualValue(maxCapacity, sum);
  const porcentage = porcentageValue(maxCapacity, actual);
  modifyVerticalBar(soldList, porcentage);
  console.log(sum, actual, porcentage);
}
