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

        // Materialize outputs checkbox output as "on" and "off", so this code converts it to true/false
        let autoSch = ($("#auto-schedule").val() === "on");
        let recur = ($("#reoccuring").val() === "on");

        const newTask = {
            title: $('#task-title').val().trim(),
            description: $('#details').val().trim(),
            deadline: $('.enddate').val(),
            autoschedule: autoSch,
            reoccurring: recur,
            length: $('#length').val(),
            startDate: $('.starttime').val(),
            time: $('.starttime').val(),
            UserId: $("#add-task").attr("data-id")
        }

        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        });
    });

    // Click behavior for task list
    $(".task").click(event => {
        event.preventDefault();

        // Grab the id out of the selected element
        const taskId = event.target.dataset.taskid;

        // Materialize outputs checkbox output as "on" and "off", so this code converts it to true/false
        let autoSch = ($("#auto-schedule2").val() === "on");
        let recur = ($("#reoccuring2").val() === "on");

        let taskID = $("#update-task").attr("data-id");

        const updateTask = {
            title: $('#task-title2').val().trim(),
            description: $('#details2').val().trim(),
            deadline: $('.enddate2').val(),
            autoschedule: autoSch,
            reoccurring: recur,
            length: $('#length2').val(),
            startDate: $('.starttime2').val(),
            time: $('.starttime2').val(),
            UserId: taskID
        }

        $.ajax(`/api/tasks/${taskID}`, {
            type: "PUT",
            data: updateTask
        });


    });
});