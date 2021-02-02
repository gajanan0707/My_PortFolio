import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Projects from './components/projects'
import ContactForm from "./components/contact";
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
        <ToastContainer />
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <Projects></Projects>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
