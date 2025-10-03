import React from 'react';
import './Community.css';
import illustration from '../../assets/community-illustration.png';
import iconMembers from '../../assets/icon-members.png';
import iconClubs from '../../assets/icon-clubs.png';
import iconEvents from '../../assets/icon-events.png';
import iconPayments from '../../assets/icon-payments.png';

function Community() {
  return (
    <div className="community-main">
      <section className="community-top">
        <div className="community-illustration">
          <img src={illustration} alt="Community Illustration" />
        </div>
        <div className="community-info">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="community-learn-more">Learn More</button>
        </div>
      </section>
      <section className="community-bottom">
        <div className="community-bottom-left">
          <h2>
            Helping a local<br />
            <span className="community-green">business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="community-bottom-right">
          <div className="community-stat">
            <img src={iconMembers} alt="Members" />
            <div>
              <span className="community-stat-number">2,245,341</span>
              <div className="community-stat-label">Members</div>
            </div>
          </div>
          <div className="community-stat">
            <img src={iconClubs} alt="Clubs" />
            <div>
              <span className="community-stat-number">46,328</span>
              <div className="community-stat-label">Clubs</div>
            </div>
          </div>
          <div className="community-stat">
            <img src={iconEvents} alt="Event Bookings" />
            <div>
              <span className="community-stat-number">828,867</span>
              <div className="community-stat-label">Event Bookings</div>
            </div>
          </div>
          <div className="community-stat">
            <img src={iconPayments} alt="Payments" />
            <div>
              <span className="community-stat-number">1,926,436</span>
              <div className="community-stat-label">Payments</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;