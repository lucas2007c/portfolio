const githubUrl = 'https://github.com/lucas2007c';
const imagePath = './assets/img';
const videoPath = './assets/video';
export default [
    {
        name: 'fasttravel',
        description: `<span class='paragraph'></span>Este projeto é um sistema completo para uma empresa de ônibus ficticia, foi feito em grupo com mais 2 pessoas para o projeto integrador 2 do curso, embora tenha colaborado em algumas partes do frontend, fiquei responsável por maior parte do backend. o projeto possui 3 partes:
        <br>
        <br>
        <span class="white">-Site público</span><br>
            <span class='paragraph'></span>Este site fala sobre a empresa e como ela funciona. Aqui o passageiro pode ver as linhas cadastradas, recarregar o cartão, conferir o saldo e ver o seu histórico de viagens.
            <br>
            <br>
        <span class="white">-Dashboard</span><br>
            <span class='paragraph'></span>A dashboard é uma ferramenta para os funcionários da empresa, onde eles podem controlar as linhas, passageiros, motoristas e ônibus cadastrados.
            <br>
            <br>
        <span class="white">-Tela do ônibus</span><br>
            <span class='paragraph'></span>Esta é a tela que fica na catraca do ônibus, onde o passageiro aproxima o cartão, se houver saldo, a catraca é liberada automaticamente, além de mais dois casos: catraca totalmente liberada para idosos e gratuita duas vezes por dia para estudantes.
            <br>
            <br>
        <span class="white">Tecnologias utilizadas:</span><br>
            <span class="white">-Frontend:</span> HTML, CSS, Bootstrap, JavaScript, EJS, Express e SweetAlert2
            <br>
            <span class="white">-Backend:</span> Node.js, Express, Prisma, MySQL, JWT e Bcrypt<br>
        `,
        shortDescription: 'Sistema completo para uma empresa de ônibus ficticia. Atuei na maior parte do backend e em algumas do frontend.',
        image: `${imagePath}/fasttravel.png`,
        video: `${videoPath}/fasttravel.mp4`,
        repository: `${githubUrl}/pi2-interface-onibus`,
        linkedinPost: `https://www.linkedin.com/posts/lucascarneirog_nodejs-express-prisma-activity-7327777792257925122-Db9c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCgdHcB29x_ng9jMByxj1qnMzIb_neiqyA`,
        technologies: ['devicon-html5-plain', 'devicon-bootstrap-plain', 'devicon-express-original', 'devicon-prisma-original'],
    },
    {
        name: 'Biodex',
        description: `<span class='paragraph'></span>Um sistema completo feito em parceria com a prefeitura de caraguatatuba para ser utilizado no Parque Municipal do Juqueriquerê. O projeto foi separado em partes e desenvolvido por toda a turma. Os três módulos principais do sistema:
            <br><br>
            📱 <span class="white">Aplicativo Mobile:</span> Um app gamificado com login social, onde os visitantes podem escanear QR codes espalhados pelo parque para desbloquear informações sobre a fauna. Cada QR code lido resulta em pontos para o ranking mensal, incentivando a competitividade entre os visitantes.
            <br><br>
            🏞️🖥️ <span class="white">Totem de Visita:</span> Localizado na entrada do parque, o totem permite que os visitantes se registrem de forma rápida e eficiente por meio de um formulário. Também é possível usar o app para escanear o QR code do totem e registrar a visita sem preencher o formulário manualmente.
            <br><br>
            📊📑 <span class="white">Painel Administrativo:</span> O painel permite que os administradores visualizem informações sobre os visitantes, com a possibilidade de exportá-las em PDF ou Excel. Além disso, é possível gerenciar conteúdos relacionados ao parque, como informações sobre animais e pontos de interesse.
            <br>
            <br>
            🚀 <span class="white">Principais aprendizados e tecnologias aplicadas:</span>
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
        description: `<span class="paragraph"></span>Um app onde você pode adicionar seus jogos e séries favoritos e fazer uma variedade de anotações sobre ele. Desenvolvi este projeto para a "prova" final da matéria de Desenvolvimento Mobile em 2024, Onde coloquei em prática tudo que aprendi ao longo do semestre.
                            <br><br>
                            <span class="white">Principais funcionalidades:</span>
                            <br>
                            - Crud de jogos e séries com validação de dados via Zod<br>
                            - Login com jwt via cookies e senhas criptografadas<br>
                            - Sistema de pesquisa e favoritos<br>
                            - Testes unitários com Jest e Supertest
                            <br><br>
                            <span class="white">Tecnologias utilizadas:</span>
                            <br>
                            <span class="white">-Frontend:</span> Expo, React Native, React Navigation, Axios e Zustand.
                            <br>
                            <span class="white">-Backend:</span> Node.js, Express, Prisma, Mysql, Zod, JWT, bcrypt, Jest e Supertest
                            <br>
                            <span class="white">-Deploy:</span> Render para o backend e banco de dados
                            `,
        shortDescription: 'Um aplicativo onde o usuário pode cadastrar jogos e séries e fazer anotações sobre eles. Projeto solo.',
        image: `${imagePath}/geekdiary.png`,
        video: `${videoPath}/geekdiary.mp4`,
        repository: `${githubUrl}/geek-diary`,
        linkedinPost: `https://www.linkedin.com/posts/lucascarneirog_reactnative-nodejs-express-activity-7327781805053419522-cIDy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCgdHcB29x_ng9jMByxj1qnMzIb_neiqyA`,
        technologies: ['devicon-react-original', 'devicon-express-original', 'devicon-prisma-original'],
    },
]