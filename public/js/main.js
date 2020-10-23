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

        // Materialize outputs checkbox output as "on" and "off", so this code converts it to true/false
        let autoSch = ($("#auto-schedule").val() === "on");
        let recur = ($("#reoccuring").val() === "on");

        const newTask = {
            title: $('#task-title').val().trim(),
            description: $('#details').val().trim(),
            deadline: $('.duedatepicker').val(),
            autoschedule: autoSch,
            // reoccuring: recur,
            length: $('#length').val(),
            startDate: $('.datepicker').val(),
            time: $('.timepicker').val(),
            UserId: 0
        }

        $.ajax("/api/tasks",{
            type: "POST",
            data: newTask
        });

    })



});
