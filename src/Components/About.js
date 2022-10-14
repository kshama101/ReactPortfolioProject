import React from "react";


function About() {
  return (
    
    <div className="about">
      <section id="about">
      <div  className="container mt-5"></div>
        <div className="row mx-5">
             <div  className="col-sm-2 px-4">
                 <h2>About Me</h2> 
                <div className="myimg">Image</div>
                <p>I create well thought out, beautiful digital experiences & inject passion into every project.</p>
                <h3 className="mt-4">Services</h3>
                <p>What can I do for you.</p>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                    <a className="nav-link" href="https://creativewebs2u.com/services-2/website-design/">Website Design</a>
                    </li>
                    <li className="nav-item">
                      <a  className="nav-link" href="https://creativewebs2u.com/services-2/san-antonio-graphic-design/">Graphic Design</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://creativewebs2u.com/services-2/seo-sem-ppc/">SEO|SEM|PPC</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://creativewebs2u.com/services-2/business-branding/">Branding</a>
                    </li>
                </ul>
             </div>
             <div className="box fill col-sm-10 px-4">
                <h2>Amazing Website Design & Marketing</h2>
                <h6>Creative Web Designs pours over 40+ years of combined experience into every website design and marketing campaign I work on. I recognize that each client has business marketing needs that are as unique as their brand.</h6>
                <p>A Local Web-Designer</p>
                <p>Hello, I’m Kshama. My relationship with web-designing started at a young age, and has become my life-long love. On this website, you’ll discover some of my most changeling projects I’ve taken date.</p>
                <h2 className="mt-5">I Don’t Just ‘Build Websites’</h2>
                <p>I Build Brands</p>
                <p>Every website is built around a fresh strategy for your unique customer experience. I look at what works and then create an impactful design and online sales path that will convert visitors into buyers. It’s more than just a website, it’s your online salesperson and customer service rep all rolled into one. My WordPress websites are custom and completely thought through. I excel at WordPress website design, e-commerce website design, search engine optimization, content marketing, core programming, backend developing, graphic design, and copywriting strategies. From the landing page ‘wow’ factor to the entire user experience, Creative Web Designs knows WordPress websites.</p>
                
             </div>
        </div>
        </section>
    </div>
  );
}

export default About;