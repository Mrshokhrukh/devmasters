import React, { useState } from "react";
import "./contactForm.scss";

const ContactForm = () => {
  const [data, setData] = useState({
    Name: "",
    Phone: "",
    Service: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="container" id="footer">
      <div className="contactForm form_field_container">
        <h2>Bizga aloqaga chiqing</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Ism</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={data.Name}
              onChange={handleChange}
              placeholder="Ismingizni kiriting"
            />
          </div>
          <div>
            <label htmlFor="name">Telefon raqam</label>
            <input
              type="number"
              value={data.Phone}
              onChange={handleChange}
              id="phone"
              name="Phone"
              placeholder="Telefon raqamingizni kiriting"
            />
          </div>
          <div>
            <label htmlFor="service">Hizmat turini tanlang</label>
            <select name="Service" value={data.Service} id="service" onChange={handleChange}>
              <option value="eCommerce">E-commerce</option>
              <option value="landingPage">Landing Page</option>
              <option value="crm">Crm Systems</option>
              <option value="portfolio">Portfolio</option>
              <option value="telegramBot">Telegram Bot</option>
              <option value="fullStackProject">Full Stack Project</option>
              <option value="mobileApp">Mobile App</option>
            </select>
          </div>
          <button>Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
