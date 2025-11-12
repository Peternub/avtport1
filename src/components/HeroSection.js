import React from 'react';
import '../App.css';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Автоматизация бизнес-процессов</h1>
            <p className="hero-subtitle">Помогаю компаниям работать быстрее и без лишней рутины</p>
            <p className="hero-description">
              Привет! Я начинающий специалист по автоматизации и создаю решения, которые упрощают работу, 
              уменьшают ошибки и экономят время. Ниже ты найдешь мои первые проекты, где я применяю 
              подходы, которые реально облегчают жизнь бизнесу.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={scrollToProjects}>Смотреть проекты</button>
              <button className="secondary-btn" onClick={scrollToContact}>Связаться со мной</button>
              <button 
                className="highlight-btn" 
                onClick={() => window.open('https://pet-web-portfolio.vercel.app/', '_blank')}
              >
                Хотите сделать стильный сайт?
              </button>
            </div>
          </div>
          <div className="hero-book">
            <div className="book-container">
              <img 
                src="/images/MyBook.png" 
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