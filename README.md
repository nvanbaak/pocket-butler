# Pocket Butler

## Web Based Task Management App 

![Contents](https://img.shields.io/github/languages/top/nvanbaak/pocket-butler)
![Last-Commit](https://img.shields.io/github/last-commit/nvanbaak/pocket-butler)
![License](https://img.shields.io/github/license/nvanbaak/pocket-butler)
​
### Table of contents
- [Title](#title)
- [General info](#general-info)
- [Technologies](#Technologies)
- [Deployment](#Deployment)
- [Installation](#installation)
- [Screen Shots](#Screen-shots)
- [Code Snippets](#Code-snippets)
- [Summary](#Summary)
- [CSS style](#CSS-style)
- [Contributing](#contributing)
- [Questions](#questions)
- [Authors](#Authors)


### General info
​Pocket Butler is a Task scheduler app to make your life easier, How often do you have something to do but not sure when you'll have time to do it. Pocket Butler is here to help, Just select the Auto Schedule option and Pocket Butler will find the time in your schedule to add it and then notify you when you should do it! 

--
Current Build 1.0 : USER CRUD Functionality + TASK CRUD Functionality along with Calendar view are 100% operational. 
--

Web Link: <https://pocketbutler.herokuapp.com/>
​

### Technologies
Project is created with:
​
- [Materialize CSS](https://materializecss.com/)
- [Jquery](https://jquery.com/)
- [Node JS](https://nodejs.org/en/)
- [Express JS](https://expressjs.com/)
- [Express-Session](https://www.npmjs.com/package/express-session)
- [FullCalendar](https://fullcalendar.io/#demos)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL](https://www.mysql.com/)
- [Sequelize](http://sequelize.org/)
- [HandleBars JS](https://handlebarsjs.com/)
- [JavaScript](https://www.javascript.com/)

### Deployment
If running locally on your machine, make sure you have Node.js installed on your machine. As well as Mysql installed and copy the schema file in the root folder to build your database. In the root folder while in your terminal run `npm start` the application should be available on your browser at localhost:8080. 

If running from browser just go to the link 
<https://pocketbutler.herokuapp.com/>



### Screen shots
Login Page
<img width="1322" alt="Screen Shot 2020-10-26 at 11 28 00 AM" src="https://user-images.githubusercontent.com/68626350/97327147-e9359880-1831-11eb-8070-c16345d0ff66.png">

Dashboard Page 
<img width="1337" alt="Screen Shot 2020-10-26 at 11 30 58 AM" src="https://user-images.githubusercontent.com/68626350/97327200-fce0ff00-1831-11eb-8806-f19951f716f7.png">

Day View for Calendar
<img width="1363" alt="Screen Shot 2020-10-26 at 11 35 57 AM" src="https://user-images.githubusercontent.com/68626350/97327250-0cf8de80-1832-11eb-9cbe-922bb253b7bf.png">

New Task Modal
<img width="1132" alt="Screen Shot 2020-10-26 at 11 36 03 AM" src="https://user-images.githubusercontent.com/68626350/97327342-1c782780-1832-11eb-8306-66382e0e60de.png">




### Code snippets
​API call to retrieve info for the calendar to render
~~~
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
~~~



### Summary
- Pocket Butler is an easy and inviting planner app.
​
### CSS style
- CSS styling was built with Materialize CSS 

## Contributing 


1. Clone repo and create a new branch: 
~~~
$ git checkout -b name_for_new_branch.
~~~
2. Make changes and commit: 
~~~
$ git add . 
$ git commit -m "made changes"
~~~
3. Push to the branch:
~~~
$ git push
~~~
4. Submit Pull Request with comprehensive description of changes


## Questions 

If you have any questions please create an issue. 

​
​
### Authors
- [Nikolai Van Baak](https://github.com/nvanbaak)
- [Devon DeVaughn](https://github.com/DevonDeVaughnn)
- [Maxwell Hanson](https://github.com/MaxHanson07)
- [Ahmad Al-Karzoun](https://github.com/karzoun)
- [Dan Gentile](https://github.com/dan-gentile)
​
## License 

This license is [MIT](https://github.com/nvanbaak/pocket-butler/blob/main/LICENSE)


​
​
​
