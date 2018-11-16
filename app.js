const _ = require("lodash");

let suits = [ "d", "h", "s", "c" ];
let nums = [ "2", "3", "4", "5", "6", "7", "8", "9",
    "10", "j", "q", "k", "a" ];
let c = 0;
let bet = .25;
let cost = 0;

deal();

function isFlush(cards) {
    return cards.every(v => v.suit === cards[0].suit);
}

function isRoyalFlush(cards) {
    let ten = _.find(cards, { number: "10" });
    let j = _.find(cards, { number: "j" });
    let q = _.find(cards, { number: "q" });
    let k = _.find(cards, { number: "k" });
    let a = _.find(cards, { number: "a" });
    return isFlush && ten && j && q && k && a;
}

function deal() {
    c++;
    cost += bet;
    let cards = [];
    while(cards.length < 5) {
        let n = random(nums.length);
        let s = random(suits.length);      
        if(!_.find(cards, {
            number: nums[n],
            suit: suits[s]
        })) {
            cards.push({ 
                number: nums[n],
                suit: suits[s]
            });
        }
    }
    console.log(cards);
    if(isRoyalFlush(cards)) {
        console.log("ROYAL FLUSH FOUND!!");
        console.log("It only took "+c+" deals");
        console.log("It cost you $"+cost+"!");
        process.exit();
    }
    deal();
}

function random(max) {
    return Math.floor(Math.random() * max);
}
