import React, {Component} from "react";
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"

//import  "./about.css"

class About extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Header><p>About Dan</p></Header>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3 w-75 about-info">
                            <div class="card-header">
                               Who is Dan Gallagher?
                            </div>
                            <div class="card-body">
                                <h4 class="card-title"></h4>
                                <p class="card-text">I began my Web Development journey in August 2019, having had a lifelong passion for computers and technology.  The Georgia Institue of Technology Full Stack Bootcamp was where my education took place, in a intensive six month program to learn the basics of Web Development.  In the class, I learned in demand skills such as HTML5, CSS, JavaScript, jQuery, Node.js, MySQL, MongoDB, React.js, Express.js, and several other languages.  For a full listing, please see my resume.</p>

                                <p class="card-text">Learning to code was a challenge, but ultimately an extremely satisfying experience.  There is nothing more gratifying than identifying the bug preventing your product from successfully deploying, or being able to help those around you with their issues.  The Bootcamp gave me a great opportunity to work with other upcoming developers in a team based environment, and only furthered my passion for coding.</p>

                                <p class="card-text">In my spare time, I enjoy working on creative projects with friends in the developer world, as well as gaming and computer building/maintenance.  I have lived in the Atlanta area most of my life, and enjoy spending time around the city.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;