// init page 
$(document).ready(function() {

    // Materialize init 
    // ******************************
    $('.modal').modal();
    $('.timepicker').timepicker();
    $('.datepicker').datepicker();
    $('select').formSelect();
    // ******************************



    // Sign up script 
    $('#sign-up').click(event => {
        event.preventDefault();

    })



    // add task script
    $('#add-task').click(event => {
        event.preventDefault();
        // Values retrieved from page: 

        const newTask = {
            title: $('#task-title').val().trim(),
            details: $('#details').val().trim(),
            length: $('#length').val(),
            startDate: $('.datepicker').val(),
            time: $('.timepicker').val()
        }

        console.log(newTask);

    })



});