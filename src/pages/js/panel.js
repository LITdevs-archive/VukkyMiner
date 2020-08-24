var balance = 0;
var usd = 0;

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

setInterval(function() {
    balance += 1;
    document.getElementById("bal").innerHTML = balance;
    localStorage.setItem("bal", balance);
}, 1000);

function reset() {
    localStorage.setItem("usd", 0);
    localStorage.setItem("bal", 0);
    document.location.reload();
}

function convert() {
    usd = balance
    balance = 0
    document.getElementById("usd").innerHTML = usd;
    document.getElementById("bal").innerHTML = balance;
    localStorage.setItem("usd", usd);
    localStorage.setItem("bal", balance);
}

function getItem(name) {
    var value = localStorage.getItem(name);
    if (value != null && !isNaN(Number(value))) return Number(value);
    else return value;
}