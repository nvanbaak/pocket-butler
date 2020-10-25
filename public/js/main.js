// init page 
$(document).ready(function() {

    // Materialize init 
    // ******************************
    // init Modals
    $('.modal').modal();

    // init timepicker
    $('.timepicker').timepicker();

    // For adding seconds (00)
    $('.timepicker').on('change', function() {
        let receivedVal = $(this).val();
        $(this).val(receivedVal + ":00");
    });

    // init datepicker
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
        }).then(newSignUpData => {});

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
        }).then(loginUserData => { location.replace("/dashboard") });
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
        }).then(updatedUseData => {});
    });

    // delete user script 
    $('#delete-user').click(event => {
        event.preventDefault();
        alert("Are you Sure?");
        let id = $('#delete-user').attr("data-id");

        $.ajax("/users/" + id, {
            type: "DELETE",
        }).then((deletedUserData) => { location.replace("/logout") });
    });

    // add task script
    $('#add-task').click(event => {
        event.preventDefault();
        // Convert checkboxes to true/false
        let is_reoccurring = ( $('#reoccurring').val() === "on");
        let is_autoSchedule = ( $('#auto-schedule').val() === "on");

        const newTask = {
            title: $('#task-title').val().trim(),
            description: $('#details').val().trim(),
            endDate: $('#duedatepicker').val(),
            endTime: $('#timeduepicker').val(),
            startDate: $('#datepicker').val(),
            startTime: $('#timepicker').val(),
            timeToComplete: $('#length').val(),
            is_autoSchedule: is_autoSchedule,
            is_reoccurring: is_reoccurring,
            UserId: $("#add-task").attr("data-id")
        }

        console.log(newTask)

        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        }).then(newTaskData => { location.reload(); });
    });

    $(".update-task").click(function(event) {
        event.preventDefault();
        let taskId = $(this).attr("data-id");

        // Convert checkboxes to true/false
        let is_reoccurring = ( $('#reoccurring').val() === "on" );
        let is_autoSchedule = ( $('#auto-schedule').val() === "on" );

        const updatedTaskObj = {
            title: $(`#title${taskId}`).val().trim(),
            description: $(`#details${taskId}`).val().trim(),
            endDate: $(`#duedatepicker${taskId}`).val(),
            endTime: $(`#timeduepicker${taskId}`).val(),
            startDate: $(`#datepicker${taskId}`).val(),
            startTime: $(`#timepicker${taskId}`).val(),
            timeToComplete: $(`#length${taskId}`).val(),
            is_autoSchedule: is_autoSchedule,
            is_reoccurring: is_reoccurring,

        }

        console.log(updatedTaskObj)

        $.ajax("/api/tasks/" + taskId, {
            type: "PUT",
            data: updatedTaskObj
        }).then(() => {
            location.reload();
        })
    })

    // delete task script
    $(".delete-task").click(function(event) {
        event.preventDefault()
            // Get the ID from the button.
        let taskId = $(this).attr("data-id");

        // Send the DELETE request.
        $.ajax("/api/tasks/" + taskId, {
            type: "DELETE"
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});