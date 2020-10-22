const { get } = require("http");

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

