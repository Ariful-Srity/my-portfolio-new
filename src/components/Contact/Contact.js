
import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_45tt2ks', 'template_cya56mh', form.current, 'xdzZH-QOOd45Se7Ys')
            .then((result) => {
                alert('Message sent succesfully');
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };



    return (
        <div className='contact'>
            <div>
                <h1 className='text-center text-info mt-5'>Contact Me Form</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className='ms-5 mt-5'>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>

        </div>
    );
};

export default Contact;