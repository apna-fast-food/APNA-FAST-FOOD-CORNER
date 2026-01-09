let discount = "";

function order(item) {
  let msg = "Hello, I want to order " + item;
  if (discount !== "") msg += " | " + discount;
  window.open("https://wa.me/919368871417?text=" + encodeURIComponent(msg));
}

function quiz(ans) {
  let res = document.getElementById("quizResult");
  if (ans === "correct") {
    discount = "10% Discount Applied";
    res.innerHTML = "🎉 Correct! You got 10% discount";
  } else {
    res.innerHTML = "❌ Wrong! Try again";
  }
}

function spin() {
  let offers = ["5% OFF", "10% OFF", "Free Momos", "Better Luck Next Time"];
  let pick = offers[Math.floor(Math.random()*offers.length)];
  document.getElementById("spinResult").innerHTML = "🎁 " + pick;
  discount = pick;
}

