import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        <div className="services-format">
          <h2>Web Development</h2>
          <p>
            Building modern and interactive websites using frameworks like React, Vue, and Angular.
          </p>
        </div>
        <div className="services-format">
          <h2>API Integration</h2>
          <p>
            Developing and integrating RESTful and GraphQL APIs to connect services and enhance functionality.
          </p>
        </div>
        <div className="services-format">
          <h2>Responsive UI Design</h2>
          <p>
            Designing responsive and intuitive user interfaces for seamless experiences on any device.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
