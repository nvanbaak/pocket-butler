const newTask = {
    timeToComplete: 1,
    completeBy: new Date()
}
​
function fitsIntoRange(start, end) {
    let fits = true
    for (i = start; i < end; i++) {
        if (timeblocks[i] !== null) {
            fits = false
            break;
        }
    }
​
    return fits
}
​
function findNextAvailableStart(rangeEnd) {
    let nextStart = null
​
    for (i = rangeEnd; i < timeblocks.length; i++) {
        if (timeBlocks[i] === null) {
            nextStart = i
            break;
        }
    }
​
    return nextStart
}
​
const daySchedule = {
    id: "123",
    date: new Date(),
    timeblocks: [
        null,
        "a",
        "a",
        "a",
        null,
        "c",
        "c",
        "c"
    ]
}
​
function findFit(newTask) {
​
​
​
    let currentStart = findNextAvailableStart(0);
    while (currentStart !== null) {
​
        let potentialEnd = nextStart + (newTask.timeToComplete - 1)
​
        if (fitsIntoRange(currentStart, potentialEnd)) {
            return {
                id: daySchedule.id,
                start: currentStart,
                end: potentialEnd
            }
        }
​
        currentStart = findNextAvailableStart(potentialEnd)
    }
