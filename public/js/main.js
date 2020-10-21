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



// moment.js
const currentDate = moment().format('MMMM Do YYYY');
const currentTime = moment().format('LT');
$('#date').text(currentDate);
$('#current-time').text(currentTime);