var dice = {
 resetThis: 0,
 sides: 6,
 roll: function () {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
   return randomNumber;
 }
}


var dice2 = {
 resetThis2: 0,
 sides2: 6,
 roll2: function () {
  var randomNumber2 = Math.floor(Math.random() * this.sides2) + 1;
   return randomNumber2;
 }
}