import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeLogo from "../Images/home-logo.jpg";
const Home = () => {
  return (
    <section className="home-section">
      <div className="container home">
        <div className="row mt-5">
          <div className="col-md-4">
            <img src={homeLogo} alt="" />
          </div>
          <div className="col-md-8">
            <div>
              <h2 className="text-brand" style={{ paddingLeft: "160px" }}>
                {" "}
                <b>আমরা মানুষ</b>{" "}
              </h2>
              <h2 className="text-red">
                শুধু নামে না, কাজেও মানুষ হওয়াটা জরুরী।
              </h2>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center text-brand">
            আমাদের চারপাশে ছড়িয়ে আছে অসংখ্য দুস্থ, অসহায় ও সুবিধা বঞ্চিত
            মানুষ, যাদের জন্য শীতকাল একটি দুঃস্বপ্নের মত। যারা অপেক্ষায় থাকে
            আমাদের <b className="text-brand">সহায়তা</b> পাবার আশায়। আর তাই
            আমাদের এবারের আয়ােজন{" "}
            <b className="text-brand">বিডি ফাইন্যান্স সহায়তা।</b>
          </h2>
          <h2 className="text-center text-brand">
            আর্থিক নয় বরং আপনাদের সমর্থন আর ভালবাসা পেলেই
            <b className="text-brand"> বিডি ফাইন্যান্স</b> টিম ছুটবে শীতকালীন
            প্রয়ােজনীয় সামগ্রী নিয়ে অসহায় মানুষদের কাছে।
            <b className="text-brand">বিডি ফাইন্যান্স</b> এ ডিপােজিটকৃত অর্থের
            ০.৫ শতাংশ সমপরিমান অর্থ
            <b className="text-brand">সহায়তা</b> প্রদান করবাে আমরা। অর্থাৎ
            আপনার জমাকৃত মূলধন পুরােটাই থাকছে সুরক্ষিত, আপনার পক্ষ থেকে
            <b className="text-brand"> সহায়তা</b> প্রদান করবে
            <b className="text-brand"> বিডি ফাইন্যান্স।</b>
          </h2>

          <h2 className="text-center text-brand">
            এছাড়াও শুধুমাত্র সমর্থন করেই এই আয়ােজনের অংশীদার হতে পারবেন আপনি।
            প্রতিটি সমর্থনের বিপরীতে এই আয়ােজনে ২০ টাকা
            <b className="text-brand"> সহায়তা </b> প্রদান করবে
            <b class="text-brand">বিডি ফাইন্যান্স | </b> নিজেকে মানুষ হিসেবে
            প্রমাণ করতে, অসহায় মানুষগুলাের কাছে
            <b className="text-brand">সহায়তা</b> পৌঁছে দেওয়ার এইতাে সময়!
          </h2>

          <div className="d-flex justify-content-center mt-5 mb-3">
            <div>
              <Link to="/login">
                <button className="support">সমর্থন করুন</button>
              </Link>
            </div>
          </div>
          <p
            className="text-red text-center"
            style={{ fontSize: "22px", fontWeight: "500" }}
          >
            প্রতিটি ইউনিক সমর্থন এর পরিপ্রেক্ষিতে বিড ফাইন্যান্স এর পক্ষ থেকে ২০
            টাকা এই আয়ােজনে সহায়তা করা হবে
          </p>
        </div>
        <div className="row my-3 justify-content-between">
          <div>
            <p className="box">
              বিডি ফাইন্যান্স এর অর্থায়ন{" "}
              <span className="text-red">৬,২৪,৬০০ টাকা</span>
            </p>
          </div>

          <div>
            <p className="box">
              সর্মথনকারী <span className="text-brand"> ৩১,২৩০ জন</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
