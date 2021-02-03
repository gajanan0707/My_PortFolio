import React from "react";
import { useForm } from "react-hook-form";
import "../css/style.css";
import db from "../firebase";
import firebase from "firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const notify = () => {
    toast.dark('SucessFully Fillup Contact Form',{autoClose:5000}) 
  };
  const onSubmit = (value, e) => {
    const data = {
      name: value.fullName,
      email: value.email,
      subject: value.subject,
    };
    db.collection("contact")
      .add({
        dataUser: data,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((res) => {
        notify();
        e.target.reset();
      });
  };

  return (
    <div>
      <div className="wrapper" data-section="contact">
        <div className="form-wrapper">
          <h2 style={{ color: "#fd0069", fontSize: "30px" }}>Contact Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                ref={register({ required: true })}
                type="text"
                name="fullName"
              />
              {errors.fullName && <p className="errorshow">This is required</p>}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                ref={register({ required: true })}
                type="email"
                name="email"
              />
              {errors.email && <p className="errorshow">email is required</p>}
            </div>
            <div className="subject">
              <label htmlFor="subject">subject</label>
              <input
                ref={register({ required: true })}
                type="text"
                name="subject"
              />
              {errors.subject && (
                <p className="errorshow">subject is required</p>
              )}
            </div>
            <div className="submit">
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
