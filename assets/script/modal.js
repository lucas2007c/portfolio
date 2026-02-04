const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');

const openModal = (project) => {
    modal.style.display = 'block';
    modalContainer.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h1>${project.name}</h1>
                    <i class="fa-solid fa-x" id="close-modal"></i>
                </div>
                <div class="modal-body">
                    <div class="modal-video">
                        <video src="${project.video}" controls autoplay></video>
                    </div>
                    <div class="modal-info">
                        <p>${project.description}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    ${project.repository ? `<a href=${project.repository} target="blank_">Repositório</a>`: ''}
                    ${project.linkedinPost ? `<a href=${project.linkedinPost} target="blank_">LinkedIn</a>` : ''}
                </div>
            </div>
    `;

    const closeModalIcon = document.getElementById('close-modal');
    closeModalIcon.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContainer.innerHTML = '';
    });
}

export { openModal };