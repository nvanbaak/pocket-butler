getTaskData();

function getTaskData() {
    $.ajax("/api/tasks/id", {
        type: "GET",
    }).then(taskData => {
        const fullCalObjArr = [];
        for (let i = 0; i < taskData.length; i++) {
            const task = taskData[i];
            let newStartDate = task.startDate.replace(/T.*$/g, "").trim();
            let newEndDate = task.endDate.replace(/T.*$/g, "").trim();
            const fullCalObj = {
                title: task.title,
                start: `${newStartDate}T${task.startTime}`,
                end: `${newEndDate}T${task.endTime}`,
                extendedProps: {
                    description: task.description
                }
            };

            fullCalObjArr.push(fullCalObj);
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


            //     alert('Event: ' + info.event.title);
            //     alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            //     alert('View: ' + info.event.extendedProps.description);

            //     // change the border color just for fun
            //     info.el.style.borderColor = 'red';
            // }


        });

        calendar.render();
    });

};