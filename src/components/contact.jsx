import React, { Component } from "react";
import "../css/style.css";
import db from "../firebase";
import firebase from "firebase";

const validEmailRegex = RegExp(
  "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      subject: null,

      errors: {
        fullName: "",
        email: "",
        subject: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "subject":
        errors.subject =
          value.length < 5 ? "subject Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      const data = { name: this.state.fullName, email: this.state.email, subject:this.state.subject };
      db.collection("contact")
        .add({
          dataUser: data,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(event.target.reset());
        
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper" data-section="contact">
        <div className="form-wrapper">
          <h2>Contact Form</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="subject">
              <label htmlFor="subject">subject</label>
              <input
                type="text"
                name="subject"
                onChange={this.handleChange}
                noValidate
              />
              {errors.subject.length > 0 && (
                <span className="error">{errors.subject}</span>
              )}
            </div>
            <div className="submit">
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
