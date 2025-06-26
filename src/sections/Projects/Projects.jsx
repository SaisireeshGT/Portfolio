import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../comman/ProjectCard';

import Satellite from '../../assets/Satellite.jpg';
import Flight_Booking from '../../assets/Flight.jpg';
import Lorry from '../../assets/Lorry.jpg';
import Leaf from '../../assets/Leaf.png';

const projectData = [
  {
    src: Satellite,
    link: "https://www.kaggle.com/code/saisireesh/satellite-image-analysis/",
    h3: "Satellite Image Analysis",
  },
  {
    src: Flight_Booking,
    link: "https://github.com/SaisireeshGT/Flight-Booking",
    h3: "Flight Booking Application",
  },
  {
    src: Lorry,
    link: "https://saisireesh.pythonanywhere.com/",
    h3: "Lorry Leasing Application",
  },
  {
    src: Leaf,
    link: "https://www.kaggle.com/code/saisireesh/rice-plant-nutrients-deficiency/",
    h3: "Rice Plant Nutrients Deficiency",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>My Projects</h1>
      <div className={styles.projectsContainer}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
