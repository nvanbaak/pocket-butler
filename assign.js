moment = require("moment.js")


// ENTRY POINT: USER ADDS OR UPDATES A TASK

// Ajax for all user tasks

// Get all categories for the week

// Order user tasks by deadline

// Assign tasks to week slots

// update start times of tasks



























// Global variables
let today = 0; // we're using an integer in the place of a date, but theoretically we could make this work with calendar math

// Classes
class Week {
    constructor(dayArr, startDate) {
        this.days = dayArr;
        this.startDate = startDate;
    }

    setDays(newArr) {
        this.days = newArr;
    }

    getDays() {
        return this.days;
    }

    getDate() {
        return this.startDate;
    }
}

// the User class has a list of tasks, a week template, and a schedule
class User {
    constructor(weekTemplate) {
        this.tasks = [];
        this.template = weekTemplate;
        this.schedule = [];
    }

    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTemplate() {
        return this.template;
    }

    setTemplate(weekObj) {
        this.template = weekObj;
    }

    getSchedule() {
        return this.schedule;
    }

    addToSchedule(weekObj) {
        this.schedule.push(weekObj);
    }
}

// Builds and returns a task object
// name:       name of task
// category:   used for assigning task start times
// time:       task start time
// deadline:   date integer at which the task must be completed
function newTask(name, category, time, deadline) {
    return {
        "name":name,
        "category":category,
        "time":time,
        "deadline":deadline
    }
}

// generates and returns a dummy schedule
function wageSlave() {

    let schedule = [];

    // For each of seven days...
    for (let i = 0; i < 7; i++) {

        let day = [];

        // We start the day sleeping
        let category = "sleep"

        // generate 24 hours in blocks
        for (let j = 0; j < 24; j++) {

            // Update category
            if (j > 21) category = "sleep";
            else if (j > 19) category = "hobby";
            else if (j > 18) category = "dinner";
            else if (j > 17) category = "";
            else if (j > 12) category = "work";
            else if (j > 11) category = "lunch";
            else if (j > 7) category = "work";
            else if (j > 6) category = "";

            // Push to the day
            day.push(category);
        }

        // Put the day in the schedule
        schedule.push(day);
    }

    return schedule;
}

// returns a list of arrays containing references to each block by category
function getAllCategoryTimes(weekObj) {

    // set up output list
    // This list will contain objects with a "name" property and a "reference" property
    // "reference" will be a list of indices that will point to blocks in the original week
    let catList = [];

    // Run through the week object by days
    for (let day = 0; day < weekObj.length; day++) {

        // For each day, run through the hours
        for (let hour = 0; hour < weekObj[day].length; hour++) {

            // Locate the index for that category in the list, if any
            // Start with an index at -1
            let catIndex = -1;

            // Run through the list of categories
            for (let i = 0; i < catList.length; i++) {

                // This statement requires some explanation:
                // For each object in the category list, we get the name of that category
                // Then we check it against the string in the week object, which should also be a category string
                if (catList[i].name === weekObj[day][hour]) {

                    // If they're the same, reset the index
                    catIndex = i; 
                    
                    // then push and break the loop
                    catList[i].reference.push([day, hour]);
                    break;
                }
            }

            // if the category we want isn't in the list...
            if (catIndex === -1) {

                // push a new category object to the list
                catList.push({
                    "name":weekObj[day][hour],
                    "reference":[[day,hour]] // We gotta format it this way or it'll put the values in separately
                });
            }
        }
    }

    // Having walked through the whole week, return the list
    return catList;
}

newWeek = new Week(wageSlave(), 1);

console.table(newWeek.getDays()[0]);

let timeBlocks = getAllCategoryTimes(newWeek.getDays())

console.table(timeBlocks);
