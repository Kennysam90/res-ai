import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const About = () => {
  return (
    <>
      {/* Main */}
<main className="main-page about-page">
  {/* Header Bar */}
  <div className="header-bar">
    <div className="custom-container">
      <div className="header-bar-body d-flex align-items-center justify-content-between">
        <div className="left">
          <select className="country-select" name="country" id="country">
            <option value="en">EN</option>
            <option value="uk">UK</option>
            <option value="dz">DZ</option>
          </select>
        </div>
        <div className="right">
          <p>
            Level up your business with <a href="about.html" data-word="SYNCK." id="dataWord">SYNCK.</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Header */}
  <Header />
  {/* About Hero */}
  <section className="hero-service-wrap hero-section-wrap hero-about-wrap">
    <div className="hero-section-content-wrap">
      <div className="custom-container">
        <div className="hero-portfolio-body">
          <div className="hero-section-content text-center">
            <h5 className="section-subtitle">Company</h5>
            <h1 className="section-title fade-in">Our company provide a best 
              horizon tech solutions</h1>
            <p>Experience the transformative power of innovation and seamless solutions with
              dynamics. Our journey doesn't end with the delivery of a solution.</p>
          </div>
          <div className="hero-company-boxes">
            <div className="hero-company-box simple-shadow">
              <h1>300+</h1>
              <h3>Projects</h3>
              <p>We are spread around
                the world.</p>
            </div>
            <div className="hero-company-box simple-shadow">
              <h1>100%</h1>
              <h3>Client Satisfaction</h3>
              <p>Our clients a happy with 
                our service.</p>
            </div>
            <div className="hero-company-box simple-shadow">
              <h1>15k</h1>
              <h3>Legal Customers</h3>
              <p>Our customers are from
                many countries.</p>
            </div>
            <div className="hero-company-box simple-shadow">
              <h1>1995</h1>
              <h3>We Established On</h3>
              <p>Our company have a 
                great history.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Client Section */}
  <section className="client-area">
    <div className="clients clients-marquee d-flex align-items-center">
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo1.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo2.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo3.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo4.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo5.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo2.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo3.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo4.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo5.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="assets/imgs/client-logo2.svg" alt="Client" />
      </div>
      <div className="client-logo" style={{minWidth: 0}} />
    </div>
  </section>
  {/* Service */}
  <section className="company-service-area">
    <div className="custom-container">
      <div className="hero-service-about">
        <div className="section-header d-flex align-items-center justify-content-between w-full">
          <div className="left">
            <h5 className="section-subtitle">OUR COMPANY</h5>
            <h1 className="section-title">Why our company is too popular?</h1>
            <p>Contact us today to begin your journey!</p>
          </div>
          <a href="contact.html" className="theme-btn">Contact Us</a>
        </div>
        <img src="assets/imgs/hero-company-about.jpg" alt="Service About" />
        <div className="hero-service-about-body">
          <p>Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.</p>
          <ul>
            <li>
              <i className="las la-check" /> Managed Services and Products
            </li>
            <li>
              <i className="las la-check" /> Flexibility and Adaptability
            </li>
            <li>
              <i className="las la-check" /> Competitive Advantage
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Service Area */}
  <section className="service4-area service-area">
    <div className="custom-container">
      <div className="service-section-header section-header d-flex align-items-end justify-content-between">
        <div className="left">
          <h5 className="section-subtitle">WHAT WE’RE OFFERING</h5>
          <h1 className="section-title">Dealing in all professional <br />IT services.</h1>
        </div>
        <p>One fundamental aspect of IT services is infrastructure management. This involves the design,
          implementation, and maintenance of the hardware, software, networks, and servers.</p>
      </div>
      <div className="services-list d-flex">
        <div className="service-card simple-shadow pop-in">
          <img src="assets/imgs/service-icon-1.svg" alt="Service Icon" className="service-icon" />
          <h3><a href="#">Development</a></h3>
          <p>Our development is pixel perfect in all ways.</p>
        </div>
        <div className="service-card simple-shadow pop-in">
          <img src="assets/imgs/service-icon-2.svg" alt="Service Icon" className="service-icon" />
          <h3><a href="#">Woo Commerce</a></h3>
          <p>We have a best team for your shopping websites.</p>
        </div>
        <div className="service-card simple-shadow pop-in">
          <img src="assets/imgs/service-icon-3.html" alt="Service Icon" className="service-icon" />
          <h3><a href="#">CRM Solutions</a></h3>
          <p>We enhance customer experiences for success.</p>
        </div>
        <div className="service-card simple-shadow pop-in">
          <img src="assets/imgs/service-icon-4.html" alt="Service Icon" className="service-icon" />
          <h3><a href="#">Web Design</a></h3>
          <p>We create vibrant, intuitive and minimalist web</p>
        </div>
        <div className="service-card simple-shadow pop-in">
          <span className="service-badge">Free!</span>
          <img src="assets/imgs/service-icon-5.html" alt="Service Icon" className="service-icon" />
          <h3><a href="#">IT Support</a></h3>
          <p>We offers expert assistance for your IT issues.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Our Team */}
  <section className="our-team-2-area">
    <div className="custom-container">
      <div className="section-header our-team-2-header d-flex align-items-center justify-content-between w-full">
        <img className="animation-slide-right bg-shape" src="assets/imgs/bg-shape-10.svg" alt="Shape" />
        <div className="left">
          <h5 className="section-subtitle">OUR TEAM</h5>
          <h1 className="section-title">Our professional experts</h1>
          <p>Our team is a collective force of top talents, experts, and <br />
            visionaries from diverse fields.</p>
        </div>
        <a href="contact.html" className="theme-btn">Book an appointment with our expert now</a>
      </div>
      <div className="our-team-2-lists">
        <div className="our-team-2-card">
          <div className="img-box">
            <img src="assets/imgs/team4.png" alt="Team" />
          </div>
          <h2>Jennifer Linda</h2>
          <span className="designation">Product Designer</span>
          <ul className="social-links d-flex align-items-center">
            <li><a href="#">
                <i className="iconoir-dribbble" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-twitter" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-instagram" />
              </a></li>
          </ul>
        </div>
        <div className="our-team-2-card">
          <div className="img-box">
            <img src="assets/imgs/team5.png" alt="Team" />
          </div>
          <h2>Merlin Bullock</h2>
          <span className="designation">Business Analyst</span>
          <ul className="social-links d-flex align-items-center">
            <li><a href="#">
                <i className="iconoir-dribbble" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-twitter" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-instagram" />
              </a></li>
          </ul>
        </div>
        <div className="our-team-2-card">
          <div className="img-box">
            <img src="assets/imgs/team6.png" alt="Team" />
          </div>
          <h2>Beatrix Clara</h2>
          <span className="designation">Front End Developer</span>
          <ul className="social-links d-flex align-items-center">
            <li><a href="#">
                <i className="iconoir-dribbble" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-twitter" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-instagram" />
              </a></li>
          </ul>
        </div>
        <div className="our-team-2-card">
          <div className="img-box">
            <img src="assets/imgs/team7.png" alt="Team" />
          </div>
          <h2>Richard Parker</h2>
          <span className="designation">Back End Developer</span>
          <ul className="social-links d-flex align-items-center">
            <li><a href="#">
                <i className="iconoir-dribbble" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-twitter" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-instagram" />
              </a></li>
          </ul>
        </div>
        <div className="our-team-2-card">
          <div className="img-box">
            <img src="assets/imgs/team8.png" alt="Team" />
          </div>
          <h2>Aminul Ashfaq</h2>
          <span className="designation">Devops Engineer</span>
          <ul className="social-links d-flex align-items-center">
            <li><a href="#">
                <i className="iconoir-dribbble" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-twitter" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-instagram" />
              </a></li>
          </ul>
        </div>
        <div className="our-team-2-card">
          <div className="img-box">
            <img src="assets/imgs/team9.png" alt="Team" />
          </div>
          <h2>Margeret Allan</h2>
          <span className="designation">Cloud Expert</span>
          <ul className="social-links d-flex align-items-center">
            <li><a href="#">
                <i className="iconoir-dribbble" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-twitter" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-instagram" />
              </a></li>
          </ul>
        </div>
        <div className="our-team-2-card">
          <div className="img-box">
            <img src="assets/imgs/team10.png" alt="Team" />
          </div>
          <h2>Mason Williams</h2>
          <span className="designation">System Engineer</span>
          <ul className="social-links d-flex align-items-center">
            <li><a href="#">
                <i className="iconoir-dribbble" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-twitter" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-instagram" />
              </a></li>
          </ul>
        </div>
        <div className="our-team-2-card">
          <div className="img-box">
            <img src="assets/imgs/team11.png" alt="Team" />
          </div>
          <h2>Emily Frida</h2>
          <span className="designation">UX Designer</span>
          <ul className="social-links d-flex align-items-center">
            <li><a href="#">
                <i className="iconoir-dribbble" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-twitter" />
              </a></li>
            <li><a href="#">
                <i className="iconoir-instagram" />
              </a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* About */}
  <section className="about-service3-area">
    <div className="custom-container">
      <div className="custom-row align-items-center">
        <div className="img-box">
          <img src="assets/imgs/about-service-3.png" alt="About" />
        </div>
        <div className="content-box">
          <h1>Why our services are <br />
            better than others?</h1>
          <p>We don't believe in a one-size-fit-all approach. Our services are carefully customized to suit your specific need, ensuring you to achieve your goals.</p>
          <p>We believe in delivering value that extends  your beyond the immediate project. Our services are designed to provide a long-term benefits.</p>
          <ul>
            <li>
              <i className="las la-check" /> PPD Development
            </li>
            <li>
              <i className="las la-check" /> Quick Response
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* CTA */}
  <section className="cta-area">
    <div className="custom-container">
      <div className="cta-body text-center">
        <img src="assets/imgs/bg-shape-11.svg" alt="Shape" className="animation-slide-left bg-shape" />
        <div className="our-expert-team-box">
          <div className="our-expert-team-box-inner d-flex align-items-center">
            <div className="imgs d-flex align-items-center">
              <img src="assets/imgs/small-img-4.png" alt="team" />
              <img src="assets/imgs/small-img-3.png" alt="team" />
              <img src="assets/imgs/small-img-2.png" alt="team" />
              <img src="assets/imgs/small-img-1.png" alt="team" />
            </div>
          </div>
        </div>
        <h2>Need any further assitance?</h2>
        <p>Feel free to reach out for any inquiries or assistance.</p>
        <a href="contact.html" className="theme-btn">Book an appointment now</a>
      </div>
    </div>
  </section>
  {/* Contact */}
  <section className="contact-area">
    <div className="custom-container">
      <div className="custom-row">
        <div className="contact-form-wrap">
          <div className="contact-form-body">
            <h5 className="section-subtitle">Contact</h5>
            <h1 className="section-title">Lets get in touch</h1>
            <p>You can reach us anytime via <a href="mailto:bluebase@mail.com">bluebase@mail.com</a></p>
            <form action="https://wpriverthemes.com/HTML/synck/assets/mail/contact.php" method="POST" className="contact-form">
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="first_name">First Name</label>
                  <input id="first_name" type="text" name="first_name" placeholder="First Name" />
                </div>
                <div className="input-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input id="last_name" type="text" name="last_name" placeholder="Last Name" />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group phone-number">
                  <select className="number-prefix">
                    <option value="uk">UK</option>
                    <option value="us">US</option>
                  </select>
                  <label htmlFor="phone_number">Phone Number</label>
                  <input id="phone_number" type="text" name="phone_number" placeholder="Your Number" />
                </div>
                <div className="input-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" id="homeland" name="country" placeholder="Your Country" />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" placeholder="Leave us a message...." defaultValue={""} />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group input-checkbox">
                  <input type="checkbox" id="privacy_policy_accept" />
                  <label htmlFor="privacy_policy_accept">You agree to our <a href="#">terms and conditions.</a></label>
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <button id="submit" className="theme-btn">Get Started</button>
                </div>
              </div>
              {/* Alert Message */}
              <div className="input-row">
                <div className="input-group alert-notification">
                  <div id="alert-message" className="alert-msg" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-experience">
          <ul>
            <li>
              <h1>22+ <span>Years</span></h1>
              <p>Field Experience </p>
            </li>
            <li>
              <h1>950+ <span>Projects</span></h1>
              <p>Done Around World </p>
            </li>
            <li>
              <h1>99%</h1>
              <p>Client Satisfaction</p>
            </li>
            <li>
              <h1>1995+ <span>Year</span></h1>
              <p>Established On</p>
            </li>
            <li>
              <h1>2 <span>Mins</span></h1>
              <p>Response Time</p>
            </li>
          </ul>
        </div>
        <div className="contact-infos">
          <div className="contact-infos-inner">
            <div className="contact-info">
              <img src="assets/imgs/support-icon.html" alt="Support" />
              <h3>Contact Info</h3>
              <p>
                +1 455 1482 236 <br />
                Bluebase@mail.com
              </p>
            </div>
            <div className="contact-office-info contact-info">
              <img src="assets/imgs/map-icon.html" alt="Map" />
              <h3>Visit our office</h3>
              <p>16/9, Down Street
                Edinburgh, Scotland
                United Kingdom</p>
            </div>
            <ul className="contact-social-links">
              <li>
                <a href="#">
                  <i className="iconoir-dribbble" /> Dribbble
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="iconoir-twitter" /> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="iconoir-instagram" /> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="iconoir-linkedin" /> linkedin
                </a>
              </li>
            </ul>   
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <Footer />
</main>

    </>
  )
}

export default About
