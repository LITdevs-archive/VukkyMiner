var usd = getItem("usd")

setTimeout(() => {
    if (usd > 19) {
        document.getElementById("amount").innerHTML = "We have these items in stock:"
        document.getElementById("vukkybutton").style.display = ""
    } else {
        document.getElementById("amount").innerHTML = "We don't have anything in stock! Come back later."
    }
}, 1000);

function buy(name, price) {
    alert("That feature isn't available right now.")
}

function getItem(name) {
    var value = localStorage.getItem(name);
    if (value != null && !isNaN(Number(value))) return Number(value);
    else return value;
}