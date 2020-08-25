var balance = 0;
var usd = 0;
var multiplier = getItem("Vukky") + getItem("Fall_Guy") * 2 + 1
var conversionRate = 5;

if (getItem("bal")) {
    balance = getItem("bal");
} else {
    localStorage.setItem("bal", 0);
}

if (getItem("usd")) {
    usd = getItem("usd");
} else {
    localStorage.setItem("usd", 0);
}

var balanceTicker = setInterval(function() {
    balance += multiplier;
    document.getElementById("bal").innerHTML = balance;
    document.getElementById("usd").innerHTML = usd;
    localStorage.setItem("bal", balance);
}, 500);

setInterval(function() {
    conversionRate = 5 + Math.floor(Math.random() * 10);
    document.getElementById("conversionRate").innerHTML = conversionRate;
}, 10000);


function reset() {
    clearInterval(balanceTicker)
    var resetStoreItems = confirm("Do you want to reset items purchased from the VukkyStore too?")
    localStorage.setItem("usd", 0);
    localStorage.setItem("bal", 0);
    if(resetStoreItems = true) {
        localStorage.setItem("Vukky", 0);
        localStorage.setItem("Fall_Guy", 0);
    }
    document.location.reload();
}

function convert() {
    usd += Math.floor(balance / conversionRate);
    balance = 0;
    document.getElementById("usd").innerHTML = usd;
    document.getElementById("bal").innerHTML = balance;
    localStorage.setItem("usd", usd);
    localStorage.setItem("bal", balance);
}

function getItem(name) {
    var value = localStorage.getItem(name);
    if (value != null && !isNaN(Number(value))) return Number(value);
    if (value == null) return null;
    else return value;
}