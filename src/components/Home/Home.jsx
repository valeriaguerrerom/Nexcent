import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import illustration from '../../assets/illustration.png';
import logo1 from '../../assets/Logo1.png';
import logo2 from '../../assets/Logo2.png';
import logo3 from '../../assets/Logo3.png';
import logo4 from '../../assets/Logo4.png';
import logo5 from '../../assets/Logo5.png';
import logo6 from '../../assets/Logo6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/');
  };

  return (
    <div className="home-main">
      <div className="home-carousel-container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className="home-swiper"
        >
          <SwiperSlide>
            <section className="home-hero">
              <div className="home-hero-text">
                <h1>
                  Lessons and insights<br />
                  <span className="home-green">from 8 years</span>
                </h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className="home-register" onClick={handleRegister}>Register</button>
              </div>
              <div className="home-hero-image">
                <img src={illustration} alt="Illustration" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="home-hero">
              <div className="home-hero-text">
                <h1>
                  Lessons and insights<br />
                  <span className="home-green">from 8 years</span>
                </h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className="home-register" onClick={handleRegister}>Register</button>
              </div>
              <div className="home-hero-image">
                <img src={illustration} alt="Illustration" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="home-hero">
              <div className="home-hero-text">
                <h1>
                  Lessons and insights<br />
                  <span className="home-green">from 8 years</span>
                </h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className="home-register" onClick={handleRegister}>Register</button>
              </div>
              <div className="home-hero-image">
                <img src={illustration} alt="Illustration" />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="home-clients">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="home-logos">
          <img src={logo1} alt="Client 1" />
          <img src={logo2} alt="Client 2" />
          <img src={logo3} alt="Client 3" />
          <img src={logo4} alt="Client 4" />
          <img src={logo5} alt="Client 5" />
          <img src={logo6} alt="Client 6" />
        </div>
      </section>
    </div>
  );
}

export default Home;