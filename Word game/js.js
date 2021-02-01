//MODEL

let adverb1 = "_____";
let adverb2 = "_____";
let adverb3 = "_____";
let adverb4 = "_____";
let adverb5 = "_____";
let adverb6 = "_____";
let adverb7 = "_____";
let adverb8 = "_____";
let adverb9 = "_____";
let adverb10 = "_____";
let adverb11 = "_____";
let adverb12 = "_____";
let adverb13 = "_____";

let verb1 = "_____";
let verb2 = "_____";
let verb3 = "_____";
let verb4 = "_____";

let wordNumb = 0;
let verbEllerAdverb = "adverb";

//VIEW


function updateView(){
    document.getElementById('app').innerHTML = `
        <h1>Comrad pingu!</h1>
        <div id="mainTextStyle">
        Comrade pingu had a <b>${adverb1}</b> comrade.  Every day he would play <b>${verb1}</b> with his <b>${adverb3}</b> comrade,<br>
        Comrade pingu always looked forward to <b>${verb2}</b> with his <b>${adverb5}</b> comrade. <br>
        But sometimes <b>${adverb6}</b> comrade did <b>${verb3}</b> , Comrade pingu did not like <b>${adverb8}</b> . <br>
        When Comrade pingu sleeps, he dreams about <b>${adverb9}</b> a lot. Because he thinks it is so <b>${adverb10}</b> .<br>
        Sometimes when i wakes up at night he run to his <b>${adverb11}</b> mother to get <b>${adverb12}</b> .
        Comrad pingu is a <b>${adverb13}</b> NOOT NOOT.
        </div>
        <hr>
            <h2>${verbEllerAdverb}</h2>
        <hr>
        <center>
            <h3>Adverb</h3>
            <div id="adverbStyle">
                <div class="adverb" onclick="chosenWord(this)">Bald</div>
                <div class="adverb" onclick="chosenWord(this)">Nasty</div>
                <div class="adverb" onclick="chosenWord(this)">smol</div>
                <div class="adverb" onclick="chosenWord(this)">old</div>
                <div class="adverb" onclick="chosenWord(this)">soviet</div>
                <div class="adverb" onclick="chosenWord(this)">radical</div>
                <div class="adverb" onclick="chosenWord(this)">cheese</div>
                <div class="adverb" onclick="chosenWord(this)">Unspeakable </div>
                <div class="adverb" onclick="chosenWord(this)">Cool </div>
                <div class="adverb" onclick="chosenWord(this)">Scary </div>
                <div class="adverb" onclick="chosenWord(this)">Kind </div>
                <div class="adverb" onclick="chosenWord(this)">Horrible </div>
                <div class="adverb" onclick="chosenWord(this)">Happy </div>
                <div class="adverb" onclick="chosenWord(this)">Badass </div>
            </div>
            <hr>
            <h3>Verb</h3>
            <div id="verbStyle">
                <div class="verb" onclick="chosenWord(this)">Hide and seek</div>
                <div class="verb" onclick="chosenWord(this)">Satan worshipping</div>
                <div class="verb" onclick="chosenWord(this)">Murder</div>
                <div class="verb" onclick="chosenWord(this)">texted</div>
                <div class="verb" onclick="chosenWord(this)">Play Poker</div>
                <div class="verb" onclick="chosenWord(this)">Play 7 minuts in the closet</div>
            </div>
        </center>
    `;
}
//CONTROLLER

function removeElement(element) {
    element.remove(); // funk 
}


function chosenWord(element) {
let word = element.innerText;
    
if (adverb1 === "_____" && element.classList.contains("adverb") && wordNumb === 0) {
    adverb1 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et Verb";
        
} else if (verb1 === "_____" && element.classList.contains("verb") && wordNumb === 1) {
    verb1 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";
} else if (adverb3 === "_____" && element.classList.contains("adverb") && wordNumb === 2) {
    adverb3 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et verb";
} else if (verb2 === "_____" && element.classList.contains("verb") && wordNumb === 3) {
    verb2 = word;
            wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";
} else if (adverb5 === "_____" && element.classList.contains("adverb") && wordNumb === 4) {
    adverb5 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";
} else if (adverb6 === "_____" && element.classList.contains("adverb") && wordNumb === 5) {
    adverb6 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et verb";
} else if (verb3 === "_____" && element.classList.contains("verb") && wordNumb === 6) {
    verb3 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";
} else if (adverb8 === "_____" && element.classList.contains("adverb") && wordNumb === 7) {
    adverb8 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";
} else if (adverb9 === "_____" && element.classList.contains("adverb") && wordNumb === 8) {
    adverb9 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";
} else if (adverb10 === "_____" && element.classList.contains("adverb") && wordNumb === 9) {
    adverb10 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";
} else if (adverb11 === "_____" && element.classList.contains("adverb") && wordNumb === 10) {
    adverb11 = word;    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";
} else if (adverb12 === "_____" && element.classList.contains("adverb") && wordNumb === 11) {
    adverb12 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adverb";;
} else if (adverb13 === "_____" && element.classList.contains("adverb") && wordNumb === 12) {
    adverb13 = word;
    wordNumb++;
    verbEllerAdverb = "Good job I quess.. add meg på Nooter";
} 
    updateView();
    removeElement(element);
}
/*
 *adverb1
 * verb1
 * adverb3 end of line 1
 * verb2
 * adverb5 end of line 2
 * adverb6
 * verb3
 * adverb8 end of line 3
 * adverb9
 * adverb10 end of line 4
 * adverb11
 * adverb12 end of line 5
 * addverb13
 */