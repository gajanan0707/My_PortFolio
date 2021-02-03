import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class ProjectPractice extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Practice Work</span>
            <h2 className="colorlib-heading animate-box">Projects Practice</h2>
          </div>
        </div>
        <section className="" data-section="projectsPractice">
          {/* Angular Projects */}
          <h1 className="colorlib-heading animate-box">Angular Project</h1>
          <Carousel responsive={responsive}>
            <div>
              <div
                className="project"
                style={{ backgroundImage: "url(images/project/angular.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">HoteBooking Angular</a>
                    </h3>
                    <span>
                      <h2 >
        
                        Hotel Managment Website
                      </h2>
                    </span>
                    <span>
                      <h3>Frontend: Angular 10</h3>
                      <h3>Backend: Laravel</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/angular.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Email Shedule</a>
                    </h3>
                    <span>
                      <h3>
        
                        Email Shedule Website
                      </h3>
                    </span>
                    <span>
                      <h3>Frontend: Angular 10</h3>
                      <h3>Backend: Nodejs</h3>
                      <h3>Database: Mongodb</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/angular.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Web Chat</a>
                    </h3>
                    <span>
                      <h3>
        
                        Socail Network Website
                      </h3>
                    </span>
                    <span>
                      <h3>Frontend: Angular 10</h3>
                      <h3>Backend: Laravel</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="project"
                style={{ backgroundImage: "url(images/project/angular.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Ngrx-Angular-Simple-ShoppingList</a>
                    </h3>
                    <span>
                      <h3> ECommerce Website</h3>
                    </span>
                    <span>
                      <h3>Frontend: Angular 10</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
         
          {/* Django  Projects*/}
          <h1 className="colorlib-heading animate-box">Django Project</h1>
          <Carousel responsive={responsive}>
            <div>
              <div
                className="project"
                style={{ backgroundImage: "url(images/project/django.jpg)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Ecom Farmer</a>
                    </h3>
                    <span>
                      <h3> ECommerce Website</h3>
                    </span>
                    <span>
                      <h3>
                        Frontend & Backend : Django
                      </h3>
                      <h3>Databse: Sqlite</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/django.jpg)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Django_Blog_App</a>
                    </h3>
                    <span>
                      <h3> Blogging Website</h3>
                    </span>
                    <span>
                      <h3>
                        Frontend & Backend: Django
                      </h3>
                      <h3>Databse: Postgress</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/django.jpg)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Django_Rest_Api_Example</a>
                    </h3>
                    <span>
                      <h3> ECommerce Website</h3>
                    </span>
                    <span>
                      <h3>
                        Frontend & Backend: Django
                      </h3>
                      <h3>Databse: Postgress</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>

          {/* React Projects */}
          <h1 className="colorlib-heading animate-box">React Project</h1>
          <Carousel responsive={responsive}>
            <div>
              <div
                className="project"
                style={{ backgroundImage: "url(images/project/react.png" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">SimpleNoteAdd_ReactJs</a>
                    </h3>
                    <span>
                      <h3>Frontend : Reactjs</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/react.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">React_PicsSearch_App</a>
                    </h3>
                    <span>
                      <h3>
        
                        Search Pictures Videos Website
                      </h3>
                    </span>
                    <span>
                      <h3>Frontend: React</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/react.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">React_YtVideos_Hooks</a>
                    </h3>
                    <span>
                      <h3>
        
                        Search YouTube Videos Website
                      </h3>
                    </span>
                    <span>
                      <h3>Frontend:React</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/react.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Contact_Book</a>
                    </h3>
                    <span>
                      <h3>
        
                        Contact_Book Website
                      </h3>
                    </span>
                    <span>
                      <h3>Frontend:React</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/react.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Todo App</a>
                    </h3>
                    <span>
                      <h3> Crud Todo Website</h3>
                    </span>
                    <span>
                      <h3>Frontend:React</h3>
                      <h3>Backend:Firebase</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/react.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">QuizApp</a>
                    </h3>
                    <span>
                      <h3> Simple Quiz App</h3>
                    </span>
                    <span>
                      <h3>Frontend:React</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div
                className="project"
                style={{ backgroundImage: "url(images/project/react.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">React_Nodejs_Auth</a>
                    </h3>
                    <span>
                      <h3>
        
                        Simple React Nodejs Authentication App
                      </h3>
                    </span>
                    <span>
                      <h3>Frontend:React</h3>
                      <h3>Backend:Nodejs</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          
          {/* Nodejs Projects*/}
          <h1 className="colorlib-heading animate-box">Nodejs Project</h1>
          <Carousel responsive={responsive}>
            <div>
              <div
                className="project"
                style={{ backgroundImage: "url(images/project/nodejs.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="!#">Nodejs Chat App</a>
                    </h3>
                    <span>
                      <h3> Socail Website</h3>
                    </span>
                    <span>
                      <h3>
                        Frontend & Backend : Nodejs
                      </h3>
                      <h3>Databse: Postgress</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        
        </section>
      </div>
    );
  }
}
