import React from 'react';

const ProjectsSection = () => {
  // Проекты по автоматизации бизнес-процессов
  const projects = [
    {
      id: 1,
      title: "Телеграм бот \"Самоответчик\"",
      description: "Телеграм бот, который отвечает на вопросы пользователей, может бронировать услуги и сохранять данные в Google Sheets.",
      technologies: "Python, Telegram Bot API, Google Sheets API",
      image: process.env.PUBLIC_URL + "/images/tg-botq.jpg",
      demoUrl: "https://t.me/Drive_TechBot"
    },
    {
      id: 2,
      title: "Страница на вашем сайте \"Связаться со мной\"",
      description: "Человек заполняет поля и отправляет сообщение, которое обрабатывается, и уже чистые данные попадают к вам в Google Sheets таблицу.",
      technologies: "JavaScript, Google Sheets API, Webhooks",
      image: process.env.PUBLIC_URL + "/images/avtotpr.png",
      demoUrl: "#"
    }
  ];

  const handleNoWebsiteClick = () => {
    window.open('https://pet-web-portfolio.vercel.app/', '_blank');
  };

  return (
    <section className="projects-section" id="projects">
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
                  {project.id === 2 ? (
                    <button className="btn" onClick={handleNoWebsiteClick}>Нет сайта?</button>
                  ) : (
                    <a href={project.demoUrl} className="btn" target="_blank" rel="noopener noreferrer">Подробнее</a>
                  )}
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