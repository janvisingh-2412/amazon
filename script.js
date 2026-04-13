// ADD TO CART FUNCTION
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}


// DISPLAY CART
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    if (!cartItems || !totalPrice) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        let div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
        <img src="${item.image}">
        <div class="cart-info">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <div class="quantity">
                <button onclick="decreaseQty(${index})">−</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQty(${index})">+</button>
            </div>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(div);
    });

    totalPrice.innerText = "Total: ₹" + total;
}


// INCREASE
function increaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


// DECREASE
function decreaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


// REMOVE ITEM
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


// RUN ONLY ON CART PAGE
if (document.getElementById("cart-items")) {
    displayCart();
}


// 🔥 SEARCH (FINAL WORKING)
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (input.includes("lip")) {
        window.location.href = "makeup.html";
    } 
    else if (input.includes("medicine")) {
        window.location.href = "medicines.html";
    } 
    else if (input.includes("stationery")) {
        window.location.href = "stationery.html";
    } 
    else if (input.includes("cloth")) {
        window.location.href = "clothing.html";
    } 
    else if (input.includes("pet")) {
        window.location.href = "pets.html";
    } 
    else if (input.includes("home")) {
        window.location.href = "home_decor.html";
    } 
    else if (input.includes("health")) {
        window.location.href = "health.html";
    } 
    else if (input.includes("electronics")) {
        window.location.href = "electronics.html";
    } 
}