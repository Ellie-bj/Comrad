//model___________________________________________________________________________________________________________________________________
var elapsedTimeText; 
var parrentid;   
var victoryTime;  
    
//controller______________________________________________________________________________________________________________________________
function allowDrop(ev) 
{
  ev.preventDefault();
}

function drag(ev) 
{
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) 
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var divDrag = document.getElementById(data);
    var divDragIDNumb = document.getElementById(data).id.slice(-1);
    var divNumb = ev.target.id.slice(-1);
    var divDrop = ev.target;
    
    if (divNumb == divDragIDNumb && divDrop.childNodes.length == 0 ) { // er riktig brikke og er ikke noen brikker i feltet fra før. 
        //riktig brikke på riktig plass
            ev.target.appendChild(divDrag);
            ev.target.setAttribute("ondrop", ""); //slår av on drop på pusslebitholder
            divDrag.setAttribute("draggable", "false");
            divDrag.setAttribute("ondragstart", "");
            victory();
    }
   
}

//Stores the reference to the elapsed time interval
var elapsedTimeIntervalRef;

//Stores the start time of timer
var startTime;

//Stores the details of elapsed time when paused
var elapsedTimeWhenPaused;

//Starts the stopwatch
function startStopwatch() 
{
    // Set start time based on whether it's stopped or resetted
    setStartTime();

    // Every second
    elapsedTimeIntervalRef = setInterval(() => 
    {
        // Compute the elapsed time & display
        elapsedTimeText.innerText = timeAndDateHandling.getElapsedTime(startTime); //pass the actual record start time

        // Improvement: Can Stop elapsed time and resert when a maximum elapsed time has been reached.
    }, 1000);

}


function victory() 
{
    if (document.getElementById("div1").childNodes.length != 0 && document.getElementById("div2").childNodes.length != 0 && document.getElementById("div3").childNodes.length != 0 && document.getElementById("div4").childNodes.length != 0) 
    {

        if (document.getElementById("div1").childNodes[0].id == "drag1" && document.getElementById("div2").childNodes[0].id == "drag2" && document.getElementById("div3").childNodes[0].id == "drag3" && document.getElementById("div4").childNodes[0].id == "drag4") 
        {
            victoryTime = elapsedTimeText;
            stopStopwatch();
            showModal();
        }
    }
}


    //Sets the start time value            
function setStartTime() 
{
    if (elapsedTimeWhenPaused) 
    {
        startTime = new Date();
        // Subtract the elapsed hours, minutes and seconds from the current date
        // To get correct elapsed time to resume from it
        startTime.setHours(startTime.getHours() - elapsedTimeWhenPaused.hours);
        startTime.setMinutes(startTime.getMinutes() - elapsedTimeWhenPaused.minutes);
        startTime.setSeconds(startTime.getSeconds() - elapsedTimeWhenPaused.seconds);
    } else 
        {
            startTime = new Date();
        }
}

//Pauses stopwatch
function stopStopwatch() 
{ //when finished game 
    // Clear interval
    if (typeof elapsedTimeIntervalRef !== "undefined") 
    {
        clearInterval(elapsedTimeIntervalRef);
        elapsedTimeIntervalRef = undefined;
    }

    // Store the elapsed time on pause
    storeElapsedTimeOnPause();

}

//Stores the elapsed time hours, minutes and seconds details on pause
function storeElapsedTimeOnPause() 
{
    // Break down elapsed time from display test
    const brokenDownElapsedTime = elapsedTimeText.innerText.split(":");

    // Convert list to numbers
    const brokenDownElapsedTimeAsNumbers = brokenDownElapsedTime.map(numberAsString => parseInt(numberAsString));

    // Store the hours minutes and seconds from that time
    elapsedTimeWhenPaused = 
    {
        hours: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[0] : 0,
        minutes: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[1] : brokenDownElapsedTimeAsNumbers[0],
        seconds: brokenDownElapsedTimeAsNumbers.length === 3 ? brokenDownElapsedTimeAsNumbers[2] : brokenDownElapsedTimeAsNumbers[1]
    }
}

// Resets stopwatch
function resetStopwatch() 
{
    // Clear interval
    if (typeof elapsedTimeIntervalRef !== "undefined") 
    {
        clearInterval(elapsedTimeIntervalRef);
        elapsedTimeIntervalRef = undefined;
    }

    // Reset elapsed time when paused object
    elapsedTimeWhenPaused = undefined


    // Reset elapsed time text
    elapsedTimeText.innerText = "00:00";
}

//API for time and date functions

var timeAndDateHandling = 
{
/*
 * Computes the elapsed time since the moment the function is called in the format mm:ss or hh:mm:ss
 * @param {String} startTime - start time to compute the elapsed time since
 * @returns {String} elapsed time in mm:ss format or hh:mm:ss format if elapsed hours are 0.
 */
getElapsedTime: function (startTime) 
    {
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

        if (totalHoursAsString === "00") 
        {
            return minutesAsString + ":" + secondsAsString;
        } else 
            {
                return totalHoursAsString + ":" + minutesAsString + ":" + secondsAsString;
            }
    }
}

//view______________________________________________________________________________________________________________________________
let app 

function init(){ //inits start screen
    app =  document.getElementById("app");
    app.innerHTML = `
        <div id="mAuto">
            <button onclick="startGame()">Start</button>
        </div>    
    `;
}

//starts the game
function startGame()
{ 
    
    
    app.innerHTML = `
    <center>
                <div id="picture"></div>
                <h2>Comrad Pingu Puzzle</h2>
                <p class="elapsed-time-text">00:00</p>
            
            <div class="flexWrapper">
                <div class="flex-container">
                    <img id="drag1" class="pusslebit" src="img/row-1-col-1.jpg" draggable="true" ondragstart="drag(event)" >
                    <img id="drag2" class="pusslebit" src="img/row-1-col-2.jpg" draggable="true" ondragstart="drag(event)">
                    <img id="drag3" class="pusslebit" src="img/row-2-col-1.jpg" draggable="true" ondragstart="drag(event)" >
                    <img id="drag4" class="pusslebit" src="img/row-2-col-2.jpg" draggable="true" ondragstart="drag(event)">
                </div>
            </div>            

            <div id="pusslespill">
                <div id="div1" class="drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="div2" class="drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="div3" class="drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="div4" class="drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            </div>
    </center>
    `;

    
    elapsedTimeText = document.getElementsByClassName("elapsed-time-text")[0];
    startStopwatch(); //start timer
}

function updateViewWithModal()// Puts modal in HTML
{ 
    app.innerHTML +=` <div id="modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Finished!</h2>
            </div>

            <div class="modal-body">
                <p>Congratulation you finished the puzzle!</p>
                <img src="https://i.pinimg.com/originals/1b/5c/3c/1b5c3c20f0692de2d67d0e028757ebab.png" width="auto" height="400px">
            </div>

            <div class="modal-footer">
                <h3>Time used: ${victoryTime.innerHTML}</h3>
                <button onclick="startGame()">Restart</button>
            </div>
        </div>
    </div>`;
}

function showModal() 
{ // Make modal visible
    updateViewWithModal();
    document.getElementById("modal").style.display = "inline";
    resetStopwatch();    
}


