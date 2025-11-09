import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
      console.log('Отправка данных на n8n webhook:', formData);
      
      // Отправляем данные в n8n webhook
      const response = await fetch('https://petuam.app.n8n.cloud/webhook/avt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Ответ от сервера:', response.status, response.statusText);
      
      if (response.ok) {
        alert('Спасибо за ваш запрос! Я свяжусь с вами в ближайшее время для обсуждения возможностей автоматизации ваших бизнес-процессов.');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        // Более детальная обработка ошибок
        const errorText = await response.text();
        console.error('Ошибка сервера:', errorText);
        console.error('Статус ответа:', response.status);
        console.error('Заголовки ответа:', [...response.headers.entries()]);
        alert(`Произошла ошибка при отправке запроса. Статус: ${response.status}. Пожалуйста, попробуйте еще раз.`);
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('Произошла ошибка при отправке запроса. Проверьте подключение к интернету и попробуйте еще раз.');
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
              <label htmlFor="phone">Номер телефона</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
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