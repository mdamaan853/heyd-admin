import React from "react";
// import { FaFacebookF } from "react-icons/fa";
import "./style.css";
function Footer() {
  return (
    <div>
      <div className="container justify-content-center">
        <hr className="mx-0 mt-5 px-0" />
        <footer>
          <div className="row justify-content-around mb-0 pt-5 pb-0 ">
            <div className=" col-11">
              <div className="row justify-content-center">
                <div className="col-md-3 col-12 font-italic align-items-center mt-md-3 mt-4">
                  <h5>
                    <b className="text-dark"> Heydgreen</b>
                  </h5>
                  {/* <p className="social mt-md-3 mt-2"> <span><FaFacebookF /></span> <span><i className="fa fa-linkedin" aria-hidden="true"></i></span> <span><i className="fa fa-twitter" aria-hidden="true"></i></span> </p> */}
                  <small className="copy-rights cursor-pointer">
                    &#9400; 2020 Heydgreen
                  </small>
                  <br /> <small>Copyright.All Rights Resered. </small>
                </div>
                <div className="col-md-3 col-12 my-sm-0 mt-5">
                  <ul className="list-unstyled">
                    <li className="mt-md-3 mt-4">Our Solution</li>
                    <li>Intergrated Security Platform</li>
                    <li>Core Features</li>
                    <li>Product Features</li>
                    <li>Pricing</li>
                  </ul>
                </div>
                <div className="col-md-3 col-12 my-sm-0 mt-5">
                  <ul className="list-unstyled">
                    <li className="mt-md-3 mt-4">Your needs</li>
                    <li>Intergrated Security Platform</li>
                    <li>Core Features</li>
                    <li>Product Features</li>
                    <li>Pricing</li>
                  </ul>
                </div>
                {/* <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                  <ul className="list-unstyled">
                    <li className="mt-md-3 mt-4">Offer</li>
                    <li>Intergrated Security Platform</li>
                    <li>Core Features</li>
                    <li>Product Features</li>
                    <li>Pricing</li>
                  </ul>
                </div> */}
                {/* <div className="col-xl-auto col-md-6 col-12 pt-4 my-sm-0 order-6 ">
                  <div className="form-group ">
                    <h2 className="text-black">
                      <b>Let `s have a chat !</b>
                    </h2> */}
                {/* 
                    <div class="col-xl-auto col-md-6 col-12 pt-4 my-sm-0 order-6 ">
                      <div class="form-group ">
                        <label for="email" class="mb-3">
                          <b>Subscribe to our newsletter and Get 10% off</b>
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Enter email"
                          id="email"
                        />
                      </div>
                      <button type="button" className=" btn-lg btn-success  ">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
