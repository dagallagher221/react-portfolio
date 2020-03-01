import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Header><p>Welcome to my Portfolio</p></Header>
     

       <h1 className="appIntro">Dan Gallagher-Full Stack Developer Bio and Skills</h1>

       <p>Proficiencies in several languages, such as: HTML5, CSS, JavaScript, jQuery, Bootstrap, React.js, Node.js, MySQL, MongoDB, and many more!</p>
       <p>For a full listing, please feel free to check out my Resume, link located on the "Contact" Page</p>

       <p>This site was built from scratch in React.js, with elements loaded from a MongoDB Database.</p>
           



      
      
      </div>

      
        
        
      );
  }
}

export default App;