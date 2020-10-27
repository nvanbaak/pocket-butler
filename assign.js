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

    // iterate through days
    for (let day = 0; day < weekObj.length; day++) {

        // iterate through hours
        for (let hour = 0; hour < weekObj[day].length; hour ++) {

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



