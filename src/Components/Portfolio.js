import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";



function Portfolio() {
    return (
      <div className="portfolio">
            <section id="portfolio">
                <div className="container mt-3">
                   <h1 className="text-center">Portfolio</h1>
                    <div className="row">
                        <div className="col-lg-4 mt-4 px-4">
                            <div className="card">
                             <img className="card-img-top" src="https://www.2440media.com/sites/default/files/assets/images/blog/The%20Difference%20between%20Web%20Designer%2C%20Web%20Developer%2C%20and%20Web%20Programmer.jpg" alt="Card image" style={{ width:"100%" }} /> 
                                 <div className="card-body">
                                    <h4 className="card-title">Sputnik Creative</h4>
                                    <p className="card-text">A hero image is a web design term which refers to a high quality full width image that covers the page</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 px-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="https://www.vipinwebdesigner.in/wp-content/uploads/2020/04/website-design-india-915x514.jpg" alt="Card image" style={{ width:"100%" }} />
                                <div className="card-body">
                                    <h4 className="card-title">Element Creative</h4>
                                    <p className="card-text">The About page contains important information about you and your background..</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 px-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="https://respostas.sebrae.com.br/wp-content/uploads/2020/06/0-destaque-linguagens-de-programacao-2019-1-959x615.jpg" alt="Card image" style={{ width:"100%" }} />
                                <div className="card-body">
                                    <h4 className="card-title">Hum Creative</h4>
                                    <p className="card-text">This section includes my best project that includes React, HTML, Bootstrap. Please take a look in to it. </p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-4 mt-4 px-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="https://www.samayo.org/wp-content/uploads/2020/11/Samayo.org-Blog-Web-Design-SEO-creazione-siti-web-blog-e-commerce-Ayouni-Housam-102-1024x1024.png" alt="Card image" style={{ width:"100%" }} />
                                <div className="card-body">
                                    <h4 className="card-title">Soft Facade</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 px-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="https://lucanappini.it/storage/2020/09/web-design.jpg" alt="Card image" style={{ width:"100%" }} />
                                <div className="card-body">
                                    <h4 className="card-title">Twitter Clone</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 px-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_hB-RYaqKRqO0Y5dtyV05yMIQqpnNn-8oaBjt9sMWRhpVk2JDVbG-Ef2v2RzVrbK51U&usqp=CAU" alt="Card image" style={{ width:"100%" }} />
                                <div className="card-body">
                                    <h4 className="card-title">Blog App</h4>
                                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>   
      </div>
    );
};
  
export default Portfolio;
  
  
