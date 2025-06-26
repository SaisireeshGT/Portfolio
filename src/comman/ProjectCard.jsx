import React from 'react'

function ProjectCard({src, link, h3, p }) {
  return (
    <a href={link} target='black'>
          <img className="hover" src={src} alt="${h3} Image" />
          <h3>{h3}</h3>
    </a>

)
}

export default ProjectCard