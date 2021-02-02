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
                  Recent Projects
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
                  style={{ backgroundImage: "url(images/img-1.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Ez-Shopper</a>
                      </h3>
                      <span>ECommerce Website</span>
                      <span>
                        <h3>Frontend: Angular 9</h3>
                        <h3>Backend: Firebase</h3>
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
                  style={{ backgroundImage: "url(images/img-2.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Tallo Web App</a>
                      </h3>
                      <span>Business Event Managment</span>
                      <span>
                        <h3>Frontend: Angular 6</h3>
                        <h3>Backend: Firebase</h3>
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
                      <span>Ecommerce Website</span>
                      <span>
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
                  style={{ backgroundImage: "url(images/img-4.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Retool</a>
                      </h3>
                      <span>Python Script</span>
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
                  style={{ backgroundImage: "url(images/img-5.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Cupid Store</a>
                      </h3>
                      <span>ECommerce Website</span>
                      <span>
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
                  style={{ backgroundImage: "url(images/img-6.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="!#">Csr Product</a>
                      </h3>
                      <span>Nodejs Rest Api</span>
                      <span>
                        <h3>Backend: Nodejs</h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a href="!#" className="btn btn-primary btn-lg btn-load-more">
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
