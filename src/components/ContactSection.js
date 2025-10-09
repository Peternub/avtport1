import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Связаться со мной</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Контактная информация</h3>
            <p><strong>Email:</strong> alexey@example.com</p>
            <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
            <p><strong>Город:</strong> Москва, Россия</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Отправить сообщение</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;