import React, { useContext } from "react";
import { UserContext } from "../../../App";
import certificate from "../../Images/Certificate.jpg";
import "./Certificates.css";
import ShareLink from "react-facebook-share-link";

import fb from "../../Images/fb1.jpg";
import homeLogo from "../../Images/home-logo.jpg";

const Certificates = () => {
  const [user, setUser] = useContext(UserContext);
  /* console.log(user); */

  return (
    <section className="certificate-bg">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-4">
            <img src={homeLogo} alt="" />
          </div>

          <div className="col-md-8">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <div className="images">
                  <img src={certificate} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="title text-center">{user}</h2>

        <div>
          <p
            className="text-red text-center"
            style={{ fontSize: "22px", fontWeight: "500" }}
          >
            প্রতিটি ইউনিক সমর্থন এর পরিপ্রেক্ষিতে বিড ফাইন্যান্স এর পক্ষ থেকে ২০
            টাকা এই আয়ােজনে সহায়তা করা হবে
          </p>

          <div className="d-flex justify-content-center align-items-center">
            <div>
              <ShareLink link="https://bd-finance.netlify.app/certificate">
                {(link) => (
                  <a href={link} target="_blank">
                    <img src={fb} alt="" className="fb" /> <br />
                    <p className="btn btn-outline-primary">শেয়ার করুন</p>
                  </a>
                )}
              </ShareLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
