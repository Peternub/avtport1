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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Замените URL на ваш URL из Google Apps Script
      const response = await fetch('URL_ВАШЕГО_GOOGLE_SCRIPT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Спасибо за ваш запрос! Я свяжусь с вами в ближайшее время для обсуждения возможностей автоматизации ваших бизнес-процессов.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Произошла ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      alert('Произошла ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Обсудить автоматизацию вашего бизнеса</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Контактная информация</h3>
            <p><strong>Email:</strong> molchaniuk_pa@mail.ru</p>
            <p><strong>Телефон:</strong> +7 (965) 426-25-07</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
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
              <label htmlFor="message">Опишите ваши бизнес-процессы, которые хотели бы автоматизировать</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Отправить запрос на автоматизацию</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;