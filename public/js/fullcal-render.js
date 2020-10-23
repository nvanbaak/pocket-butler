getData()

function getData() {
    $.ajax("/api/tasks/id", {
        type: "GET",
    }).then(data => {
        let fullCallObjArr = [];
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const fullCallObj = {
                title: element.title,
                start: element.startDate,
                end: element.endDate,
                extendedProps: {
                    description: element.description
                }
            }

            fullCallObjArr.push(fullCallObj);
        }


        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridDay'
            },
            events: fullCallObjArr,

            eventClick: function(info) {
                $('#modalTitle').html(info.event.title);
                $('#modalBody').html(info.event.extendedProps.description);
                $('#fullCalModal').modal();
            },
            // eventClick: function(info) {

            //     $("<div>").dialog({ modal: true, title: info.event.title, width: 350 });
            //     alert('Event: ' + info.event.title);
            //     alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            //     alert('View: ' + info.event.extendedProps.description);

            //     // change the border color just for fun
            //     info.el.style.borderColor = 'red';
            // }


        });

        calendar.render();
    });

}