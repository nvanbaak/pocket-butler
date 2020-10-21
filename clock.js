// get reference to output
const clockDisplay = $(".clock-time");
const dateDisplay = $(".date-disp");

// Update display
updateTime();

// Start the clock running
setInterval(function() {

    updateTime();

}, 1000);

// This function grabs the current time and changes the output accordingly
function updateTime() {

    // Get current time
    let now = new Date();

    // Parse time into "Day #, Year" format
    let dateString = `${dayString(now.getDay())} ${now.getDate()}, ${now.getFullYear()}`;

    // update date display with parsed text
    dateDisplay.text(dateString);

    // translate hours from 24-hour to 12-hour time
    let hours = now.getHours();
    if (hours > 12) {
        hours -= 12;
    }

    // makes sure minutes and seconds stay two digits long
    let minutes = retainTwoDigits(now.getMinutes());
    let seconds = retainTwoDigits(now.getSeconds());

    let clockString = `${hours}:${minutes}:${seconds}`;

    clockDisplay.text(clockString);
}

// This function puts a 0 in front of one-digit numbers for clock purposes
function retainTwoDigits(num) {

    let outputString = "";

    if (num < 10) {
        outputString += "0";
    }

    outputString += num;
    return outputString
}

// This function takes the number output from getDay and replaces it with a string
function dayString(dayInt) {
    switch (dayInt) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            return "Not a day, how did this happen?"
            break;
    }
}

