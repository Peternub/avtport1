import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Веб-разработчик</h1>
            <p className="hero-subtitle">Создаю современные веб-приложения и сайты</p>
            <p className="hero-description">
              Привет! Я специализируюсь на создании качественных веб-решений, 
              которые помогают бизнесу достигать своих целей. Ниже представлены 
              мои лучшие работы.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Смотреть проекты</button>
              <button className="secondary-btn">Связаться со мной</button>
              <button 
                className="highlight-btn" 
                onClick={() => window.open('https://ваше-второе-портфолио.com', '_blank')}
              >
                Хотите сэкономить десятки тысяч рублей?
              </button>
            </div>
          </div>
          <div className="hero-book">
            <div className="book-container">
              <img 
                src={process.env.PUBLIC_URL + '/images/MyBook.png'} 
                alt="Мои работы" 
                className="book-image"
              />
              <div className="book-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;