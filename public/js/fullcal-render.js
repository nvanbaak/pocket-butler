getTaskData();

function getTaskData() {
    $.ajax("/api/tasks/user/id", {
        type: "GET",
    }).then(taskData => {
        const fullCalObjArr = [];
        for (let i = 0; i < taskData.length; i++) {
            const task = taskData[i];
            const newStartDate = task.startDate.replace(/T.*$/g, "").trim();
            const newEndDate = task.endDate.replace(/T.*$/g, "").trim();
            if (task.startTime === "00:00:00") {
                let fullCalObj = {
                    title: task.title,
                    start: newStartDate,
                    end: newStartDate,
                    extendedProps: {
                        description: task.description
                    }
                };
                fullCalObjArr.push(fullCalObj);

            } else {
                let fullCalObj = {
                    title: task.title,
                    start: `${newStartDate}T${task.startTime}`,
                    end: `${newStartDate}T${task.startTime + task.length}`,
                    extendedProps: {
                        description: task.description
                    }
                };
                fullCalObjArr.push(fullCalObj);

            }

        };

        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridDay'
            },
            events: fullCalObjArr,


            // eventClick: function(info) {
            //     console.log($(this.Calendar))
            //     $(this.Calendar).addClass("modal-trigger")
            //     console.log($(this))
            //         // $(this).attr("href", "#modalA");

            //     // alert('Event: ' + info.event.title);
            //     // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            //     // alert('View: ' + info.event.extendedProps.description);

            //     // change the border color just for fun
            //     info.el.style.borderColor = 'red';
            // }


        });

        calendar.render();
    });

};