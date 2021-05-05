import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="material">
        <h5>NEXT STEPS</h5>
        <div className="course">
          <div className="course-left">
            <img
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=184"
              alt=""
            />
            <div className="course-text">
              <h4>Mathematical Fundamentals</h4>
              <p>
                The essential tools for mastering algebra, logic, and number
                theory!
              </p>
            </div>
          </div>
          <div className="course-right">
            <img
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=184"
              alt=""
            />
            <div className="course-text">
              <h4>Computer Science Fundamentals</h4>
              <p>
                Wrap your mind around computational thinking, from everyday
                tasks to algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
