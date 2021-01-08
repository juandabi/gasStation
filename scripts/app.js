class Fuel {
    constructor(nameFuel, Capacity) {
        this.nameFuel = nameFuel;
        this.Capacity = Capacity;
        this.Transactions = [];
    }
    saveTransactions = (value) => this.Transactions.push(value);
    actualValue = () => this.Capacity - this.Transactions.reduce((a, b) => a + b, 0);
    porcentageValue = () => (this.actualValue() / this.Capacity) * 100;
}

//Variables for gas fuel
const Gas = new Fuel("Gas", 4922.39); // new object
const gasValue = document.getElementById("gasSold"); //input value sold
const gasPrintList = document.getElementById("listGasSold"); // container html print gas list
const gasVerticalBarContainer = document.getElementById("barGasTank"); //id vertical bar
const sellGas = document.getElementById("submitGas"); //button sell gas
const gasInfoTank = document.getElementById("porcentageGas"); //Info above Gas tank
sellGas.addEventListener("click", function () {
    Button(Gas, gasValue, gasPrintList, gasVerticalBarContainer, gasInfoTank);
});

//Variables for Diesel fuel
const Diesel = new Fuel("Diesel", 1603.7); //new object
const dieselValue = document.getElementById("dieselSold"); //input value sold
const dieselPrintList = document.getElementById("listDieselSold"); // container html print gas list
const dieselVerticalBarContainer = document.getElementById("barDieselTank"); //id vertical bar
const sellDiesel = document.getElementById("submitDiesel"); //button sell gas
const dieselInfoTank = document.getElementById("porcentageDiesel"); //Info above Gas tank
sellDiesel.addEventListener("click", function () {
    Button(Diesel, dieselValue, dieselPrintList, dieselVerticalBarContainer, dieselInfoTank);
});

const isValid = function (fuel, value) {
    if (isNaN(value)) {
        return false;
    } else if (value <= 0) {
        alert("It must be greater than zero");
        return false;
    } else if (value > fuel.actualValue()) {
        alert("It´s not enough in the tank");
        return false;
    } else {
        return true;
    }
};

const printLastTransactions = function (fuel, lastNumberTransactions, printListContainer) {
    printListContainer.innerHTML = "";
    const printList = fuel.Transactions.slice(-lastNumberTransactions).reverse();
    printList.forEach((element) => {
        const node = document.createElement("li");
        const textnode = document.createTextNode(`${element} gallons`);
        node.appendChild(textnode);
        printListContainer.appendChild(node);
    });
};

const round = (value, decimals) => Number(Math.round(value + "e" + decimals) + "e-" + decimals);

function Button(fuel, fuelValueString, printListContainer, verticalBarContainer, infoTank) {
    let fuelValue = parseFloat(fuelValueString.value);
    if (!isValid(fuel, fuelValue)) {
        return;
    }
    fuel.saveTransactions(fuelValue);
    fuelValueString.value = ""; //clear input text box
    printLastTransactions(fuel, 5, printListContainer);
    verticalBarContainer.style.height = `${fuel.porcentageValue()}%`; //modifyVerticalBar
    infoTank.innerText = `${round(fuel.actualValue(), 2)} gallons ${round(fuel.porcentageValue(), 2)}%`; //Print info tank
}
