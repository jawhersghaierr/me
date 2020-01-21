import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navbar";
import Footer from "./component/footer";

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <Navbar/>
        <Footer/>
        </React.Fragment>

    );
  }
}

export default App;
