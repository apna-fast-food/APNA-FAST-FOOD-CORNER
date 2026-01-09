let discount = "";

function order(item) {
  let msg = "Hello, I want to order " + item;
  if (discount !== "") {
    msg += " | Offer: " + discount;
  }
  let url = "https://wa.me/919368871417?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
}

function quiz(ans) {
  let res = document.getElementById("quizResult");
  if (ans === "correct") {
    discount = "10% Discount";
    res.innerHTML = "🎉 Correct! You won 10% OFF";
  } else {
    res.innerHTML = "❌ Wrong! Try again";
  }
}

function spin() {
  let offers = ["5% OFF", "10% OFF", "Free Momos", "Better Luck Next Time"];
  let pick = offers[Math.floor(Math.random() * offers.length)];
  document.getElementById("spinResult").innerHTML = "🎁 " + pick;
  discount = pick;
}
