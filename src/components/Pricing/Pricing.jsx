import React from 'react';
import './Pricing.css';
import img1 from '../../assets/pricing1.png';
import img2 from '../../assets/pricing2.png';
import img3 from '../../assets/pricing3.png';

function Pricing() {
  return (
    <div className="pricing-main">
      <h1 className="pricing-title">Caring is the new marketing</h1>
      <p className="pricing-subtitle">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
      </p>
      <div className="pricing-cards">
        <div className="pricing-card">
          <img src={img1} alt="Pricing 1" />
          <div className="pricing-card-content">
            <h2>Creating Streamlined Safeguarding Processes with OneRen</h2>
            <button className="pricing-readmore">Readmore &rarr;</button>
          </div>
        </div>
        <div className="pricing-card">
          <img src={img2} alt="Pricing 2" />
          <div className="pricing-card-content">
            <h2>What are your safeguarding responsibilities and how can you manage them?</h2>
            <button className="pricing-readmore">Readmore &rarr;</button>
          </div>
        </div>
        <div className="pricing-card">
          <img src={img3} alt="Pricing 3" />
          <div className="pricing-card-content">
            <h2>Revamping the Membership Model with Triathlon Australia</h2>
            <button className="pricing-readmore">Readmore &rarr;</button>
          </div>
        </div>
      </div>
      <div className="pricing-demo-section">
        <h2 className="pricing-demo-title">Pellentesque suscipit fringilla libero eu.</h2>
        <button className="pricing-demo-btn">Get a Demo &rarr;</button>
      </div>
    </div>
  );
}

export default Pricing;