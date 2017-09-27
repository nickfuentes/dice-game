function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


function startOver(zero) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = zero;
}

var button = document.getElementById("reset");

button.onclick = function() {
  var reset = dice.resetThis;
  startOver(reset);
};

// next butoon

function printNumber2(number2) {
  var placeholder2 = document.getElementById("placeholder2");
  placeholder2.innerHTML = number2;
}

var button2 = document.getElementById("button2");

button2.onclick = function() {
  var result2 = dice2.roll2();
  printNumber2(result2);
};

function startOver2(zero2) {
  var placeholder2 = document.getElementById("placeholder2");
  placeholder2.innerHTML = zero2;
}

var button2 = document.getElementById("reset2");

button2.onclick = function() {
  var reset2 = dice2.resetThis2;
  startOver2(reset2);
};

