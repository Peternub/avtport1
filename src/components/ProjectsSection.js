import React from 'react';

const ProjectsSection = () => {
  // Проект по автоматизации бизнес-процессов
  const projects = [
    {
      id: 1,
      title: "Телеграм бот для автоматизации",
      description: "Телеграм бот, который отвечает на вопросы пользователей, может бронировать услуги и сохранять данные в Excel таблицу.",
      technologies: "Python, Telegram Bot API, Excel API",
      image: process.env.PUBLIC_URL + "/images/tg-botq.jpg",
      demoUrl: "https://t.me/Drive_TechBot"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2>Мои проекты по автоматизации</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="technologies"><strong>Технологии:</strong> {project.technologies}</p>
                <div className="project-links">
                  <a href={project.demoUrl} className="btn" target="_blank" rel="noopener noreferrer">Подробнее</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;