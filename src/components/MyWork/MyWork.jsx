import React from 'react';
import './MyWork.css';
import dashboard1 from '../../assets/dashboard1.jpg';
import dashboard2 from '../../assets/dashboard2.png';
import dashboard3 from '../../assets/dashboard3.png';

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src="" alt="" />
      </div>
      <div className="mywork-container">
        <div className="mywork-item">
          <h2>Dashboard 1</h2>
          <img src={dashboard1} alt="Dashboard 1" className="dashboard-image" style={{height: '70%'}}/>
          <p>Description for Dashboard 1.</p>
        </div>
        <div className="mywork-item">
          <h2>Dashboard 2</h2>
          <img src={dashboard2} alt="Dashboard 2" className="dashboard-image" style={{height: '70%'}}/>
          <p>Description for Dashboard 2.</p>
        </div>
        <div className="mywork-item">
          <h2>Dashboard 3</h2>
          <img src={dashboard3} alt="Dashboard 3" className="dashboard-image" style={{height: '70%'}}/>
          <p>Description for Dashboard 3.</p>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
