require('dotenv').config()
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI);

const projectSeed = [
    {
        name: "Train Scheduler",
        image: "https://live.staticflickr.com/65535/49479361788_df124e0c43_h.jpg",
        githubLink: "https://github.com/dagallagher221/Train-scheduler"
    },
    {
        name: "Trivia Game",
        image: "https://live.staticflickr.com/65535/49479805026_ed04272b11_h.jpg",
        githubLink: "https://github.com/dagallagher221/TriviaGame"
        
    },
    {
        name: "GifTastic",
        image: "https://live.staticflickr.com/65535/49479833111_bd25efc1d3_b.jpg",
        githubLink: "https://github.com/dagallagher221/GifTastic"
       
    },
    {
        name: "In The Loop",
        image: "https://live.staticflickr.com/65535/49479324023_76ff17a3d8_b.jpg",
        githubLink: "https://github.com/dagallagher221/Project-1-Group-4"
    },
    {
        name: "Psychic Game",
        image: "https://live.staticflickr.com/65535/49480024872_30930215e2_b.jpg", 
        githubLink: "https://github.com/dagallagher221/Psychic-Game" 
       
    },
    {
        name: "Crystal Collector",
        image: "https://live.staticflickr.com/65535/49479323968_cc1a0af638_b.jpg",
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