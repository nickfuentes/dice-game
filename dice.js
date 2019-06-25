class Dice {
    constructor(n, sides = 6) {
        this.sides = 6;
        this.n = n;
    }
    roll() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return `die${this.n} rolled ${randomNumber}`;
    }
}
const dieOne = new Dice(1);
const dieTwo = new Dice(2);
const newRoll = () => {
    return `${dieOne.roll()} ${dieTwo.roll()}`;
};
