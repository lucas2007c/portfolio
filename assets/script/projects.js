import projects from './projectsData.js';
const projectContent = document.querySelector('.projects');
import { openModal } from './modal.js';

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.addEventListener('click', () => {
        openModal(project);
    });

    const projectTechnologies = project.technologies.map(technology => {
        return `<i class=${technology}></i>`;
    })

    projectElement.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="Project Image">
            <div class="project-name">
                <h1>${project.name}</h1>
                <div class="project-icons">
                    ${projectTechnologies.join('')}
                </div>
            </div>
            <div class="project-short-description">
                    <p>${project.shortDescription}</p>
            </div>
        </div>
    `;
    projectContent.appendChild(projectElement);
})