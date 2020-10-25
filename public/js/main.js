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
            startline: $('.starttime').val(),
            time: $('.starttime').val(),
            UserId: $("#add-task").attr("data-id")
        }

        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        }).then( () => {
            location.reload();
        });
    });

    // Script to open update modal
    $(".task").click(event => {
        event.preventDefault();
        
        // Grab the task id out of the selected element
        const taskId = event.target.dataset.taskid;
        
        // Add it to the update button
        $("#update-task").attr("data-taskid",taskId);
        
        // Get the data for the selected task
        $.ajax(`api/tasks/${taskId}`, {
            type: "GET"
        }).then(taskData => {
            console.log(taskData);

            // Set the modal fields using the task data
            $('#task-title2').val(taskData.title);
            $('#details2').val(taskData.description);
            $('.enddate2').val(taskData.deadline);
            $('#length2').val(taskData.timeToComplete);
            $('.startdate2').val(taskData.startline);

            // Set checkboxes
            if (taskData.autoSchedule) {
                $("#auto-schedule2").val("on");
            } else {
                $("#auto-schedule2").val("off");
            }
            if (taskData.reoccuring) {
                $("reoccuring2").val("on");
            } else {
                $("reoccuring2").val("off");
            }

            // Once the data's set, open the update modal
            $("#modal3").modal('open');
        })

        
    });


    // Update task
    $("#update-task").click(event=> {
        event.preventDefault();

        // Get id for task
        let taskID = $("#update-task").attr("data-taskid");
        
        // Materialize outputs checkbox output as "on" and "off", so this code converts it to true/false
        let autoSch = ($("#auto-schedule2").val() === "on");
        let recur = ($("#reoccuring2").val() === "on");

        
        const updateTask = {
            title: $('#task-title2').val().trim(),
            description: $('#details2').val().trim(),
            deadline: $('.enddate2').val(),
            autoschedule: autoSch,
            reoccurring: recur,
            length: $('#length2').val(),
            startline: $('.startdate2').val(),
            time: $('.starttime2').val(),
            id:taskID
        }
        
        console.log(updateTask);
        
        $.ajax(`/api/tasks/`, {
            type: "PUT",
            data: updateTask
        }).then( () => {
            location.reload();
        });;
    })

});