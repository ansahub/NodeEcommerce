function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}



function addToCart(itemId) {

    let cart = getCookie("cart");

    if (cart) {

        try{
        cart = JSON.parse(cart);
        }
        catch(e){
        cart = [];
        }
    }
    else {
        cart = [];
    }

    cart.push(itemId);

    setCookie("cart", JSON.stringify(cart), 7);
}

//This is for cart icon and number of items 
window.onload = function () {

    const cartNumber = document.getElementById("cartNr");

    if (cartNumber) {
        let cart = getCookie("cart");

        if (cart) {
            cart = JSON.parse(cart);
        }
        else {
            cart = [];
        }
        cartNumber.innerHTML = cart.length; //Number of items in the cart
    }
}



function deleteFromCart(index) {

    let cart = getCookie("cart");

    if (cart) {
        cart = JSON.parse(cart);
    }
    else {
        cart = [];
    }

    cart.splice(index, 1);

    setCookie("cart", JSON.stringify(cart), 7); //7 days

    window.location.reload();
}

