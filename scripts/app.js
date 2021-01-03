//variables for Fuel
const submitFuel = document.getElementById("submitFuel");
submitFuel.addEventListener("click", fuelButton);
const fuelSoldList = [10, 20, 30];

//variables for Diesel
const submitDiesel = document.getElementById("submitDiesel");
submitDiesel.addEventListener("click", fuelButton);
const dieselSoldList = [50, 40, 90];

function fuelButton() {
  const soldList = fuelSoldList;
  saveTransactionSold(soldList);
  printLastFiveSold(soldList);
}
//function to clear text box
function clearTextBox(soldList) {
  if (soldList == fuelSoldList) {
    document.getElementById("fuelSold").value = ""; //delete value of input text box
  } else {
    document.getElementById("dieselSold").value = ""; //delete value of input text box
  }
}
//function to save all transactions in the array
function saveTransactionSold(soldList) {
  const valueFuel = parseFloat(document.getElementById("fuelSold").value);
  const valueDiesel = parseFloat(document.getElementById("dieselSold").value);
  if (soldList == fuelSoldList) {
    //Get list name
    if (!isNaN(valueFuel)) {
      //Value is a number then push in array
      fuelSoldList.push(valueFuel);
      console.log(fuelSoldList);
    }
  } else {
    if (!isNaN(valueFuel)) {
      //Value is a number then push in array
      dieselSoldList.push(valueDiesel);
      console.log(dieselSoldList);
    }
  }
}

//function to delete all content in the div that shows last five transactions
function deleteSoldList(soldList) {
  if (soldList == fuelSoldList) {
    document.getElementById("listFuelSold").innerHTML = "";
  } else {
    document.getElementById("listDieselSold").innerHTML = "";
  }
}
//function print las five transactions
function printLastFiveSold(soldList) {
  const printList = soldList.slice(-5).reverse();
  printList.forEach((element) => {
    // Prints last five child nodes
    const node = document.createElement("li");
    const textnode = document.createTextNode(element + " gallons");
    node.appendChild(textnode);
    if (soldList == fuelSoldList) {
      document.getElementById("listFuelSold").appendChild(node);
    } else {
      document.getElementById("listDieselSold").appendChild(node);
    }
  });
}

//Modify vetical bar size in the  tanks
function modifyVerticalBar(soldList, porcentageValue) {
  const barFuelTank = document.getElementById("barFuelTank"); //id vertical bar
  const barDieselTank = document.getElementById("barDieselTank"); //id vertical bar
  if (soldList == fuelSoldList) {
    barFuelTank.style.height = porcentageValue;
  } else {
    barDieselTank.style.height = porcentageValue;
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
