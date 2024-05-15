import React, { useState } from 'react';
import emailjs from '@emailjs/browser'

const EmailForm= () =>{

  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [message, setMessage] = useState('');

  const handelSubmit = (e)=>{
    e.preventDefault();

    const serviceID = 'service_la0ueib';
    const templeteID = 'template_bled62i';
    const publicKey = 'e8_krUrIuF3wLcOUt'

    const templateParams = {
      from_name: name,
      from_email: email,
      reply_to: email,
      to_name: "Grace Helping Hands",
      message: message 
    };

    emailjs.send(serviceID, templeteID, templateParams, publicKey)
      .then((response)=>{
        console.log("Email Sent successfully", response);
        alert("Email Send Successfully");
        SetName('');
        SetEmail('');
        setMessage('');
      })
      .catch((error)=>{
        console.error('error sending email:', error)
        alert("There was an" ,error);
      });
  }


  return(
  <form className='form' id='Email-form' onSubmit={handelSubmit}>
    <h4 className='form-title'>Talk with us</h4>
    <input 
      className='name'
      type="text" 
      name="name"
      placeholder="What is your name ?"
      value={name}
      onChange={(e)=>SetName(e.target.value)}
    />
    <input 
      className='email'
      type="email" 
      name="email"
      placeholder="What is your email ?"
      value={email}
      onChange={(e)=>SetEmail(e.target.value)}
    />
    <textarea 
      placeholder='Talk here !'
      className='describe'
      name="message" 
      id="message"
      cols= "10"
      rows = "5"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
    >
    </textarea>
    <p className='never-share'>We will never share your Information</p>
    <button className='submit-btn' type="submit">Send Email</button>
  </form>
  )
}

export default EmailForm; 