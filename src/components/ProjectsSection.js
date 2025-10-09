import React from 'react';

const ProjectsSection = () => {
  // Ваши настоящие работы с реальными изображениями
  const projects = [
    {
      id: 1,
      title: "SofiaRose",
      description: "Персональный проект портфолио",
      technologies: "React, JavaScript, CSS",
      image: process.env.PUBLIC_URL + "/images/sofia-rose.jpg",
      demoUrl: "https://ppport1.vercel.app/"
    },
    {
      id: 2,
      title: "AlexFoto",
      description: "Персональный веб-сайт",
      technologies: "React, JavaScript, HTML/CSS",
      image: process.env.PUBLIC_URL + "/images/alex-foto.jpg",
      demoUrl: "https://me-port-pied.vercel.app"
    },
    {
      id: 3,
      title: "Uncle Kolya Restaurant",
      description: "Веб-сайт ресторана",
      technologies: "React, Node.js, MongoDB",
      image: process.env.PUBLIC_URL + "/images/uncle-kolya.jpg",
      demoUrl: "https://uncle-kolya-restaurant.vercel.app"
    },
    {
      id: 4,
      title: "Alina Volkova",
      description: "Персональный сайт для дизайнера",
      technologies: "React, JavaScript, CSS",
      image: process.env.PUBLIC_URL + "/images/alina-volkova.jpg",
      demoUrl: "https://alina-volkova.vercel.app"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2>Мои работы</h2>
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
                  <a href={project.demoUrl} className="btn" target="_blank" rel="noopener noreferrer">Демо</a>
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