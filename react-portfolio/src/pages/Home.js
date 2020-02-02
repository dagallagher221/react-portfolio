import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


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