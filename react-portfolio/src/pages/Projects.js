import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import ProjectCard from "../components/ProjectCard/ProjectCard"

import Wrapper from "../components/Wrapper/Wrapper";
import API from "../utils/API";

class ProjectPage extends Component {

state={
    projects: []
}

componentDidMount() {
    this.loadProjects();
}

loadProjects = () => {
    API.getProjects()
        .then(res => {
            this.setState({projects: res.data})
        })
        .catch(err=> console.log(err))
}





render() {
    return (
        <div className="App">
            <Navbar />

            <Header><p>Here is a sampling of the projects available I have worked on over the past year.</p></Header>
            <Wrapper>
       
            <div className="container">
                <div className="row">
                    {this.state.projects.map(project => (
                        <ProjectCard
                            id={project._id}
                            key={project.id}
                            name={project.name}
                            image={project.image}
                            githubLink={project.githubLink}
                            />
                    ))}
                </div>
            </div>

        
        </Wrapper>

        </div>




    )
}
}

export default ProjectPage;