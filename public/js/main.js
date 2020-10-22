

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

    $('#update-user').click(event => {
        event.preventDefault();
        const updatedUser = {
            username: $('#user-name1').val().trim(),
            password: $('#user-password1').val().trim(),
            email: $('#email1').val().trim(),
            phone: $('#phone-number1').val().trim()
        }
        console.log(updatedUser);

        $.ajax("/api/users/:id",{
            type: "PUT",
            data: updatedUser,
        }).then(function(data){
            console.log(data)
        })

    })

    $('#delete-user').click(event => {
        event.preventDefault();
        $.ajax("/api/users",{
            type: "DELETE",
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
