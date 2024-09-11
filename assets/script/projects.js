import projects from './projectsData.js';
const projectContent = document.querySelector('.projects');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="Project Image">
            <div class="project-name">
                <h1>${project.name}</h1>
            </div>
        </div>
    `;
    projectContent.appendChild(projectElement);
})