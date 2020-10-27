var moment = require('moment'); // require
moment().format(); 




// ENTRY POINT: USER ADDS OR UPDATES A TASK

// Ajax for all user tasks

// Get all categories for the week

// Order user tasks by deadline

// Assign tasks to week slots

// update start times of tasks

// ===============================================
//          AUTOSCHEDULER FUNCTIONALITY
// ===============================================

// Given a week object (seven arrays of 24 hours), an object
// The returned object has two child arrays, "personal" and "work", which contain day,hour references to a week
// today is the day of the week, and thisHour is the current hour.  We won't get references past those points
function findAvailableTimes(weekObj, today, thisHour) {

    // set up output object
    // This list will contain paired values representing week and hour indices
    const outputObj = {
        work: [],
        personal: []
    };

    // iterate through days, starting with today
    for (let day = today; day < weekObj.length; day++) {

        // Start at hour 0
        let startHour = 0;
        
        // If this is the first day we're considering, we start with the next available hour instead
        if (day === today) {
            startHour += thisHour + 1;
        }

        // iterate through hours
        for (let hour = startHour; hour < weekObj[day].length; hour ++) {

            // If the hour stores "work", store the ref
            if (weekObj[day][hour] === "work") {
                outputArr.work.push([day,hour]);
            }

            // If the hour stores "personal", store the ref
            if (weekObj[day][hour] === "personal") {
                outputArr.personal.push([day,hour]);
            }
        }
    }

    return outputObj;
}

// This function takes a moment object and returns 0-6 based on what day of the week it is
function findWeekIndex(momentObj) {

    const dayStr = momentObj.format("dddd");

    switch (dayStr) {

        case "Sunday":
            return 0;
        
        case "Monday":
            return 1;

        case "Tuesday":
            return 2;
        
        case "Wednesday":
            return 3;
        
        case "Thursday":
            return 4;

        case "Friday":
            return 5;

        case "Saturday":
            return 6;

        default:
            return -1;
    }
}


// This function returns a moment object pointing to the most recent Sunday
function mostRecentSunday() {
    // define now
    let now = moment();

    // Is today Sunday?
    if (now.format("dddd") === "Sunday") {
        
        // If so, return
        return now;

    // Otherwise start rolling back
    } else {
        // Start with yesterday
        let daysAgo = 1;
        while (true) {
            // Was yesterday Sunday?
            if (now.subtract(daysAgo, "days").format("dddd") === "Sunday") {
                // Yes?  Great, send it back
                return now;
            } else {
                // No?  Check the previous day
                daysAgo++;
            }
        }
    }
}




function autoschedule(userId) {

}



