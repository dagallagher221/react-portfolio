import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Wrapper from "../Components/Wrapper/Wrapper";
import API from "../Utils/API";

class Admin extends Component {

state={
    projects=[]
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
                            />
                    ))}
                </div>
            </div>

        
        </Wrapper>

        </div>




    )
}
}

export default Admin;