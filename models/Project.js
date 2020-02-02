var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Projects = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    }


});

var Projects = mongoose.model("Project", Projects);

module.exports = Projects;