var usd = getItem("usd")
var batchBuyEnabled = false;

function buy(name, price) {
    var friendlyName = name.split("_").join(" ");
    if(usd < price) {
        return alert("You can't afford a " + friendlyName + ".")
    }
    var itemAmount = getItem(name)
    if(!itemAmount) { var itemAmount = 0 }
    if(batchBuyEnabled == false) {
        singleBuy(friendlyName, itemAmount, name, price)
    } else {
        batchBuy(friendlyName, itemAmount, name, price)
    }
}

function singleBuy(friendlyName, itemAmount, name, price) {
    localStorage.setItem("usd", usd - price)
    localStorage.setItem(name, itemAmount + 1)
    usd = getItem("usd")
    itemAmount += 1;
    alert("Thank you for your purchase. You now have " + itemAmount + " " + friendlyName + "s.")
}

function batchBuy(friendlyName, itemAmount, name, price) {
    alert("Starting batch buy! Don't click anything after you click OK until you get the Thank you for your purchase message, or else things will go very wrong!")
    while (usd > price) {
        usd -= price;
        itemAmount += 1;
    }
    localStorage.setItem("usd", usd)
    localStorage.setItem(name, itemAmount)
    alert("Thank you for your purchase. You now have " + itemAmount + " " + friendlyName + "s.")
}

function buyAllToggle(){
    if(batchBuyEnabled == false) {
        batchBuyEnabled = true;
        document.getElementById("batchToggle").style["background-color"] = "#4CAF50"
    } else {
        batchBuyEnabled = false
        document.getElementById("batchToggle").style["background-color"] = "red"
    }
}

function getItem(name) {
    var value = localStorage.getItem(name);
    if (value != null && !isNaN(Number(value))) return Number(value);
    if (value == null) return null;
    else return value;
}