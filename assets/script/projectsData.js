const githubUrl = 'https://github.com/lucas2007c';
const imagePath = '../assets/img';
const videoPath = '../assets/video';
export default [
    {
        name: 'fasttravel',
        description: `Este projeto é um sistema completo para uma empresa de ônibus ficticia, foi feito em grupo com mais 2 pessoas para o projeto integrador 2 do curso, embora tenha ajudado em algumas partes do frontend, fiquei responsável por todo o backend. o projeto possui 3 partes:
        <br>
        <br>
        -Site público<br>
            <span class='paragraph'></span>Este site fala sobre a empresa e como ela funciona. Aqui o passageiro pode ver as linhas cadastradas, recarregar o cartão, conferir o saldo e ver o seu histórico de viagens.
            <br>
            <br>
        -Dashboard<br>
            <span class='paragraph'></span>A dashboard é uma ferramenta para os funcionários da empresa, onde eles podem controlar as linhas, passageiros, motoristas e ônibus cadastrados.
            <br>
            <br>
        -Tela do ônibus<br>
            <span class='paragraph'></span>Esta é a tela que fica na catraca do ônibus, onde o passageiro encosta o cartãoe caso haja saldo, a catraca é liberada.
            <br>
            <br>
        O projeto foi feito com as tecnologias: HTML, CSS, Bootstrap, JavaScript, Node.js, Express, Prisma e MySQL.
        `,
        image: `${imagePath}/fasttravel.png`,
        video: `${videoPath}/Fasttravel.mp4`,
        repository: `${githubUrl}/pi2-interface-onibus`,
        technologies: ['devicon-html5-plain', 'devicon-bootstrap-plain', 'devicon-express-original', 'devicon-prisma-original'],
    },
    {
        name: 'Biodex',
        description: 'Aplicativo feito para a prefeitura de caraguatatuba',
        image: `${imagePath}/teste.png`,
        video: `${videoPath}/videoMobile.mp4`,
        repository: `${githubUrl}/pj3-Aplicativo-Municipal`,
        technologies: ['devicon-react-original', 'devicon-express-original', 'devicon-prisma-original'],
    },
    {
        name: 'geek diary',
        description: 'Aplicativo de anotações para jogos e séries',
        image: `${imagePath}/teste.png`,
        video: `${videoPath}/videoMobile.mp4`,
        repository: `${githubUrl}/geek-diary`,
        technologies: ['devicon-react-original', 'devicon-express-original', 'devicon-prisma-original'],
    }
]