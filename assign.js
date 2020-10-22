fs = require("fs");

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

// function to generate dummy schedule
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

        // 
        schedule.push(day);
    }

    return schedule;
}



newWeek = new Week(wageSlave(), 1);

console.table(newWeek.getDays()[0]);