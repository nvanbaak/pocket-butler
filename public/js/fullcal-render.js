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

        });

        calendar.render();
    });

};