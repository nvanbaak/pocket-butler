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
    let dateString = `${dayString(now.getDay())} ${monthString(now.getMonth())} ${now.getDate()}, ${now.getFullYear()}`;

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

    // Define clock string and update display
    let clockString = `${hours}:${minutes}:${seconds}`;
    clockDisplay.text(clockString);
}

// This function puts a 0 in front of one-digit numbers for clock purposes
function retainTwoDigits(num) {

    // Define our output
    let outputString = "";

    // If the number is one digit, add a 0
    if (num < 10) {
        outputString += "0";
    }

    // Ship it back
    outputString += num;
    return outputString
}

// this function takes a month code and outputs a string
function monthString(monthInt) {

    switch (monthInt) {
        case 0:
            return "January";
            break;

        case 1:
            return "February";
            break;

        case 2:
            return "March";
            break;

        case 3:
            return "April";
            break;

        case 4:
            return "May";
            break;

        case 5:
            return "June";
            break;

        case 6:
            return "July";
            break;

        case 7:
            return "August";
            break;

        case 8:
            return "September";
            break;

        case 9:
            return "October";
            break;

        case 10:
            return "November";
            break;

        case 11:
            return "December";
            break;

        default:
            return "This isn't a real month!";
            break;
    }
}

// This function takes the number output from getDay and replaces it with a string
function dayString(dayInt) {
    switch (dayInt) {
        case 0:
            return "Sun";
            break;
        case 1:
            return "Mon";
            break;
        case 2:
            return "Tues";
            break;
        case 3:
            return "Wed";
            break;
        case 4:
            return "Thurs";
            break;
        case 5:
            return "Fri";
            break;
        case 6:
            return "Sat";
            break;
        default:
            return "Not a day, how did this happen?"
            break;
    }
}