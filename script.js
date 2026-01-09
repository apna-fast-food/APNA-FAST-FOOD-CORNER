let cart = [];
let total = 0;

// Change quantity + / -
function changeQty(btn, change) {
  let span = btn.parentElement.querySelector("span");
  let qty = Math.max(1, parseInt(span.innerText) + change);
  span.innerText = qty;
}

// Add item to cart
function addToCart(btn, name) {
  let card = btn.parentElement;
  let variantEl = card.querySelector(".variant");
  if (!variantEl || !variantEl.value) {
    alert("Please select a variant");
    return;
  }
  let price = parseInt(variantEl.value);
  let qty = parseInt(card.querySelector(".qty span").innerText);

  let item = `${name} x${qty} = ₹${price * qty}`;
  cart.push(item);
  total += price * qty;

  renderCart();
}

// Render cart items
function renderCart() {
  let ul = document.getElementById("cart-items");
  if (!ul) return;
  ul.innerHTML = "";
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerText = item;
    // Click to remove
    li.onclick = () => removeFromCart(index);
    ul.appendChild(li);
  });
  let totalEl = document.getElementById("total");
  if (totalEl) totalEl.innerText = total;
}

// Remove item from cart
function removeFromCart(index) {
  let itemText = cart[index];
  // Extract price from text "Name xQty = ₹Price"
  let price = parseInt(itemText.split("₹")[1]);
  let qty = parseInt(itemText.split("x")[1].split(" =")[0]);
  total -= price;
  cart.splice(index, 1);
  renderCart();
}

// Checkout via WhatsApp
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }
  let msg = "Order Details:%0A" + cart.join("%0A") + `%0ATotal: ₹${total}`;
  window.open(`https://wa.me/919368871417?text=${msg}`);
}

// Filter food by category
function filterFood(cat) {
  document.querySelectorAll(".food-card").forEach(card => {
    card.style.display =
      cat === "all" || card.classList.contains(cat) ? "block" : "none";
  });
}

// Search food by name
function searchFood() {
  let input = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".food-card").forEach(card => {
    let name = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}
