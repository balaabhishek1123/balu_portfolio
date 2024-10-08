import React from 'react';
import { MailOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ca9c9736-4f1a-41cc-8c8f-60242035a426");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          toast.success("Message sent successfully!");
          setTimeout(() => {
            window.location.href = '/'; // Redirect to the home page after a delay
          }, 2000); // 2 seconds delay for the toast notification to be visible
        }
      };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/bala__abhishek/', '_blank');
    };
    
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/bala-abhishek-komirisetty-256a841b3/', '_blank');
    };

    return (
        <div className='contact'>
            <ToastContainer /> {/* Toastify container for notifications */}
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src='' alt='' />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <MailOutlined style={{ fontSize: '32px', color: '#333' }} />
                            <p>balu123@example.com</p>
                        </div>
                        <div className="contact-detail" onClick={handleInstagramClick} style={{ cursor: 'pointer' }}>
                            <InstagramOutlined style={{ fontSize: '32px', color: '#E4405F' }} />
                            <p>Instagram</p>
                        </div>
                        <div className="contact-detail" onClick={handleLinkedInClick} style={{ cursor: 'pointer' }}>
                            <LinkedinOutlined style={{ fontSize: '32px', color: '#0077b5' }} />
                            <p>LinkedIn</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right' onSubmit={onSubmit}>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' required />
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter Your Email' name='email' required />
                    <label htmlFor=''>Write your message</label>
                    <textarea name='message' rows='8' placeholder='Enter your message' style={{width:'100%', height: '30%', padding: '20px'}} required/>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
