import React from 'react';
import './Features.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import illustration from '../../assets/feature-illustration.png';

function Features() {
  return (
    <div className="features-main">
      <h1 className="features-title">
        Manage your entire community<br />in a single system
      </h1>
      <p className="features-subtitle">Who is Nexcent suitable for?</p>
      <div className="features-cards">
        <div className="features-card">
          <img src={icon1} alt="Membership Organisations" />
          <h2>Membership Organisations</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="features-card">
          <img src={icon2} alt="National Associations" />
          <h2>National Associations</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="features-card">
          <img src={icon3} alt="Clubs And Groups" />
          <h2>Clubs And Groups</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
      <div className="features-section">
        <img src={illustration} alt="Feature Illustration" className="features-illustration" />
        <div className="features-info">
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="features-learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Features;