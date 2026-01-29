const randIndex = function(lastIndex) {
    return Math.floor(Math.random() * (lastIndex + 1));
}

let allCards = [ 
    "&#127136;", "&#127137;", "&#127138;", "&#127139;", "&#127140;", "&#127141;",
    "&#127142;", "&#127143;", "&#127144;", "&#127145;", "&#127146;", "&#127147;",
    "&#127148;", "&#127149;", "&#127150;", "&#127153;", "&#127154;", "&#127155;",
    "&#127156;", "&#127157;", "&#127158;", "&#127159;", "&#127160;", "&#127161;",
    "&#127162;", "&#127163;", "&#127164;", "&#127165;", "&#127166;", "&#127167;",
    "&#127169;", "&#127170;", "&#127171;", "&#127172;", "&#127173;", "&#127174;",
    "&#127175;", "&#127176;", "&#127177;", "&#127178;", "&#127179;", "&#127180;",
    "&#127181;", "&#127182;", "&#127183;", "&#127185;", "&#127186;", "&#127187;",
    "&#127188;", "&#127189;", "&#127190;", "&#127191;", "&#127192;", "&#127193;",
    "&#127194;", "&#127195;", "&#127196;", "&#127197;", "&#127198;", "&#127199;" ];

let cardBack = allCards[0];
allCards.shift();

let gameDeck = [];
for(let i = 0; i < 8; i++) {
    let lastIndex = allCards.length - 1;
    r = randIndex(lastIndex);
    gameDeck.push(allCards[r]);
    allCards.splice(r, 1);
}

console.log(gameDeck);

gameDeck = gameDeck.concat(gameDeck);

const handleClick = function(event) {
    console.log(event.target.id);
    let cardIdx = event.target.id.slice(5);
    event.target.innerHTML = gameDeck[cardIdx];
    selected.push(cardIdx)
    if (!checkMatch(event.target.innerText)) {
        if (selected.length >= 2) {
            selected.forEach((card) => {
                console.log(event.target.innerHTML);
                event.target.innerHTML = cardBack
            })
            selected = []
        }
    } 
}
    


for(let i = 0; i < 16; i++) {
    document.querySelector('#card-'+i).onclick = handleClick;
}

let selected = [];

const checkMatch = function (text){
    if (selected.length < 2) {
        return false
    } else if (selected.length > 2) {
        console.log("lmao")
    } else {
        if (selected[0] === selected[1]) {
            // selected = []
            return true
        }
        // selected = []
    }
}
