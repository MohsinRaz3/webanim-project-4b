import React from "react";
import './../Footer/footer.css'

export const Footerr = () => {
 
  return (
    
    <div>
      <div className="main-footer">
        <div className="container">
          
          <div className="col1">
            <ul className="list-unstyled">
              <li className="textos">  We’re a Denver-based Digital Marketing agency powered by top-vetted freelancers from around the globe.        </li>
              <li className="textos2">hello@junto.digital</li>
            </ul>
          </div>

          <div className="col">
        
            <ul className="list-unstyled">
              <li><h2>ABOUT</h2></li>
              <li><a href="#"> About </a> </li>
              <li><a href="#"> Contact Us </a>  </li>
              <li><a href="#"> Career </a> </li>
            </ul>
          </div>

          <div className="col">
               
            <ul className="list-unstyled">
              <li><h2>SERVICES</h2></li>
              <li><a href="#"> Content Marketing </a> </li>
              <li><a href="#">  Web Development </a> </li>
              </ul>
          </div>

          <div className="col">
            <h2>KEEP IN TOUCH</h2>
            <ul className="list-unstyled">
              <li><a href="#"> Facebook </a>  </li>
              <li><a href="#"> Twitter </a> </li>
              <li><a href="#"> LinkedIn </a> </li>
           
            </ul>
          </div>
        </div>

        <div className="row">
          <ul className="col-sm">
            <li> &copy; 2020  SixFour Creative LLC </li>
            <li>720-295-0483</li>
            <li>Born in Denver</li>
            <li>Colorado</li>
            <li>2806 N. Speer Blvd Denver, CO 80211</li>
            <li>Terms & Conditions</li>


          </ul>

        </div>



      </div>


   </div>
        );

};
