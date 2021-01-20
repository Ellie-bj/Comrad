//model
var elapsedTimeText 
    
    
//controller
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

/** Stores the reference to the elapsed time interval*/
var elapsedTimeIntervalRef;

/** Stores the start time of timer */
var startTime;

/** Stores the details of elapsed time when paused */
var elapsedTimeWhenPaused;

/** Starts the stopwatch */
function startStopwatch() {
// Set start time based on whether it's stopped or resetted
setStartTime();

// Every second
elapsedTimeIntervalRef = setInterval(() => {
    // Compute the elapsed time & display
    elapsedTimeText.innerText = timeAndDateHandling.getElapsedTime(startTime); //pass the actual record start time

    // Improvement: Can Stop elapsed time and resert when a maximum elapsed time
    //              has been reached.
}, 1000);

}


/** Sets the start time value */
function setStartTime() {
if (elapsedTimeWhenPaused) {
    startTime = new Date();
    // Subtract the elapsed hours, minutes and seconds from the current date
    // To get correct elapsed time to resume from it
    startTime.setHours(startTime.getHours() - elapsedTimeWhenPaused.hours);
    startTime.setMinutes(startTime.getMinutes() - elapsedTimeWhenPaused.minutes);
    startTime.setSeconds(startTime.getSeconds() - elapsedTimeWhenPaused.seconds);
} else {
    startTime = new Date();
}
}

/** Pauses stopwatch */
function stopStopwatch() { //when finished game 
// Clear interval
if (typeof elapsedTimeIntervalRef !== "undefined") {
    clearInterval(elapsedTimeIntervalRef);
    elapsedTimeIntervalRef = undefined;
}

// Store the elapsed time on pause
storeElapsedTimeOnPause();

// display the start button
displayStartButton();
}

/** Stores the elapsed time hours, minutes and seconds details
* on pause*/
function storeElapsedTimeOnPause() {
// Break down elapsed time from display test
const brokenDownElapsedTime = elapsedTimeText.innerText.split(":");

// Convert list to numbers
const brokenDownElapsedTimeAsNumbers = brokenDownElapsedTime.map(numberAsString => parseInt(numberAsString));

// Store the hours minutes and seconds from that time
elapsedTimeWhenPaused = {
    hours: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[0] : 0,
    minutes: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[1] : brokenDownElapsedTimeAsNumbers[0],
    seconds: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[2] : brokenDownElapsedTimeAsNumbers[1]
}
}

/** Resets stopwatch */
function resetStopwatch() {
// Clear interval
if (typeof elapsedTimeIntervalRef !== "undefined") {
    clearInterval(elapsedTimeIntervalRef);
    elapsedTimeIntervalRef = undefined;
}

// Reset elapsed time when paused object
elapsedTimeWhenPaused = undefined

// display the start button
displayStartButton();

// Reset elapsed time text
elapsedTimeText.innerText = "00:00";
}

//API for time and date functions

var timeAndDateHandling = {
/** Computes the elapsed time since the moment the function is called in the format mm:ss or hh:mm:ss
 * @param {String} startTime - start time to compute the elapsed time since
 * @returns {String} elapsed time in mm:ss format or hh:mm:ss format if elapsed hours are 0.
 */
getElapsedTime: function (startTime) {

    // Record end time
    let endTime = new Date();

    // Compute time difference in milliseconds
    let timeDiff = endTime.getTime() - startTime.getTime();

    // Convert time difference from milliseconds to seconds
    timeDiff = timeDiff / 1000;

    // Extract integer seconds that dont form a minute using %
    let seconds = Math.floor(timeDiff % 60); //ignoring uncomplete seconds (floor)

    // Pad seconds with a zero if neccessary
    let secondsAsString = seconds < 10 ? "0" + seconds : seconds + "";

    // Convert time difference from seconds to minutes using %
    timeDiff = Math.floor(timeDiff / 60);

    // Extract integer minutes that don't form an hour using %
    let minutes = timeDiff % 60; //no need to floor possible incomplete minutes, becase they've been handled as seconds

    // Pad minutes with a zero if neccessary
    let minutesAsString = minutes < 10 ? "0" + minutes : minutes + "";

    // Convert time difference from minutes to hours
    timeDiff = Math.floor(timeDiff / 60);

    // Extract integer hours that don't form a day using %
    let hours = timeDiff % 24; //no need to floor possible incomplete hours, becase they've been handled as seconds

    // Convert time difference from hours to days
    timeDiff = Math.floor(timeDiff / 24);

    // The rest of timeDiff is number of days
    let days = timeDiff;

    let totalHours = hours + (days * 24); // add days to hours
    let totalHoursAsString = totalHours < 10 ? "0" + totalHours : totalHours + "";

    if (totalHoursAsString === "00") {
        return minutesAsString + ":" + secondsAsString;
    } else {
        return totalHoursAsString + ":" + minutesAsString + ":" + secondsAsString;
    }
}
}

//view
let app 

function init(){ //inits start screen
    app =  document.getElementById("app");
    app.innerHTML = `
        <div id="mAuto">
        <h1>Puzzle</h1>
        <button onclick="startGame()">Start</button>
        </div>    
    `;
}

function startGame(){ //starts the game
    //start timer
    
    app.innerHTML = '';
    app.innerHTML = `
        <div id="divWrapper">
            <div id="div1" class="drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            <div id="div2" class="drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        </div>
        <p class="elapsed-time-text">00:00</p>
        <img id="drag1" src="img/semi.jpg" draggable="true" ondragstart="drag(event)" width="336" height="69">
    `;
    elapsedTimeText = document.getElementsByClassName("elapsed-time-text")[0];
    startStopwatch()
}


