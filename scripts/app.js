//variables for Fuel
const submitFuel = document.getElementById("submitFuel"); //button Sell
submitFuel.addEventListener("click", fuelButton);
const fuelSoldList = []; //Array for fuel sold

//variables for Diesel
const submitDiesel = document.getElementById("submitDiesel"); //button Sell
submitDiesel.addEventListener("click", dieselButton);
const dieselSoldList = []; //Array for diesel sold

function fuelButton() {
  const soldList = fuelSoldList;
  const maxCapacity = 4922.39;

  actionButton(soldList, maxCapacity);
}

function dieselButton() {
  const soldList = dieselSoldList;
  const maxCapacity = 1603.70;
  actionButton(soldList, maxCapacity);
}

//function to save all transactions in the array
const saveTransactionSold = (soldList, maxCapacity) => {
  const valueFuel = parseFloat(document.getElementById("fuelSold").value);
  const valueDiesel = parseFloat(document.getElementById("dieselSold").value);
  if (soldList == fuelSoldList) {
    //Get list name
    if (isValid(fuelSoldList, maxCapacity, valueFuel) === 1) {
      //value is not empty
      //Value is a number then push in array
      fuelSoldList.push(valueFuel);
      console.log(fuelSoldList);
    }
  } else {
    if (isValid(dieselSoldList, maxCapacity, valueDiesel) === 1) {
      //value is not empty
      //Value is a number then push in array
      dieselSoldList.push(valueDiesel);
      console.log(dieselSoldList);
    }
  }
};


//function to delete all content in the div that shows last five transactions
const deleteSoldList = (soldList) => {
  if (soldList == fuelSoldList) {
    document.getElementById("listFuelSold").innerHTML = "";
  } else {
    document.getElementById("listDieselSold").innerHTML = "";
  }
};
//function print las five transactions
const printLastFiveSold = (soldList) => {
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
};

//function to clear text box
const clearTextBox = (soldList) => {
  if (soldList == fuelSoldList) {
    document.getElementById("fuelSold").value = ""; //delete value of input text box
  } else {
    document.getElementById("dieselSold").value = ""; //delete value of input text box
  }
};

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
  return (actualValue / maxCapacity) * 100;
};

//Modify vetical bar size in the  tanks
const modifyVerticalBar = (soldList, porcentageValue) => {
  const barFuelTank = document.getElementById("barFuelTank"); //id vertical bar
  const barDieselTank = document.getElementById("barDieselTank"); //id vertical bar
  if (soldList == fuelSoldList) {
    barFuelTank.style.height = `${porcentageValue}%`;
  } else {
    barDieselTank.style.height = `${porcentageValue}%`;
  }
};

//function to print actual value and porcentage value above tank
const printInfoAboveTank = (soldList, actualValue, porcentageValue) => {
  if (porcentageValue < 30) {
    ("alert!");
  }

  if (soldList == fuelSoldList) {
    const infoTank = document.getElementById("porcentageFuel");
    infoTank.innerText = `${parseFloat(actualValue).toFixed(
      2
    )} gallons ${parseFloat(porcentageValue).toFixed(2)}%`;
  } else {
    const infoTank = document.getElementById("porcentageDiesel");
    infoTank.innerText = `${parseFloat(actualValue).toFixed(
      2
    )} gallons ${parseFloat(porcentageValue).toFixed(2)}%`;
  }
};

//function to validate value input is greater than zero and less than actual capacity
function isValid(soldList, maxCapacity, value) {
  const actualCapacity = actualValue(maxCapacity, sumSoldList(soldList));

  if (!isNaN(value)) {
    if (value > 0) {
      if (value > actualCapacity) {
        alert("It´s not enough in the tank");
      } else {
        return 1;
      }
    } else {
      alert("It must be greater than zero");
    }
  }
}

//function to make actions button
function actionButton(type, capacity) {
  const soldList = type;
  const maxCapacity = capacity;

  saveTransactionSold(soldList, maxCapacity);
  deleteSoldList(soldList);
  printLastFiveSold(soldList);
  clearTextBox(soldList);
  const sum = sumSoldList(soldList);
  const actual = actualValue(maxCapacity, sum);
  const porcentage = porcentageValue(maxCapacity, actual);
  modifyVerticalBar(soldList, porcentage);
  printInfoAboveTank(soldList, actual, porcentage);
  console.log(sum, actual, `${porcentage}%`);
}
