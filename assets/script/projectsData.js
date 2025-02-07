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
        shortDescription: 'Sistema completo para uma empresa de ônibus ficticia. Atuei na maior parte do backend e em algumas do frontend.',
        image: `${imagePath}/fasttravel.png`,
        video: `${videoPath}/Fasttravel.mp4`,
        repository: `${githubUrl}/pi2-interface-onibus`,
        technologies: ['devicon-html5-plain', 'devicon-bootstrap-plain', 'devicon-express-original', 'devicon-prisma-original'],
    },
    {
        name: 'Biodex',
        description: `<span class='paragraph'></span>O BioDex é um sistema completo e integrado com três módulos principais:
            <br><br>
            📱 Aplicativo Mobile: Um app gamificado com login social, onde os visitantes podem escanear QR codes espalhados pelo parque para desbloquear informações sobre a fauna. Cada QR code lido resulta em pontos para o ranking mensal, incentivando a competitividade entre os visitantes.
            <br><br>
            🏞️🖥️ Totem de Visita: Localizado na entrada do parque, o totem permite que os visitantes se registrem de forma rápida e eficiente por meio de um formulário. Também é possível usar o app para escanear o QR code do totem e registrar a visita sem preencher o formulário manualmente.
            <br><br>
            📊📑 Painel Administrativo: O painel permite que os administradores visualizem informações sobre os visitantes, com a possibilidade de exportá-las em PDF ou Excel. Além disso, é possível gerenciar conteúdos relacionados ao parque, como informações sobre animais e pontos de interesse.
            <br>
            <br>
            🚀 Principais aprendizados e tecnologias aplicadas:
            <br><br>
            🖥️ Backend com arquitetura MVC e Express;<br>
            ⚛️ Desenvolvimento mobile com React Native;<br>
            🗄️ Gestão de banco de dados com Prisma ORM e PostgreSQL;<br>
            🔄 Comunicação em tempo real com Socket.io;<br>
            🔒 Implementação de autenticação JWT para segurança de usuários;<br>
            🔐 Login social com Google e Facebook;<br>
            🔑 Controle de permissões para contas totem, administradores e visitantes;<br>
            🌱 Gamificação e Educação Ambiental;<br>
            📈 Dashboard interativo e exportação de dados;<br>
            📊 Criação e leitura de QR code;<br>
            🏆 Ranking mensal dos visitantes;<br>
            🔄 Gerenciamento de estado com Zustand e React Query;<br>
            📱 Gerenciamento de telas com Expo Router;<br>
            🔑 Revalidação de tokens JWT com Axios;<br>
            📝 Formulários interativos visualmente;<br>
        `,
        shortDescription: 'Este projeto foi feito em uma parceria entre a prefeitura da minha cidade e a minha classe no curso. O BioDex é um sistema completo com três módulos principais: um aplicativo, um totem de visita e uma dashboard. Atuei no desenvolvimento do aplicativo mobile.',
        image: `${imagePath}/biodex.png`,
        video: `${videoPath}/biodex.mp4`,
        repository: `https://github.com/Programadorwolrd/pj3-Aplicativo-Municipal`,
        linkedinPost: 'https://www.linkedin.com/posts/leonardo-l-felix_reactnative-javascript-nodejs-activity-7273338719619682305-0yRi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCgdHcB29x_ng9jMByxj1qnMzIb_neiqyA',
        technologies: ['devicon-react-original', 'devicon-express-original', 'devicon-prisma-original'],
    },
    {
        name: 'geek diary',
        description: 'Aplicativo de anotações para jogos e séries',
        shortDescription: 'Um aplicativo onde o usuário pode cadastrar jogos e séries e fazer anotações sobre eles. Desenvolvi o aplicativo inteiro sozinho.',
        image: `${imagePath}/teste.png`,
        video: `${videoPath}/videoMobile.mp4`,
        repository: `${githubUrl}/geek-diary`,
        technologies: ['devicon-react-original', 'devicon-express-original', 'devicon-prisma-original'],
    }
]