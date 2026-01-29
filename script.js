const randIndex = function(lastIndex) {
    return Math.floor(Math.random() * (lastIndex + 1));
}

let allCards = [];


const resetCardOptions = function() {
    allCards = [ 
    , "&#127137;", "&#127138;", "&#127139;", "&#127140;", "&#127141;",
    "&#127142;", "&#127143;", "&#127144;", "&#127145;", "&#127146;", "&#127147;",
    "&#127148;", "&#127149;", "&#127150;", "&#127153;", "&#127154;", "&#127155;",
    "&#127156;", "&#127157;", "&#127158;", "&#127159;", "&#127160;", "&#127161;",
    "&#127162;", "&#127163;", "&#127164;", "&#127165;", "&#127166;", "&#127169;",
    "&#127170;", "&#127171;", "&#127172;", "&#127173;", "&#127174;", "&#127175;", 
    "&#127176;", "&#127177;", "&#127178;", "&#127179;", "&#127180;", "&#127181;",
    "&#127182;", "&#127185;", "&#127186;", "&#127187;", "&#127188;", "&#127189;", 
    "&#127190;", "&#127191;", "&#127192;", "&#127193;", "&#127194;", "&#127195;", 
    "&#127196;", "&#127197;", "&#127198;"];};

const cardBack = "&#127136";
// allCards.shift();

let gameDeck = [];
const makeDeck = function(numPairs) {
    for(let i = 0; i < numPairs; i++) {
        let lastIndex = allCards.length - 1;
        r = randIndex(lastIndex);
        gameDeck.push(allCards[r]);
        allCards.splice(r, 1);
    }
    
    gameDeck = gameDeck.concat(gameDeck);
    gameDeck.sort(() => Math.random() - 0.5) //randomize order
}

resetCardOptions()
makeDeck(8)



const warning = document.getElementById("slow");
warning.style.display = "none";

let moves = 0;
const moveDiv = document.getElementById("moves");
moveDiv.innerText = "Moves: " + moves

let timer = 0;
const timerDiv = document.getElementById("timer");
const incTimer = setInterval(() => 
    {timer += 1;
        timerDiv.innerText = "Timer: " + timer + " seconds"
    }
, 1000);



const handleClick = function(event) {
    if (selected.length < 2) {
        // increase move counter
        moves += 1;
        moveDiv.innerText = "Moves: " + moves;

        // process click
        console.log(event.target.id);
        let cardIdx = event.target.id.slice(5);
        event.target.innerHTML = gameDeck[cardIdx];
        selected.push(event.target);

        //match logic
        if (!checkMatch()) {
            if (selected.length == 2) {
                setTimeout(() => {
                    selected.shift().innerHTML = cardBack
                    selected.shift().innerHTML = cardBack},1000)
            }
        } else {
            if (selected.length == 2) {
                selected.shift()
                selected.shift()
            }
        }
    } else {
        warning.style.display = "block"
        setTimeout(() => {
            warning.style.display = "none";
        },2000)
    }
}
    


for(let i = 0; i < 16; i++) {
    document.querySelector('#card-'+i).onclick = handleClick;
}

let selected = [];

const checkMatch = function (){
    if (selected.length < 2) {
        return false
    } else if (selected.length > 2) {
        console.log("lmao")
    } else {
        if (selected[0].innerText === selected[1].innerText) {
            return true
        }
    }
    return false
}


const restart = function (numPairs){
    
    gameDeck = [];
    resetCardOptions()
    makeDeck(numPairs)
    for(let i = 0; i < numPairs*2; i++) {
        document.querySelector('#card-'+i).innerHTML = cardBack;
        document.querySelector('#card-'+i).onclick = handleClick;
    }


    timer=0;
    timerDiv.innerText = "Timer: 0 seconds";

    moves=0;
    moveDiv.innerText = "Moves: 0";
}