let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function showCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  if (!cartItems) return;

  let sum = 0;
  cartItems.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    sum += item.price;
    cartItems.appendChild(li);
  });
  total.textContent = sum;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

window.onload = showCart;
