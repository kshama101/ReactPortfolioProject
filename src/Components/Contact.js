import React from "react";
import FormValidation from "../FormValidation";


function Contact() {
  const style1= {textDecoration:'none'};
  const style2= {overflow:'hidden'};
  const style3= {maxWidth:'100%'};
  const style4= {width:'500px'};
  const style5= {height:'500px'};

  return (
    <div className="contact">
       <section id="contact">
         <div className="container mt-3 contactContent">
           <h1 className="text-center">Contact Me</h1>

            <div className="row mt-4">
               <div className="col-lg-6">
                   <div style={{...style1, ...style2, ...style3, ...style4, ...style5}}>
                     <div id="gmap-canvas" style={{height:"100%", width:"100%", maxWidth:"100%"}}>
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.1967628778775!2d-121.93322768475035!3d37.6915778247149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808feb89fae43d45%3A0x460073f6ec61e7dd!2s5720%20Stoneridge%20Mall%20Rd%2C%20Pleasanton%2C%20CA%2094588!5e0!3m2!1sen!2sus!4v1665420107108!5m2!1sen!2sus"
                        width="600" 
                        height="450" 
                        style={{ border: "0" }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"> 
                        </iframe>
                     </div>
                   </div>
               </div>

               <div className="col-lg-6">
                 <FormValidation/>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

export default Contact;