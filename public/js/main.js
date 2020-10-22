

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
        const newSignUp = {
            username: $('#user-name').val().trim(),
            password: $('#user-password').val().trim(),
            email: $('#email').val().trim(),
            phone: $('#phone-number').val().trim()
        }
        console.log(newSignUp);

        $.ajax("/api/users",{
            type: "POST",
            data: newSignUp,
        }).then(function(data){
            console.log(data)
        })

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
