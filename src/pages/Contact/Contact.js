import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { TypeAnimation } from "react-type-animation";

import Heading from "../../components/Heading/Heading"
import Button from "../../components/Button/Button";
import "./contact.css";



const Contact = () => {

    const INITIAL_VALUES = { email: "", message: "" };
    const [notification, setNotification] = useState(false);
    const [values, setValues] = useState(INITIAL_VALUES);
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = async () => {

      try {
        const result = await emailjs.sendForm('service_f5fy1ef', 'template_w2e62xc', form.current, 'GJUsfDDktPfVReS-a')
        console.log(result.text);
      } catch (error) {
        console.log(error.text);
      }


    };



  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("form submitted !", values);
    // TODO : Send data to your email
    setLoading(true);
    await sendEmail();
    setLoading(false);
    clearForm();
    setNotification(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  
  return (
    <section className="contact" name="contact" id="contact">
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />
      <div className="content">
        <div className="right">
          <form onSubmit={handleSubmit} ref={form}>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <Button
              text={loading ? "Sending..." : "Send"}
              loading={loading}
              type="submit"
            />
            {notification && (
              <span style={{ color: "white", marginTop: "2rem" }}>
                Will be in touch! :)
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;