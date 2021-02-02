//MODEL

let adjektiv1 = "_____";
let adjektiv2 = "_____";
let adjektiv3 = "_____";
let adjektiv4 = "_____";
let adjektiv5 = "_____";
let adjektiv6 = "_____";
let adjektiv7 = "_____";
let adjektiv8 = "_____";
let adjektiv9 = "_____";
let adjektiv10 = "_____";
let adjektiv11 = "_____";
let adjektiv12 = "_____";
let adjektiv13 = "_____";

let verb1 = "_____";
let verb2 = "_____";
let verb3 = "_____";
let verb4 = "_____";

let wordNumb = 0;
let verbEllerAdverb = "adjektiv";

//VIEW


function updateView(){
    document.getElementById('app').innerHTML = `
        <h1>Comrad pingu!</h1>
        <div id="mainTextStyle">
        Comrade pingu had a <b>${adjektiv1}</b> comrade.  Every day he would play <b>${verb1}</b> with his <b>${adjektiv3}</b> comrade,<br>
        Comrade pingu always looked forward to <b>${verb2}</b> with his <b>${adjektiv5}</b> comrade. <br>
        But sometimes <b>${adjektiv6}</b> comrade did <b>${verb3}</b> , Comrade pingu did not like <b>${adjektiv8}</b> . <br>
        When Comrade pingu sleeps, he dreams about <b>${adjektiv9}</b> a lot. Because he thinks it is so <b>${adjektiv10}</b> .<br>
        Sometimes when i wakes up at night he run to his <b>${adjektiv11}</b> mother to get <b>${adjektiv12}</b> .
        Comrad pingu is a <b>${adjektiv13}</b> NOOT NOOT.
        </div>
        <hr>
            <h2>${verbEllerAdverb}</h2>
        <hr>
        <center>
            <h3>Adjektiv</h3>
            <div id="adverbStyle">
                <div class="adjektiv" onclick="chosenWord(this)">Bald</div>
                <div class="adjektiv" onclick="chosenWord(this)">Nasty</div>
                <div class="adjektiv" onclick="chosenWord(this)">smol</div>
                <div class="adjektiv" onclick="chosenWord(this)">old</div>
                <div class="adjektiv" onclick="chosenWord(this)">soviet</div>
                <div class="adjektiv" onclick="chosenWord(this)">radical</div>
                <div class="adjektiv" onclick="chosenWord(this)">cheese</div>
                <div class="adjektiv" onclick="chosenWord(this)">Unspeakable </div>
                <div class="adjektiv" onclick="chosenWord(this)">Cool </div>
                <div class="adjektiv" onclick="chosenWord(this)">Scary </div>
                <div class="adjektiv" onclick="chosenWord(this)">Kind </div>
                <div class="adjektiv" onclick="chosenWord(this)">Horrible </div>
                <div class="adjektiv" onclick="chosenWord(this)">Happy </div>
                <div class="adjektiv" onclick="chosenWord(this)">Badass </div>
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
    
if (adjektiv1 === "_____" && element.classList.contains("adjektiv") && wordNumb === 0) {
    adjektiv1 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et Verb";
        
} else if (verb1 === "_____" && element.classList.contains("verb") && wordNumb === 1) {
    verb1 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";
} else if (adjektiv3 === "_____" && element.classList.contains("adjektiv") && wordNumb === 2) {
    adjektiv3 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et verb";
} else if (verb2 === "_____" && element.classList.contains("verb") && wordNumb === 3) {
    verb2 = word;
            wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";
} else if (adjektiv5 === "_____" && element.classList.contains("adjektiv") && wordNumb === 4) {
    adjektiv5 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";
} else if (adjektiv6 === "_____" && element.classList.contains("adjektiv") && wordNumb === 5) {
    adjektiv6 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et verb";
} else if (verb3 === "_____" && element.classList.contains("verb") && wordNumb === 6) {
    verb3 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";
} else if (adjektiv8 === "_____" && element.classList.contains("adjektiv") && wordNumb === 7) {
    adjektiv8 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";
} else if (adjektiv9 === "_____" && element.classList.contains("adjektiv") && wordNumb === 8) {
   adjektiv9 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";
} else if (adjektiv10 === "_____" && element.classList.contains("adjektiv") && wordNumb === 9) {
    adjektiv10 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";
} else if (adjektiv11 === "_____" && element.classList.contains("adjektiv") && wordNumb === 10) {
    adjektiv11 = word;    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";
} else if (adjektiv12 === "_____" && element.classList.contains("adjektiv") && wordNumb === 11) {
   adjektiv12 = word;
    wordNumb++;
    verbEllerAdverb = "Nå må du velge et adjektiv";;
} else if (adjektiv13 === "_____" && element.classList.contains("adjektiv") && wordNumb === 12) {
   adjektiv13 = word;
    wordNumb++;
    verbEllerAdverb = "Good job I quess.. add meg på Nooter";
} 

    removeElement(element);
    updateView();
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