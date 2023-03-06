import React from "react";

const NewsLetter = () => {
  return (
    <div className="container-newsletter">
      <form>
        <h1>Join Our Newsletter</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="email-box">
          <i className="fas fa-envelope"></i>
          <input className="tbox" type="email" placeholder="Enter your email" />
          <button className="btn" type="button" name="button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
