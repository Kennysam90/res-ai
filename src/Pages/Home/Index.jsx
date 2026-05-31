import React from 'react'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'

const Index = () => {
  return (
    <>
        {/* Main */}
<main className="main-page homepage">
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
  {/* Hero Section */}
  <section className="hero-empowerment-area">
    <div className="custom-container">
      <div className="custom-row align-items-center">
        <div className="hero-empowerment-left-content">
          <h5 className="section-subtitle">EMPOWERMENT</h5>
          <h1 className="section-title fade-in">Seamless IT for your business, boosting your growth.</h1>
          <p>We provide the expertise and support to propel your
            business forward in the digital landscape.</p>
          <div className="btns-group d-flex">
            <a href="#" className="theme-btn">Learn More</a>
            <a href="contact.html" className="theme-btn2">Let's Talk
              <i className="iconoir-arrow-up-right" />
            </a>
          </div>
        </div>
        <div className="hero-empowerment-right-content">
          <div className="top-content">
            <img className="desktop fade-in" src="/assets/imgs/bg1-1.png" alt="Empowerment" />
            <img className="mobile" src="/assets/imgs/bg1.png" alt="Empowerment" />
            <div className="experience-box simple-shadow bounce-in">
              <div className="experience-body d-flex align-items-center">
                <img src="/assets/imgs/icon1.svg" alt="Icon" />
                <div className="experience-content d-flex align-items-center">
                  <h1>+8</h1>
                  <p>
                    Years
                    <span>Experience</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-content d-flex">
            <a href="team.html" className="our-expert-team-box simple-shadow bounce-in delay-2">
              <div className="our-expert-team-box-inner d-flex align-items-center">
                <div className="imgs imgs1 d-flex align-items-center">
                  <img src="/assets/imgs/small-img-4.png" alt="team" />
                  <img src="/assets/imgs/small-img-3.png" alt="team" />
                  <img src="/assets/imgs/small-img-2.png" alt="team" />
                  <img src="/assets/imgs/small-img-1.png" alt="team" />
                </div>
                <p>
                  Meet
                  <span>Our Experts</span>
                </p>
              </div>
            </a>
            <div className="google-reviews-box simple-shadow bounce-in delay-3">
              <div className="left">
                <span>Verified by</span>
                <img src="/assets/imgs/icon2.svg" alt="Google" />
              </div>
              <div className="right">
                <div className="stars d-flex align-items-center">
                  <i className="las la-star" />
                  <i className="las la-star" />
                  <i className="las la-star" />
                  <i className="las la-star" />
                  <i className="las la-star" />
                </div>
                <p>
                  3245
                  <span>Reviews</span>
                </p>
              </div>
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
        <img src="/assets/imgs/client-logo1.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo2.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo3.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo4.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo5.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo2.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo3.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo4.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo5.svg" alt="Client" />
      </div>
      <div className="client-logo simple-shadow">
        <img src="/assets/imgs/client-logo2.svg" alt="Client" />
      </div>
      <div className="client-logo" style={{minWidth: 0}} />
    </div>
  </section>
  {/* How We Do */}
  <section className="how-we-do-area">
    <div className="custom-container">
      <div className="custom-row">
        <img src="/assets/imgs/bg-shape-1.svg" alt="Shape" className="animation-slide-left how-we-do-bg" />
        <div className="how-we-do-left-content">
          <div className="top">
            <h5 className="section-subtitle">Our Model</h5>
            <h1 className="section-title">How we do</h1>
            <p>Save time and money with our powerful method.</p>
          </div>
          <a href="how-we-do.html" className="theme-btn">
            Learn More
            <i className="iconoir-arrow-up-right" />
          </a>
        </div>
        <div className="how-we-do-right-content">
          <div className="how-we-do-items d-flex align-items-center justify-content-center">
            <div className="how-we-do-card">
              <div className="circle-shape" />
              <div className="line-shape" />
              <div className="how-we-do-icon">
                <img src="/assets/imgs/hwd-icon-1.svg" alt="How we do" />
              </div>
              <div className="how-we-do-content">
                <h4>Brainstroming</h4>
                <p>Ideas</p>
              </div>
            </div>
            <div className="how-we-do-card">
              <div className="circle-shape" />
              <div className="line-shape" />
              <div className="how-we-do-icon">
                <img src="/assets/imgs/hwd-icon-2.svg" alt="How we do" />
              </div>
              <div className="how-we-do-content">
                <h4>Product</h4>
                <p>Design</p>
              </div>
            </div>
            <div className="how-we-do-card">
              <div className="circle-shape" />
              <div className="line-shape" />
              <div className="how-we-do-icon">
                <img src="/assets/imgs/hwd-icon-3.svg" alt="How we do" />
              </div>
              <div className="how-we-do-content">
                <h4>Front-End</h4>
                <p>Development</p>
              </div>
            </div>
          </div>
          <div className="how-we-do-items d-flex align-items-center justify-content-center">
            <div className="how-we-do-card">
              <div className="circle-shape" />
              <div className="line-shape" />
              <div className="how-we-do-icon">
                <img src="/assets/imgs/hwd-icon-4.svg" alt="How we do" />
              </div>
              <div className="how-we-do-content">
                <h4>SEO</h4>
                <p>Optimization</p>
              </div>
            </div>
            <div className="how-we-do-card">
              <div className="circle-shape" />
              <div className="line-shape" />
              <div className="how-we-do-icon">
                <img src="/assets/imgs/hwd-icon-5.svg" alt="How we do" />
              </div>
              <div className="how-we-do-content">
                <h4>Back-End</h4>
                <p>Development</p>
              </div>
            </div>
          </div>
          <div className="how-we-do-items d-flex align-items-center justify-content-center">
            <div className="how-we-do-card">
              <div className="circle-shape" />
              <div className="line-shape" />
              <div className="how-we-do-icon">
                <img src="/assets/imgs/hwd-icon-6.svg" alt="How we do" />
              </div>
              <div className="how-we-do-content">
                <h4>Digital</h4>
                <p>Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Service Area */}
  <section className="service-area">
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
        <div className="service-card simple-shadow">
          <img src="/assets/imgs/service-icon-1.svg" alt="Service Icon" className="service-icon" />
          <h3><a href="service-details.html">Development</a></h3>
          <p>Our development is pixel perfect in all ways.</p>
        </div>
        <div className="service-card simple-shadow">
          <img src="/assets/imgs/service-icon-2.svg" alt="Service Icon" className="service-icon" />
          <h3><a href="service-details.html">Woo Commerce</a></h3>
          <p>We have a best team for your shopping websites.</p>
        </div>
        <div className="service-card simple-shadow">
          <img src="/assets/imgs/hwd-icon-5.svg" alt="Service Icon" className="service-icon" />
          <h3><a href="service-details.html">CRM Solutions</a></h3>
          <p>We enhance customer experiences for success.</p>
        </div>
        <div className="service-card simple-shadow">
          <img src="/assets/imgs/hwd-icon-2.svg" alt="Service Icon" className="service-icon" />
          <h3><a href="service-details.html">Web Design</a></h3>
          <p>We create vibrant, intuitive and minimalist web</p>
        </div>
        <div className="service-card simple-shadow">
          <span className="service-badge">Free!</span>
          <img src="/assets/imgs/hwd-icon-6.svg" alt="Service Icon" className="service-icon" />
          <h3><a href="service-details.html">IT Support</a></h3>
          <p>We offers expert assistance for your IT issues.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Case Studio */}
  <section className="case-studio-area">
    <div className="custom-container">
      <div className="case-studio-header text-center">
        <h5 className="section-subtitle">CASE STUDIES</h5>
        <h1 className="section-title">Detailing of our products</h1>
      </div>
      <div className="case-studio">
        <ul className="nav nav-pills case-studio-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <button className="nav-link active" id="development-tab" data-bs-toggle="tab" href="#development" role="tab" aria-controls="development" aria-selected="true">Development</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="woo_commerce-tab" data-bs-toggle="tab" href="#woo_commerce" role="tab" aria-controls="woo_commerce" aria-selected="false">Woo Commerce</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="crm_solutions-tab" data-bs-toggle="tab" href="#crm_solutions" role="tab" aria-controls="crm_solutions" aria-selected="false">CRM Solutions</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="web_designing-tab" data-bs-toggle="tab" href="#web_designing" role="tab" aria-controls="web_designing" aria-selected="false">Web Designing</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="it_support-tab" data-bs-toggle="tab" href="#it_support" role="tab" aria-controls="it_support" aria-selected="false">IT Support</button>
          </li>
        </ul>
        <div className="tab-content case-studio-tab-content">
          <div className="tab-pane fade show active" id="development" role="tabpanel" aria-labelledby="development-tab">
            <div className="case-studio-body d-flex">
              <div className="left d-flex flex-1">
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">Web Development</a>
                  <img src="/assets/imgs/portfolio-1.jpg" alt="Case Studio" />
                </div>
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">Mobile Development</a>
                  <img src="/assets/imgs/portfolio-2.jpg" alt="Case Studio" />
                </div>
              </div>
              <div className="right">
                <div className="case-studio-contents service-card card-h">
                  <img src="/assets/imgs/service-icon-1.svg" alt="ICON" />
                  <h3>Development</h3>
                  <p>Software development is a dynamic and rapidly evolving field that plays a
                    pivotal role in shaping the digital landscape we live in today. It
                    encompasses the processes, methodologies, and practices used to design,
                    create, deploy, and maintain software applications and systems.</p>
                  <a href="#" className="theme-btn">
                    <i className="iconoir-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="woo_commerce" role="tabpanel" aria-labelledby="woo_commerce-tab">
            <div className="case-studio-body d-flex">
              <div className="left d-flex flex-1">
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">electro.</a>
                  <img src="/assets/imgs/portfolio-3.jpg" alt="Case Studio" />
                </div>
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">Visit Site Now</a>
                  <img src="/assets/imgs/portfolio-4.jpg" alt="Case Studio" />
                </div>
              </div>
              <div className="right">
                <div className="case-studio-contents service-card card-h">
                  <img src="/assets/imgs/service-icon-2.svg" alt="ICON" />
                  <h3>Woo Commerce</h3>
                  <p>Software development is a dynamic and rapidly evolving field that plays a
                    pivotal role in shaping the digital landscape we live in today. It
                    encompasses the processes, methodologies, and practices used to design,
                    create, deploy, and maintain software applications and systems.</p>
                  <a href="#" className="theme-btn">
                    <i className="iconoir-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="crm_solutions" role="tabpanel" aria-labelledby="crm_solutions-tab">
            <div className="case-studio-body d-flex">
              <div className="left d-flex flex-1">
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">CRM Solutions</a>
                  <img src="/assets/imgs/portfolio-5.jpg" alt="Case Studio" />
                </div>
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">Mobile Development</a>
                  <img src="/assets/imgs/portfolio-6.jpg" alt="Case Studio" />
                </div>
              </div>
              <div className="right">
                <div className="case-studio-contents service-card card-h">
                  <img src="/assets/imgs/hwd-icon-5.svg" alt="ICON" />
                  <h3>CRM Solutions</h3>
                  <p>Software development is a dynamic and rapidly evolving field that plays a
                    pivotal role in shaping the digital landscape we live in today. It
                    encompasses the processes, methodologies, and practices used to design,
                    create, deploy, and maintain software applications and systems.</p>
                  <a href="#" className="theme-btn">
                    <i className="iconoir-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="web_designing" role="tabpanel" aria-labelledby="web_designing-tab">
            <div className="case-studio-body d-flex">
              <div className="left d-flex flex-1">
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">Web Designing</a>
                  <img src="/assets/imgs/portfolio-mega-menu-1.jpg" alt="Case Studio" />
                </div>
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">Mobile Development</a>
                  <img src="/assets/imgs/portfolio-mega-menu-2.jpg" alt="Case Studio" />
                </div>
              </div>
              <div className="right">
                <div className="case-studio-contents service-card card-h">
                  <img src="/assets/imgs/hwd-icon-2.svg" alt="ICON" />
                  <h3>Web Designing</h3>
                  <p>Software development is a dynamic and rapidly evolving field that plays a
                    pivotal role in shaping the digital landscape we live in today. It
                    encompasses the processes, methodologies, and practices used to design,
                    create, deploy, and maintain software applications and systems.</p>
                  <a href="#" className="theme-btn">
                    <i className="iconoir-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="it_support" role="tabpanel" aria-labelledby="it_support-tab">
            <div className="case-studio-body d-flex">
              <div className="left d-flex flex-1">
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">IT Support</a>
                  <img src="/assets/imgs/portfolio-mega-menu-3.jpg" alt="Case Studio" />
                </div>
                <div className="case-studio-img-card simple-shadow">
                  <a href="#" className="case-studio-cat">Mobile Development</a>
                  <img src="/assets/imgs/portfolio-mega-menu-4.jpg" alt="Case Studio" />
                </div>
              </div>
              <div className="right">
                <div className="case-studio-contents service-card card-h">
                  <img src="/assets/imgs/hwd-icon-6.svg" alt="ICON" />
                  <h3>IT Support</h3>
                  <p>Software development is a dynamic and rapidly evolving field that plays a
                    pivotal role in shaping the digital landscape we live in today. It
                    encompasses the processes, methodologies, and practices used to design,
                    create, deploy, and maintain software applications and systems.</p>
                  <a href="#" className="theme-btn">
                    <i className="iconoir-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section */}
  <section className="about-area">
    <div className="custom-container">
      <div className="custom-row justify-content-between align-items-center">
        <div className="left-content">
          <h5 className="section-subtitle">CONSULTING EXCELLENCE</h5>
          <h1 className="section-title">Best pathway to our clients.</h1>
          <p>Our consulting process begins with a 
            thorough assessment of your current IT 
            infrastructure, workflows, and pain points.</p>
          <ul>
            <li>
              <i className="icon-check las la-check" /> 24/7 Full Service Support
            </li>
            <li>
              <i className="icon-check las la-check" /> Immediate Response
            </li>
            <li>
              <i className="icon-check las la-check" /> Easy to Approach us
            </li>
          </ul>
        </div>
        <div className="right-content">
          <div className="about-timeline">
            <div className="about-timeline-item">
              <div className="about-timeline-item-inner">
                <img src="/assets/imgs/line-shape-3.png" alt="Shape" className="line-shape" />
                <span className="number">01</span>
                <h3>Discovery and Analysis</h3>
                <p>Perform a analysis of the client's existing IT systems.</p>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-item-inner">
                <img src="/assets/imgs/line-shape-3.png" alt="Shape" className="line-shape" />
                <span className="number">02</span>
                <h3>Tailored Solutions</h3>
                <p>Develop IT solutions based on the analysis phase.</p>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-item-inner">
                <img src="/assets/imgs/line-shape-3.png" alt="Shape" className="line-shape" />
                <span className="number">03</span>
                <h3>Deployment and Support</h3>
                <p>Regularly communicate with our client to any concern.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial Section */}
  <section className="testimonial-area">
    <div className="custom-container">
      <div className="testimonial-slider-wrap">
        <div className="testimonial-slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide testimonial-item">
              <div className="testimonial-item-body">
                <img className="animation-slide-right bg-shape" src="/assets/imgs/bg-shape-5.svg" alt="Shape" />
                <span className="platform-name">
                  <img src="/assets/imgs/forbes.svg" alt="Icon" />
                </span>
                <h1>Platform helped me to increase my sales and revenue
                  generated by bluebase technologies</h1>
                <p>One aspect that sets IT Services apart is their proactive approach to security. In today's digital landscape, protecting our sensitive data is of utmost importance.</p>
                <div className="author-box d-flex align-items-center">
                  <img src="/assets/imgs/team-1.jpg" alt="Testimonial" />
                  <div className="author-box-content">
                    <h4>Serana Belluci</h4>
                    <p>Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide testimonial-item">
              <div className="testimonial-item-body">
                <img className="bg-shape" src="/assets/imgs/bg-shape-5.svg" alt="Shape" />
                <span className="platform-name">
                  <img src="/assets/imgs/forbes.svg" alt="Icon" />
                </span>
                <h1>Bluebase give the best service and top customer
                  support. Really like to have more projects with you</h1>
                <p>One aspect that sets IT Services apart is their proactive approach to security. In today's digital landscape, protecting our sensitive data is of utmost importance.</p>
                <div className="author-box d-flex align-items-center">
                  <img src="/assets/imgs/team-2.jpg" alt="Testimonial" />
                  <div className="author-box-content">
                    <h4>Megan Clarke</h4>
                    <p>CEO, Sanlab</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide testimonial-item">
              <div className="testimonial-item-body">
                <img className="bg-shape" src="/assets/imgs/bg-shape-5.svg" alt="Shape" />
                <span className="platform-name">
                  <img src="/assets/imgs/forbes.svg" alt="Icon" />
                </span>
                <h1>We’ve been using bluebase for a few years, It is very 
                  simple and easy to approach team and management</h1>
                <p>One aspect that sets IT Services apart is their proactive approach to security. In today's digital landscape, protecting our sensitive data is of utmost importance.</p>
                <div className="author-box d-flex align-items-center">
                  <img src="/assets/imgs/team4.png" alt="Testimonial" />
                  <div className="author-box-content">
                    <h4>Rachel Olsem</h4>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* navigation buttons */}
        <div className="swiper-button-prev"><i className="iconoir-arrow-left" /></div>
        <div className="swiper-button-next"><i className="iconoir-arrow-right" /></div>
      </div>
    </div>
  </section>
  {/* Project Section */}
  <section className="project-area">
    <div className="custom-container">
      <div className="custom-row justify-content-between">
        <div className="project-left-details">
          <h5 className="section-subtitle">PROJECTS</h5>
          <h1 className="section-title">Showcase of
            our recognized
            work</h1>
          <p>Our collaborative approach ensures that we truly understand our clients unique requirements and challenges.</p>
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
        <div className="project-right-slider">
          <div className="project-right-slider-inner">
            <div className="swiper project-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide project-item">
                  <div className="project-item-inner">
                    <h2><a href="portfolio-details.html">E-commerce <br />
                        platform <br />
                        development.</a></h2>
                    <img src="/assets/imgs/portfolio-1.jpg" alt="Project" />
                  </div>
                </div>
                <div className="swiper-slide project-item">
                  <div className="project-item-inner">
                    <h2><a href="portfolio-details.html">Software as a <br />
                        Service <br />
                        integration</a></h2>
                    <img src="/assets/imgs/portfolio-2.jpg" alt="Project" />
                  </div>
                </div>
                <div className="swiper-slide project-item">
                  <div className="project-item-inner">
                    <h2><a href="portfolio-details.html">Mobile <br />
                        Platform <br />
                        Development</a></h2>
                    <img src="/assets/imgs/portfolio-3.jpg" alt="Project" />
                  </div>
                </div>
                <div className="swiper-slide project-item">
                  <div className="project-item-inner">
                    <h2><a href="portfolio-details.html">
                        Enter into a <br />
                        Virtual Reality <br />
                        World.</a></h2>
                    <img src="/assets/imgs/portfolio-4.jpg" alt="Project" />
                  </div>
                </div>
                <div className="swiper-slide project-item">
                  <div className="project-item-inner">
                    <h2><a href="portfolio-details.html">
                        Custom CRM <br />
                        system for a <br />
                        sales team.</a></h2>
                    <img src="/assets/imgs/portfolio-5.jpg" alt="Project" />
                  </div>
                </div>
                <div className="swiper-slide project-item">
                  <div className="project-item-inner">
                    <h2><a href="portfolio-details.html">
                        Wrist App<br />
                        For Your <br />
                        Productivity.</a></h2>
                    <img src="/assets/imgs/portfolio-6.jpg" alt="Project" />
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* News Section */}
  <section className="news-area">
    <div className="custom-container">
      <div className="section-header d-flex align-items-end justify-content-between">
        <div className="left">
          <h5 className="section-subtitle">INTERESTING ARTICLES</h5>
          <h1 className="section-title">Read daily news about <br />
            startup companies</h1>
        </div>
        <p>In today's rapidly evolving world, technology is constantly shaping the way we live and interact. From artificial intelligence and automation to  virtual reality, the pace of technological advancements is staggering.</p>
      </div>
      <div className="sticky-news d-flex card-h">
        <div className="news-img-box">
          <img src="/assets/imgs/blog-1.jpg" alt="News" />
        </div>
        <div className="news-content">
          <h5 className="section-subtitle section-subtitle1">MOBILE DEVELOPMENT</h5>
          <h1 className="section-title">
            <a href="blog-details.html">OpenAI launches new alignment division to tackle risks of superintelligent AI</a>
          </h1>
          <p>Small UK merchants, businesses, and other enterprises can now use  Tap to Pay on service to replace payment terminals at point of sale.</p>
          <ul>
            <li>
              <i className="las la-check" /> Collaboration Tools
            </li>
            <li>
              <i className="las la-check" /> Smart Reminders
            </li>
          </ul>
          <a href="blog-details.html" className="theme-btn">
            <i className="iconoir-arrow-up-right" />
          </a>
        </div>
      </div>
      <div className="news-items d-flex align-items-start">
        <div className="news-item card-h">
          <div className="news-img-box">
            <img src="/assets/imgs/blog-2.jpg" alt="News" />
          </div>
          <div className="news-item-body">
            <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
            <h1 className="section-title">
              <a href="blog-details.html">Bluebase launches Tap to Pay on smartphone for international and domestic business</a>
            </h1>
            <p>Small UK merchants, businesses, and other enterprises can now use  Tap to Pay on service to replace payment terminals at point of sale.</p>
            <ul>
              <li>
                <i className="las la-check" /> Collaboration Tools
              </li>
              <li>
                <i className="las la-check" /> Smart Reminders
              </li>
              <li>
                <i className="las la-check" /> Requirement
              </li>
              <li>
                <i className="las la-check" /> Task Management
              </li>
            </ul>
            <a href="blog-details.html" className="theme-btn">
              <i className="iconoir-arrow-up-right" />
            </a>
          </div>
        </div>
        <div className="news-item card-h">
          <div className="news-img-box">
            <img src="/assets/imgs/blog-3.jpg" alt="News" />
          </div>
          <div className="news-item-body">
            <h5 className="section-subtitle">CLOUD COMPUTING</h5>
            <h1 className="section-title">
              <a href="blog-details.html">Google Bard launches in EU, overcoming data privacy concerns in the region</a>
            </h1>
            <p>Small UK merchants, businesses, and other enterprises can now use  Tap to Pay on service to replace payment terminals at point of sale.</p>
            <ul>
              <li>
                <i className="las la-check" /> Collaboration Tools
              </li>
              <li>
                <i className="las la-check" /> Smart Reminders
              </li>
              <li>
                <i className="las la-check" /> Requirement
              </li>
            </ul>
            <a href="blog-details.html" className="theme-btn">
              <i className="iconoir-arrow-up-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Features Section */}
  <section className="feature-area">
    <div className="custom-container">
      <div className="custom-row align-items-center">
        <div className="feature-left d-flex">
          <div className="feature-img-card">
            <h3>Start your <br />
              project from <br />
              your pocket.</h3>
            <img src="/assets/imgs/iphone-13.png" alt="Feature" />
          </div>
          <div className="feature-img-card">
            <h3>Available on <br />
              all responsive <br />
              devices.</h3>
            <img src="/assets/imgs/ipad.jpg" alt="Feature" />
          </div>
        </div>
        <div className="feature-right">
          <div className="feature-content">
            <h5 className="section-subtitle">FEATURED PRODUCT</h5>
            <h1 className="section-title">Seamless productivity with our new app</h1>
            <p>Download Slack and experience a new era of organization and accomplishment.</p>
            <ul>
              <li>
                <i className="las la-check" /> PPD Development
              </li>
              <li>
                <i className="las la-check" /> Easy to Use
              </li>
            </ul>
            <div className="btns-group">
              <a href="#" className="theme-simple-btn">
                <i className="lab la-apple" />
                Get it on App Store
              </a>
              <a href="#" className="theme-simple-btn">
                <i className="lab la-google-play" />
                Get it on Play Store
              </a>
            </div>
          </div>
        </div>
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
              <img src="/assets/imgs/icon1.svg" alt="Support" />
              <h3>Contact Info</h3>
              <p>
                +1 455 1482 236 <br />
                Bluebase@mail.com
              </p>
            </div>
            <div className="contact-office-info contact-info">
              <img src="/assets/imgs/map.svg" alt="Map" />
              <h3>Visit our office</h3>
              <p>16/9, Down Street
                Edinburgh, Scotland
                United Kingdom</p>
            </div>
            <ul className="contact-social-links">
              <li>
                <a href="#">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}<i className="iconoir-dribbble" />
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}<i className="iconoir-twitter" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}<i className="iconoir-instagram" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}<i className="iconoir-linkedin" />
                  linkedin
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

export default Index
