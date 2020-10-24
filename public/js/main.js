// init page 
$(document).ready(function() {

    // Materialize init 
    // ******************************
    $('.modal').modal();
    $('.timepicker').timepicker();
    // For adding seconds (00)
    $('.timepicker').on('change', function() {
        let receivedVal = $(this).val();
        $(this).val(receivedVal + ":00");
    });

    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd'
    });
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
        };

        $.ajax("/signup", {
            type: "POST",
            data: newSignUp,
        }).then(data => {});

    });

    // login script 
    $('#login').click(event => {
        event.preventDefault();
        const loginUser = {
            username: $('#username').val().trim(),
            password: $('#password').val().trim(),
        };
        $.ajax("/login", {
            type: "POST",
            data: loginUser,
        }).then(data => { location.replace("/dashboard") });
    });

    // Update User
    $('#update-user').click(event => {
        event.preventDefault();
        let id = $('#update-user').attr("data-id")

        const updatedUser = {
            username: $('#user-name1').val().trim(),
            password: $('#user-password1').val().trim(),
            email: $('#email1').val().trim(),
            phone: $('#phone-number1').val().trim()
        };

        $.ajax("/users/" + id, {
            type: "PUT",
            data: updatedUser,
        }).then(data => {});
    });

    // delete user script 
    $('#delete-user').click(event => {
        event.preventDefault();
        alert("Are you Sure?");
        let id = $('#delete-user').attr("data-id");

        $.ajax("/users/" + id, {
            type: "DELETE",
        }).then((data) => { location.replace("/logout") });
    });

    // add task script
    $('#add-task').click(event => {
        event.preventDefault();
        // // Values retrieved from page: 
        let recur = $('#reoccurring').val();
        let autoSch = $('#auto-schedule').val();
        // // changing default values to true/false
        if (recur === 'on') recur = true;
        recur = false;
        if (autoSch === 'on') autoSch = true;
        autoSch = false;

        const newTask = {
            title: $('#task-title').val().trim(),
            description: $('#details').val().trim(),
            endDate: $('.duedatepicker').val(),
            endTime: $('.timeduepicker').val(),
            startDate: $('.datepicker').val(),
            startTime: $('.timepicker').val(),
            timeToComplete: $('#length').val(),
            autoschedule: autoSch,
            reoccurring: recur,
            UserId: $("#add-task").attr("data-id")
        }

        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        }).then(data => { location.reload(); });
    });

    $(".task").click(event => {
        event.preventDefault();

    })





});