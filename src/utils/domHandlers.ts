import { projects } from '../constants/projets.list';

const projectList = document.getElementById('projectList');

export const createProjectList = () => {
  if (projectList) {
    for (const project of projects) {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');

      const projectName = document.createElement('h3');
      projectName.textContent = project.name;

      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;

      const projectLanguages = document.createElement('ul');
      for (const language of project.languages) {
        const languageItem = document.createElement('li');
        languageItem.textContent = language;
        projectLanguages.appendChild(languageItem);
      }

      projectCard.appendChild(projectName);
      projectCard.appendChild(projectLanguages);
      projectCard.appendChild(projectDescription);
      projectList.appendChild(projectCard);
    }
  }
};
