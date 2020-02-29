require('dotenv').config()
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI);

const projectSeed = [
    {
        title: "Train Scheduler",
        image: "https://live.staticflickr.com/65535/49479361788_df124e0c43_h.jpg",
        description: "Easy to use app to keep track of train schedules using Moment.js",
        githubLink: "https://github.com/dagallagher221/Train-scheduler"
    },
    {
        title: "Trivia Game",
        image: "https://live.staticflickr.com/65535/49479805026_ed04272b11_h.jpg",
        description: "Fun trivia game made using JavaScript and jQuery, testing knowledge of WoW Classic",
        githubLink: "https://github.com/dagallagher221/TriviaGame"
        
    },
    {
        title: "GifTastic",
        image: "https://live.staticflickr.com/65535/49479833111_bd25efc1d3_b.jpg",
        description: "Lightweight app to grab GIFs from the Giphy API, all with a fun Lord of the Rings theme",
        githubLink: "https://github.com/dagallagher221/GifTastic"
       
    },
    {
        title: "In The Loop",
        image: "https://live.staticflickr.com/65535/49479324023_76ff17a3d8_b.jpg",
        description: "Collaborative project to display events and weather in the Atlanta, GA area for visitors",
        githubLink: "https://github.com/dagallagher221/Project-1-Group-4"
    },
    {
        title: "Psychic Game",
        image: "https://live.staticflickr.com/65535/49480024872_30930215e2_b.jpg",
        description: "A psychic game where the computer selects a letter from A-Z and the user must figure it out to win",
        githubLink: "https://github.com/dagallagher221/Psychic-Game" 
       
    },
    {
        title: "Crystal Collector",
        image: "https://live.staticflickr.com/65535/49479323968_cc1a0af638_b.jpg",
        description: "A game where randomly generated crystals represent numbers the user must add up to in order to win, built using JavaScript",
        githubLink: "https://github.com/dagallagher221/unit-4-game"

        
    }
         
];

db.Project
    .remove({})
    .then(() => db.Project.collection.insertMany(projectSeed))
    .then(data => {
        console.log(data.result.n + " records inserted into Projects!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })