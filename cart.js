let cart = JSON.parse(localStorage.getItem("cart")) || [];



function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let qty = item.quantity || 1;
        total += item.price * qty;

        let div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image}">
            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                
                <div>
                    <button onclick="decreaseQty(${index})">-</button>
                    <span> ${item.quantity || 1} </span>
                    <button onclick="increaseQty(${index})">+</button>
                </div>
            </div>

            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(div);
    });

    totalPrice.innerText = "Total: ₹" + total;




    
}



function increaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].quantity += 1;

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function decreaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}




function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function goToCheckout() {
    window.location.href = "checkout.html";
}