 // timer
    //Define vars to hold time values
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    //Define vars to hold "display" value
    let displaySeconds = 0;
    let displayMinutes = 0;
    let displayHours = 0;

    //Define var to hold setInterval() function
    let interval = null;

    //Define var to hold stopwatch status
    let status = "stopped";

    //Stopwatch function (logic to determine when to increment next value, etc.)
    function stopWatch(){

        seconds++;

        //Logic to determine when to increment next value
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;

            if(minutes / 60 === 1){
                minutes = 0;
                hours++;
            }

        }

        //If seconds/minutes/hours are only one digit, add a leading 0 to the value
        displaySeconds = seconds;

        //Display updated time values to user
        document.getElementById("display").innerHTML = displaySeconds + " sec";
    }

    function startStop(){
        if(status === "stopped"){
            interval = window.setInterval(stopWatch, 1000);
            document.getElementById("clock-label").innerHTML = "Clock out";
            document.querySelector(".timer").setAttribute('style','opacity:1;');
            status = "started";
        }
        else{
            window.clearInterval(interval);
            document.getElementById("clock-label").innerHTML = "Clock in";
            document.querySelector(".timer").setAttribute('style','opacity:0;');
            status = "stopped";
        }
    }

    //Function to reset the stopwatch
    function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}