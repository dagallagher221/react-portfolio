import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Header><p>Welcome to my Portfolio</p></Header>
     

        <p className="App-intro">
          Please use the links above to navigate and see all that I can bring to the table.  
           </p>


      
        <Footer />
      </div>

      
        
        
      );
  }
}

export default App;