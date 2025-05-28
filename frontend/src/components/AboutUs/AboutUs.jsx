import './AboutUs.css'
import '../Navigation/Navigation.css'
export default function AboutUs() {
    return (
        <div className="about-us-container">
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="main-title">About RedEvent Pro</h1>
          <p className="subtitle">
            Crafting extraordinary experiences and turning your vision into unforgettable memories.
            We are passionate event creators dedicated to bringing your dreams to life.
          </p>
        </div>
 
        <div className="sections-container">
          <div className="section-card">
            <h2 className="section-title">
              <div className="section-icon"></div>
              Our Mission
            </h2>
            <div className="section-content">
              To deliver exceptional event experiences that exceed expectations and create lasting memories.
              We strive to transform ordinary occasions into extraordinary celebrations by combining creativity,
              precision, and unparalleled service excellence.
            </div>
          </div>
 
          <div className="section-card">
            <h2 className="section-title">
              <div className="section-icon"></div>
              Our Vision
            </h2>
            <div className="section-content">
              To be the leading event management company recognized for innovation, reliability, and creating
              magical moments. We envision a world where every celebration reflects the unique story and
              personality of our clients, delivered with flawless execution.
            </div>
          </div>
        </div>
 
        <div className="company-story">
          <h2 className="story-title">Our Story</h2>
          <div className="story-content">
            Founded with a passion for creating memorable experiences, RedEvent Pro has been at the forefront
            of event management for over a decade. From intimate gatherings to grand celebrations, we've
            orchestrated thousands of successful events, each one uniquely tailored to our clients' vision.
            Our team of creative professionals brings together years of expertise in design, logistics, and
            hospitality to ensure every detail is perfect.
          </div>
 
          <div className="values-grid">
            <div className="value-item">
              <div className="value-title">Excellence</div>
              <div className="value-description">
                We pursue perfection in every detail, ensuring exceptional quality in all our services.
              </div>
            </div>
            <div className="value-item">
              <div className="value-title">Innovation</div>
              <div className="value-description">
                Constantly evolving with new trends and technologies to create unique experiences.
              </div>
            </div>
            <div className="value-item">
              <div className="value-title">Reliability</div>
              <div className="value-description">
                Building trust through consistent delivery and transparent communication.
              </div>
            </div>
            <div className="value-item">
              <div className="value-title">Creativity</div>
              <div className="value-description">
                Transforming ideas into reality with artistic vision and innovative solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    );
}
 