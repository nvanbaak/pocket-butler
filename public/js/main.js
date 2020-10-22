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

$('#signup').on('click', function(event){
    event.preventDefault()

    var username = $('#username').val().trim()
    var email = $('#email').val().trim()
    var password = $('#password').val().trim()
    var phoneNumber = $('#phone-number').val().trim()
    console.log(username,email,password,phoneNumber)

})