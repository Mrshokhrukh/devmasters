import React, { useState } from "react";
import "./contactForm.scss";
import axios from "axios";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    service: "e-commerce",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = "root";
    const password = "ANAz_AQNGy@WpRr!";

    await axios.post("https://api.devmasters.uz/api/v1/bots/bot/send-message/", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + window.btoa(username + ":" + password),
        //   Authorization: `Basic ${username}:${password}`,
      },
    });
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
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Ismingizni kiriting"
            />
          </div>
          <div>
            <label htmlFor="name">Telefon raqam</label>
            <input
              type="number"
              value={data.phone_number}
              onChange={handleChange}
              id="phone"
              name="phone_number"
              placeholder="Telefon raqamingizni kiriting"
            />
          </div>
          <div>
            <label htmlFor="service">Hizmat turini tanlang</label>
            <select name="service" value={data.service} id="service" onChange={handleChange}>
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
