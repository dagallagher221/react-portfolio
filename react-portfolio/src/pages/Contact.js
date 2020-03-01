import React, {Component} from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";



//import "./contact.css";


class Contact extends Component {
    render() {
    return (
        <div className="App">
        <Navbar />
        <Header>Please contact me if you wish to know more!</Header>
        <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3 w-75 about-info">
                            <div class="card-header">
                               Please connect with me on LinkedIn!
                            </div>
                            <div class="card-body">
                                <h4 class="card-title"><a href="www.linkedin.com/in/dan-gallagher221"> Dan Gallagher LinkedIn </a></h4>
                                <p class="card-text">Feel free to leave a message and I will respond as swiftly as possible</p>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3 w-75 about-info">
                            <div class="card-header">
                               Check out my GitHub for more details!
                            </div>
                            <div class="card-body">
                                <h4 class="card-title"><a href="https://github.com/dagallagher221"> Dan Gallagher GitHub </a></h4>
                                <p class="card-text">There are a variety of projects to look at, large and small.  Any and all feedback is appreciated!</p>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3 w-75 about-info">
                            <div class="card-header">
                              Please download a copy of my Resume for full background and experience
                            </div>
                            <div class="card-body">
                                <h4 class="card-title"><a href="https://docs.google.com/document/d/1Lm8ZEfd59japDRhJBYa7SdzppbPdfGKsL-qa2U-yqRU/edit?usp=sharing"> Dan Gallagher Resume</a></h4>
                                <p class="card-text">I have been living and working in the Atlanta area for a long time, please reach out if you have any further questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
      

        </div>
    )}
}
   
export default Contact;