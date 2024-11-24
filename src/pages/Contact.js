import React from 'react'
import contact from "../assets/contactus.png"; 
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${contact})` }}>

      </div>
      <div className="rightSide">
        <h1>Email Teacher</h1>

        <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeHolder="Enter full name..." type="text" required/>
            <label htmlFor="email">Email</label>
            <input name="email" placeHolder="Enter email..." type="email" required/>
            <label htmlFor="message">Message</label>
            <textarea 
                rows="6" 
                placeHolder="Enter message..." 
                name="message"
                required
                >
            </textarea>
        <button type="submit"> Send Message
        </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
