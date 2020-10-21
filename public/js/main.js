// init modals 
$(document).ready(function() {
    $('.modal').modal();
});

// init date-picker
$(document).ready(function() {
    $('.datepicker').datepicker();
});

// init select options
$(document).ready(function() {
    $('select').formSelect();
});

//Time Picker:
$('.timepicker').pickatime({
    default: 'now',
    twelvehour: false, // change to 12 hour AM/PM clock from 24 hour
    donetext: 'OK',
    autoclose: false,
    vibrate: true // vibrate the device when dragging clock hand
});