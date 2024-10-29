import projects from './projectsData.js';
const projectContent = document.querySelector('.projects');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const projectTechnologies = project.technologies.map(technology => {
        return `<i class=${technology}></i>`;
    })

    console.log(projectTechnologies);


    projectElement.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="Project Image">
            <div class="project-name">
                <h1>${project.name}</h1>
                <div class="project-icons">
                    ${projectTechnologies.join('')}
                </div>
            </div>
        </div>
    `;
    projectContent.appendChild(projectElement);
})