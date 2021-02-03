import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Live Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project/EZ.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Ez-Shopper</a>
                      </h3>
                      <span>
                        <h2 style={{ color: "#ffffff" }}> ECommerce Website</h2>
                      </span>
                      <span>
                        <h3 style={{ color: "#ffffff" }}>
                          Frontend: Angular 9
                        </h3>
                        <h3 style={{ color: "#ffffff" }}>Backend: Firebase</h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project/Tallo.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Tallo Web App</a>
                      </h3>
                      <span>
                        <h1 style={{ color: "#ffffff" }}>
                          Business Event Managment
                        </h1>
                      </span>
                      <span className="info">
                        <h2 style={{ color: "#ffffff" }}>
                          Frontend: Angular 6
                        </h2>
                        <h3 style={{ color: "#ffffff" }}>Backend: Firebase</h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-3.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Lifo</a>
                      </h3>
                      <span>
                        <h2 style={{ color: "#ffffff" }}>Ecommerce Website</h2>
                      </span>
                      <span className="info">
                        <h3>Frontend: Angular 10</h3>
                        <h3>Backend: Nodejs</h3>
                        <h3>Database: Postgress</h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project/py.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Retool</a>
                      </h3>
                      <span className="info">
                        <h2 style={{ color: "#ffffff" }}>Python Script</h2>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project/cupid.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Cupid Store</a>
                      </h3>
                      <span>
                        <h2 style={{ color: "#ffffff" }}>ECommerce Website</h2>
                      </span>
                      <span className="info">
                        <h3>Frontend: Django</h3>
                        <h3>Backend: Python</h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project/node.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Csr Product</a>
                      </h3>
                      <span>
                      <h2 style={{ color: "#ffffff" }}>Nodejs Rest Api</h2> </span>
                      <span className="info">
                        <h3>Backend: Nodejs</h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a href="!#" className="btn btn-primary btn-lg btn-load-more">
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}
