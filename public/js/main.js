// init page 
$(document).ready(function () {

    // Materialize init 
    // ******************************
    // init Modals
    $('.modal').modal();

    // init timepicker
    $('.timepicker').timepicker();

    // For adding seconds (00)
    $('.timepicker').on('change', function () {
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
        const username = $('#user-name').val().trim();
        const password = $('#user-password').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone-number').val().trim();

        const validEmail = email.includes("@");
        const validPhone = parseInt(phone);

        if (!username || !password || !email) {
            // TODO:
            alert("Need to fill in")
        }
        else if (!validEmail) {
            // TODO:
            alert("Not valid email")
        }
        else if (phone.length === 0) {
            const newSignUp = {
                username: username,
                password: password,
                email: email,
                phone: phone
            };

            $.ajax("/signup", {
                type: "POST",
                data: newSignUp,
            }).then(newSignUpData => { });
        }
        else if (phone.length > 0) {
            if (phone.length != 10 || validPhone === NaN) {
                alert("not valid phone");
            }
            else {
                const newSignUp = {
                    username: username,
                    password: password,
                    email: email,
                    phone: phone
                };

                $.ajax("/signup", {
                    type: "POST",
                    data: newSignUp,
                }).then(newSignUpData => {

                    // Create a default schedule for User once they sign up
                    const signupsched = [];
                    makeWeekendSchedule(signupsched);
                    makeWeekdaySchedule(signupsched);
                    makeWeekendSchedule(signupsched);

                    $.ajax("/api/weeks", {
                        type: "POST",
                        data: {
                            days: JSON.stringify(signupsched),
                            UserId: newSignUpData.id
                        }
                    })
                });
            }
        }
    });

    // login script 
    $('#login').click(event => {
        event.preventDefault();

        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

        if (!username || !password) {
            // TODO:
            alert("Please enter both a username and password")
        }
        else {
            const loginUser = {
                username: username,
                password: password,
            };
            $.ajax("/login", {
                type: "POST",
                data: loginUser,
            }).then(loginUserData => {
                location.replace("/dashboard");
            });
        }
    });

    // Update User
    $('#update-user').click(event => {
        event.preventDefault();
        let id = $('#update-user').attr("data-id")

        const username = $('#user-name1').val().trim();
        const password = $('#user-password1').val().trim();
        const email = $('#email1').val().trim();
        const phone = $('#phone-number1').val().trim();
        const validEmail = email.includes("@");
        const validPhone = parseInt(phone);

        if (!username || !email) {
            // TODO:
            alert("Need to fill in. Did not update")
            location.reload();
        }
        else if (!validEmail) {
            // TODO:
            alert("Not valid email. Did not update")
            location.reload();
        }
        else if (phone.length === 0) {
            const updatedUser = {
                username: username,
                password: password,
                email: email,
                phone: phone
            };

            $.ajax("/users/" + id, {
                type: "PUT",
                data: updatedUser,
            }).then(updatedUseData => { location.reload() });
        }
        else if (phone.length > 0) {
            if (phone.length != 10 || validPhone === NaN) {
                alert("not valid phone. Did not update");
                location.reload();
            }
            else {
                const updatedUser = {
                    username: username,
                    password: password,
                    email: email,
                    phone: phone
                };

                $.ajax("/users/" + id, {
                    type: "PUT",
                    data: updatedUser,
                }).then(updatedUseData => { location.reload() });
            }
        }
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
        let is_reoccurring = ($('#reoccurring').val() === "on");
        let is_autoSchedule = ($('#auto-schedule').val() === "on");

        const title = $('#task-title').val().trim();
        const startDate = $('#datepicker').val();
        const endDate = $('#duedatepicker').val();
        const startTime = $('#timepicker').val();
        const endTime = $('#timeduepicker').val();

        if (!title) {
            alert("Need to give your task a title");
        }
        else if (!startDate || !startTime) {
            alert("Need to specify when the task starts")
        }
        else if (startDate > endDate) {
            alert("Your start date cannot be later than end date");
        }
        else if (startDate === endDate && startTime > endTime) {
            alert("Start time must be before end time");
        }
        else {
            const newTask = {
                title: title,
                description: $('#details').val().trim(),
                endDate: endDate,
                endTime: endTime,
                startDate: startDate,
                startTime: startTime,
                timeToComplete: $('#length').val(),
                is_autoSchedule: is_autoSchedule,
                is_reoccurring: is_reoccurring,
                UserId: $("#add-task").attr("data-id"),
                userName: $("#add-task").attr("data-name"),
                userEmail: $("#add-task").attr("data-email")
            }

            $.ajax("/api/tasks", {
                type: "POST",
                data: newTask
            }).then(newTaskData => { location.reload(); });
        }
    });

    $(".update-task").click(function (event) {
        event.preventDefault();
        let taskId = $(this).attr("data-id");

        // Convert checkboxes to true/false
        let is_reoccurring = ($('#reoccurring').val() === "on");
        let is_autoSchedule = ($('#auto-schedule').val() === "on");

        const title = $('#task-title').val().trim();
        const startDate = $('#datepicker').val();
        const endDate = $('#duedatepicker').val();
        const startTime = $('#timepicker').val();
        const endTime = $('#timeduepicker').val();

        if (!title) {
            alert("Need to give your task a title");
        }
        else if (!startDate || !startTime) {
            alert("Need to specify when the task starts")
        }
        else if (startDate > endDate) {
            alert("Your start date cannot be later than end date");
        }
        else if (startDate === endDate && startTime > endTime) {
            alert("Start time must be before end time");
        }

        const updatedTaskObj = {
            title: title,
            description: $('#details').val().trim(),
            endDate: endDate,
            endTime: endTime,
            startDate: startDate,
            startTime: startTime,
            timeToComplete: $('#length').val(),
            is_autoSchedule: is_autoSchedule,
            is_reoccurring: is_reoccurring,
        }

        $.ajax("/api/tasks/" + taskId, {
            type: "PUT",
            data: updatedTaskObj
        }).then(() => {
            location.reload();
        })
    })

    // delete task script
    $(".delete-task").click(function (event) {
        event.preventDefault()
        // Get the ID from the button.
        let taskId = $(this).attr("data-id");

        // Send the DELETE request.
        $.ajax("/api/tasks/" + taskId, {
            type: "DELETE"
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Schedule population
    $("#open-schedule").click(event => {

        let weekId = $("#open-schedule").attr("data-id");

        $.ajax(`/api/weeks/${weekId}`, {
            type: "GET"
        }).then(weekRaw => {

            let week = JSON.parse(weekRaw.days);
            console.log(week);

            // Set up calendar on weekly schedule
            const weekcolumns = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"];

            // Create time labels

            // Start with a column
            const timeCol = $("<div>");

            // add it to the calendar block
            $(".week-cal").append(timeCol);

            // Add header cell
            const headerCell = $("<div>");
            headerCell.text("time");
            timeCol.append(headerCell);
            timeCol.append($("<br>"));



            // Add 24 cells
            for (let i = 0; i < 24; i++) {

                // Make cell
                const newCell = $("<div>");

                // Create hour
                let label;

                if (i === 0) {
                    label = 12;
                } else if (i > 12) {
                    label = i - 12;
                } else {
                    label = i;
                }

                // THIS CODE SUPPORTS HALF-HOUR TIME BLOCKS
                // We're not using that right now but I'm leaving it in for future development

                // if (i === 0 || i === 24 ) {
                //     label = '12';
                // } else if (i === 1 || 1 === 25) {
                //     label = '12.5';
                // } else if (i > 25 ) {
                //     label = `${(i - 24)/2}`;
                // } else {
                //     label = `${i/2}`;
                // }

                // // translate number to time
                // // first check if there's a decimal
                // if (label[label.length-2] === ".") {
                //     // These are our half-hour times
                //     label = label.replace(".5", ":30");;
                // } else {
                //     // the rest just get some zeroes
                //     label+=":00";
                // }

                // Add am/pm designation
                if (i < 12) {
                    label += " am";
                } else {
                    label += " pm";
                }

                // Set text
                newCell.text(label);

                // append to column
                timeCol.append(newCell);
            }

            // for each day of the week,
            for (let sched = 0; sched < 7; sched++) {

                // make a column
                const thisCol = $("<div>")
                .addClass(`${weekcolumns[sched]} col center-align`);

                // add it to the calendar block
                $(".week-cal").append(thisCol);
        
                // Add header cell
                const headerCell = $("<div>");
                headerCell.text(weekcolumns[sched]);
                thisCol.append(headerCell);
                thisCol.append($("<br>"));
    
                // Add 24 cells
                for (let i = 0; i < 24; i++) {
    
                    // Make cell
                    const newCell = $("<div>");
    
                    // Give it a unique identifier
                    newCell.data("ref", `${weekcolumns[sched]}${i}`);
    
                    // Set text equal to schedule of that day
                    newCell.text(week[sched][i]);
    
                    // Identify it as a cell for styling
                    newCell.addClass("week-cell");
    
                    // Append to col
                    thisCol.append(newCell);
                }
            }
        
            // Add list of categories
            const timeCategories = ["sleep", "work", "meal", "personal", "chores", "~"];
        
            // For each category of time...
            timeCategories.forEach(thisCat => {
        
                // make a new div
                const newCat = $("<div>");
                newCat.data("category", thisCat);
                newCat.text(thisCat);
        
                // The first statement is selected, the rest are not
                if (thisCat === "sleep") {
                    newCat.addClass(`sched-cat sched-cat-sel`);
                } else {
                    newCat.addClass(`sched-cat sched-cat-unsel`);
                }
        
                // Append to list
                $(".category-list").append(newCat);
        
            });
        
            // Script to set time as active
            $(".category-list").click(event => {
        
                const selected = event.target;
        
                // first remove selected class from everything
                if (selected.className.includes("sched-cat")) {
        
                    // get everything on the list
                    const divList = $(".category-list").children();
        
                    // Set to unselected
                    for (let divEl = 0; divEl < divList.length; divEl++) {
                        divList[divEl].classList.remove("sched-cat-sel");
                        divList[divEl].classList.add("sched-cat-unsel");
                    }
        
                    // Remove unsel from selected div and add sel
                    selected.classList.remove("sched-cat-unsel");
                    selected.classList.add("sched-cat-sel");
                }
            })
        
            // Once calendar is populated, add calendar behavior
            $(".week-cal").click(event => {
                event.preventDefault();
        
                // Get selected element
                const timeEl = event.target
        
                // Once they click on a week cell
                if (timeEl.className === "week-cell") {
        
                    // Get the selected time category
                    const active = $(".category-list .sched-cat-sel").text();
        
                    // Replace the text in the cell
                    timeEl.innerText = active;
                }
            })

        })


    })

    // schedule creation functions
    function makeWeekendSchedule(schedArray) {
        let day = [];
        for (let weekend = 0; weekend < 24; weekend++) {
            if (weekend < 10) {
                day.push("sleep");
            } else if (weekend < 12) {
                day.push("chores");
            } else if (weekend === 12 || weekend === 18) {
                day.push("meal");
            } else if (weekend < 22) {
                day.push("personal");
            } else {
                day.push("sleep");
            }
        }
        schedArray.push(day);
    }
    function makeWeekdaySchedule(schedArray) {

        // We make five weekdays
        for (let weekDay = 0; weekDay < 5; weekDay++) {
            // Create the day
            let day = [];
            for (let time = 0; time < 24; time++) {
                if (time < 8) {
                    day.push("sleep");
                } else if (time === 9) {
                    day.push("~");
                } else if (time < 12) {
                    day.push("work");
                } else if (time === 12 || time === 18) {
                    day.push("meal");
                } else if (time < 18) {
                    day.push("work");
                } else if (time < 22) {
                    day.push("personal");
                } else {
                    day.push("sleep");
                }
            }
            schedArray.push(day);
        }


    }
});
