import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({ fullname: "", mobile: "", email: "", msg: "" });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Your Name: ${data.fullname}, Your Mobile No: ${data.mobile}, Your email: ${data.email}, Your msg: ${data.msg}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Mobile No
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="mobile"
                  value={data.mobile}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your Mobile No..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
