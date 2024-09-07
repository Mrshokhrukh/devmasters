import React from "react";
import "./contactForm.scss";

const ContactForm = () => {
  return (
    <div className="container" id="footer">
      <div className="contactForm form_field_container">
        <h2>Bizga aloqaga chiqing</h2>
        <form>
          <div>
            <label htmlFor="name">Ism</label>
            <input type="text" id="name" placeholder="Ismingizni kiriting" />
          </div>
          <div>
            <label htmlFor="name">Telefon raqam</label>
            <input type="number" id="phone" placeholder="Telefon raqamingizni kiriting" />
          </div>
          <div>
            <label htmlFor="service">Hizmat turini tanlang</label>
            <select name="service" id="service">
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
