import React, { useRef } from 'react';
import './Blog.css';
import teslaLogo from '../../assets/tesla-logo.png';
import logo1 from '../../assets/Logo 1.png';
import logo2 from '../../assets/Logo 2.png';
import logo3 from '../../assets/Logo 3.png';
import logo4 from '../../assets/Logo 4.png';
import logo5 from '../../assets/Logo 5.png';
import logo6 from '../../assets/Logo 6.png';
import illustration from '../../assets/illustration.png';

function Blog() {
  const blogTopRef = useRef(null);

  const scrollToTop = () => {
    if (blogTopRef.current) {
      blogTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="blog-main">
      <div ref={blogTopRef}></div>
      <h1 className="blog-title-green">Blog</h1>
      <p className="blog-intro">
        Welcome to our blog! Discover stories, tips, and insights from our community and team.
      </p>
      {/* Testimonial Section */}
      <section className="blog-testimonial">
        <div className="blog-testimonial-image">
          <img src={teslaLogo} alt="Tesla Logo" />
        </div>
        <div className="blog-testimonial-content">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="blog-testimonial-author">
            <span className="blog-author-name">Tim Smith</span>
            <span className="blog-author-role">British Dragon Boat Racing Association</span>
          </div>
          <div className="blog-logos">
            <img src={logo1} alt="Client 1" />
            <img src={logo2} alt="Client 2" />
            <img src={logo3} alt="Client 3" />
            <img src={logo4} alt="Client 4" />
            <img src={logo5} alt="Client 5" />
            <img src={logo6} alt="Client 6" />
            <button className="blog-customers-link" onClick={scrollToTop}>Meet all customers →</button>
          </div>
        </div>
      </section>
      {/* Extra Section: Recent Articles */}
      <section className="blog-articles">
        <h2>Recent Articles</h2>
        <div className="blog-articles-list">
          <div className="blog-article-card">
            <img src={illustration} alt="Article" />
            <div>
              <h3>How to grow your business as a photographer</h3>
              <p>Discover strategies and tips to expand your photography business in the digital era.</p>
              <button className="blog-read-more" onClick={scrollToTop}>Read More</button>
            </div>
          </div>
          <div className="blog-article-card">
            <img src={logo1} alt="Article" />
            <div>
              <h3>Designing a modern site footer</h3>
              <p>Learn how to create a footer that is both functional and visually appealing.</p>
              <button className="blog-read-more" onClick={scrollToTop}>Read More</button>
            </div>
          </div>
          <div className="blog-article-card">
            <img src={logo2} alt="Article" />
            <div>
              <h3>Community success stories</h3>
              <p>Read inspiring stories from our members and how they achieved their goals.</p>
              <button className="blog-read-more" onClick={scrollToTop}>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;