const mongoose=require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");
const projectSeed = [
     {
        index:"1",
        image:"actorAddict.png",
        name: "Actor Addict",
        description: "Our application allows users to search for a movie and see the plot, director, cast, ratings, poster, news on the movie and gifs related to the movie. My core responsibilities during the creation of the project were to use the OMDB API to access the film’s plot, director, cast, ratings and poster and output this data using JQuery into the HTML. I was also responsible for creating the readme for the repository.",
        tech: ["Server side APIs: OMDB, G News, GIPHY", "3rd Party APIs: JQuery, Moment.js, Google Fonts", "CSS Framework: Skeleton", "CSS3", "HTML5"],
        deployLink: "https://sophienicholas.github.io/Famous-Fact.github.io/",
        gitHubLink: "https://github.com/SophieNicholas/Famous-Fact.github.io"
    },
     {
        index:"2",
        image:"binOut.PNG",
        name: "Bin Out",
        description: "Bin-out is an application which allows users to submit a request for their bins to be taken out for collection when they are unable to. Once a request is sent, a local employee can choose to accept and fulfil the request. This application is useful for people who are unable to put their bins out, potentially due to being away from their property, having a physical condition or being elderly and unagile.",
        tech: ["Server side APIs: NEXMO", "3rd Party APIs: JQuery", "CSS Framework: Bootstrap", "Dependencies: MYSQL,Handlebars, Express and Sequelize", "CSS3", "HTML5"],
        deployLink: "https://bin-out.herokuapp.com/",
        gitHubLink: "https://github.com/benorule/bin-out"
    },
     {
        index:"3",
        image:"employeeTracker.PNG",
        name: "EmployeeTracker",
        description: "The Employee Tracker is a CLI application which prompts the user to Add, Update, Delete and View information on the employee_DB. The motivation behind the creation of this application is to streamline the employee management system by automating the process of creating, updating, deleting and viewing certain information stored on the database.",
        tech: ["Dependencies: Node JS, Inquirer, MYSQL, Console.Table", "JavaScript ES6"],
        deployLink: "https://drive.google.com/file/d/18rVK19D81w4IyP2Tv16urD5Z63FTAjYH/view",
        gitHubLink: "https://github.com/anjkrish2608/employee-tracker"
    },
    {
        index:"4",
        image:"employeeSummary.PNG",
        name: "Employee Summary",
        description: "The Readme Generator is a CLI application which prompts the user for information which is then outputted in the form of a team website. The motivation behind the creation of this application is to automate the process of creating a team website with profiles for each employee.",
        tech: ["Dependencies: Node JS, Inquirer, Fs Package", "JavaScript ES6","3rd Party APIs: Font Awesome, Google Fonts", "CSS3", "HTML5"],
        deployLink: "https://drive.google.com/file/d/1WO7gNZV8USGhKwzZ8ZH-sVZbRKCZoBk2/view",
        gitHubLink: "https://github.com/anjkrish2608/employeeSummary"
    },
     {
        index:"5",
        image:"eatBurgerz.PNG",
        name: "Eat BurgerZ",
        description: "The Eat BurgerZ application provides the user with an interface to create a listing of the burgers that they want to eat and have already demolished. The user can also delete the burger from either list or swap the burger between lists once it has been prepared or demolished.",
        tech: ["Dependencies: Node JS, MYSQL, Express, Express-handlebars","Heroku","3rd Party APIs: Font Awesome, Google Fonts", "JavaScript ES6","CSS3", "HTML5"],
        deployLink: "https://quiet-waters-62028.herokuapp.com/",
        gitHubLink: "https://github.com/anjkrish2608/eatBurger"
    },
     {
        index:"6",
        image:"readMeGenerator.png",
        name: "ReadMe Generator",
        description: "The Readme Generator is a CLI application which prompts the user for information which is then outputted in the form of a proffessional read me. The motivation behind the creation of this readme is to automate the process of creating a professional looking readme for a user's repository. ",
        tech: ["Dependencies: Node JS, Inquirer, Fs Package","JavaScript ES6"],
        deployLink: "https://github.com/anjkrish2608/readmeGenerator/blob/master/testing_README.md",
        gitHubLink: "https://github.com/anjkrish2608/readmeGenerator"
    }
];

db.Project.remove({})
.then(()=>db.Project.collection.insertMany(projectSeed))
.then(data=>{
    console.log(data.result.n+" records inserted");
    process.exit(0);
})
.catch(err=>{
    console.log(err);
    process.exit(1);
});