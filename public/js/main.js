// init modals 
$(document).ready(function() {
    $('.modal').modal();
    $('.timepicker').timepicker();
    $('.datepicker').datepicker();
    $('select').formSelect();
});

// Full Calendar Render
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridDay'
        },
        events: [{
                title: 'Example sAll Day Event',
                start: '2020-10-01'
            },
            {
                title: 'Example Long Event',
                start: '2020-10-07',
                end: '2020-10-10'
            },
            {
                groupId: '999',
                title: 'Example Repeating Event',
                start: '2020-10-09T16:00:00'
            },
        ]
    });

    calendar.render();
});


// Global variables
const calendar = $(".calendar");

// ===============================================
//              Populate calendar
// ===============================================

// There are eight columns (label + 7 days) and 24 rows.
for (let i = 0; i < 24; i++) {

    // Make the row
    let newRow = $("<div>");
    newRow.addClass(`calRow`);
    newRow.addClass(`s1`);

    // add columns
    for (let j = 0; j < 8; j++) {

        // Make the column
        let newBox = $("<div></div>");
        newBox.addClass(`calendar-box`);
        newBox.addClass(`data-row-${i}`);
        newBox.addClass(`data-col-${j}`);
        newBox.text(`row ${i} col ${j}`);

        // Append column to row
        newRow.append(newBox);
    }

    // Append row to calendar
    calendar.append(newRow);
}