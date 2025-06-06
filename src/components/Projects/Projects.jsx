import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import { API_URL } from "../../utils";  // Importando a constante API_URL

export const Projects = () => {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  // Requisição para a rota /projects do backend
  fetch("http://3.16.137.128:80/projects")  // Alterado para o IP público da EC2
    .then(response => response.json())
    .then(data => setProjects(data))
    .catch(error => {
      console.error("Erro ao carregar os projetos:", error);
    });
}, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
