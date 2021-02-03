import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Projects from './components/projects'
import ContactPage from "./components/contact";
import ProjectPractice from "./components/projectPractice"

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <Projects></Projects>
            <ProjectPractice></ProjectPractice>
            <ContactPage></ContactPage>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
