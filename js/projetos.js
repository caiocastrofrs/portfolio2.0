var projetos = [
    {
        urlImg: "./img/print-sites/idles-print.png",
        titulo: "IDLES",
        descricao: "Esse projeto foi o primeiro site que desenvolvi em sala de aula seguindo alguns requisitos que o professor passou. Ele tinha o objetivo de validar nosso conhecimento e fiquei bem satisfeito com o resultado.",
        gitPage: "https://caiocastrofrs.github.io/projeto-front-end/",
        gitRepo: "https://github.com/caiocastrofrs/projeto-front-end"
    },
    {
        urlImg: "./img/print-sites/social-proof.png",
        titulo: "Social Proof",
        descricao: "Social Proof foi um desafio do site Frontend Mentor que o objetivo é replicar o site dado. Eu consegui completar a maior parte, exceto a responsividade, que é um topico bem importante mas ainda não tenho o conhecimento necessário. O site está sujeiro à mudanças.",
        gitPage: "https://caiocastrofrs.github.io/site-social-proof-projeto/",
        gitRepo: "https://github.com/caiocastrofrs/site-social-proof-projeto"
    },
    {
        urlImg: "./img/print-sites/avaliacao.png",
        titulo: "Avaliação de Front-end",
        descricao: "Avaliação passada em sala de aula. Formamos um grupo e juntos fomos construindo o site se baseando nos requisitos dado pelo professor.Tinhamos um tempo estimado de 1h30min para trabalhar nesse site então conseguimos concluir isso nesse tempo.",
        gitPage: "https://caiocastrofrs.github.io/avaliacao-projeto/",
        gitRepo: "https://github.com/caiocastrofrs/avaliacao-projeto"
    },
    {
        urlImg: "./img/print-sites/albums.png",
        titulo: "Site de albuns",
        descricao: "Site que fiz para validar os conhecimentos dado em aula. Apenas organizei alguns dos álbuns que mais ouvi na semana, então o código dele é bem simples.",
        gitPage: "https://caiocastrofrs.github.io/site-album/",
        gitRepo: "https://github.com/caiocastrofrs/site-album"
    },
    {
        urlImg: "./img/print-sites/dh-zoom.png",
        titulo: "Site DH - Zoom",
        descricao: "Primeiramente a ideia desse site não foi minha, foi de um colega de sala, o Nelson Kobayashi. O site é apenas o kit do curso onde vai ter o horário das aulas, os professores e o link para o Zoom.",
        gitPage: "https://caiocastrofrs.github.io/site-dh-zoom/",
        gitRepo: "https://github.com/caiocastrofrs/site-dh-zoom"
    },
    {
        urlImg: "./img/print-sites/frontend-mentor-cards.png",
        titulo: "3-column preview card component",
        descricao: "Projeto feito como desafio do site Front-end Mentor Gostei muito de fazê-lo pois me desafiei a trabalhar com os medias queries, que ainda é uma novidade para mim.",
        gitPage: "https://caiocastrofrs.github.io/site-carros/",
        gitRepo: "https://github.com/caiocastrofrs/site-carros"
    },
    {
        urlImg: "./img/print-sites/frontend-mentor-business.png",
        titulo: "Business",
        descricao: "Projeto feito como desafio do site Front-end Mentor. Desafio excelente para estudar flexbox e grid layout. O momento mais díficil foi deixar a imagem roxa, eu sinto que fui pelo caminho mais dificil.",
        gitPage: "https://caiocastrofrs.github.io/site-business/",
        gitRepo: "https://github.com/caiocastrofrs/site-business"
    },
    {
        urlImg: "./img/print-sites/site-order.png",
        titulo: "Order",
        descricao: "Desafio do Frontend Mentor para fixar conteúdo de HTML & CSS.",
        gitPage: "https://caiocastrofrs.github.io/site-order/",
        gitRepo: "https://github.com/caiocastrofrs/site-order"
    },
    {
        urlImg: "./img/print-sites/dhfilmes.png",
        titulo: "Checkpoint Front-End II",
        descricao: "Esse é meu projeto mais desenvolvido. Nele consegui utilizar todo meu conhecimento em HTML & CSS e principalmente DOM. É um projeto avaliativo do curso da Digital House, o objetivo era criar um site que possa adicionar cards na página. Meu tema escolhido foi filmes.",
        gitPage: "https://caiocastrofrs.github.io/CheckpointIndividual/",
        gitRepo: "https://github.com/caiocastrofrs/CheckpointIndividual"
    }
];

projetos.forEach(projeto => {
    let listaProjetos = document.getElementById('listaProjetos');
    let divProjeto = document.createElement('div');
    let divImg = document.createElement('div');
    let img = document.createElement('img');
    let tituloH3 = document.createElement('h3');
    let descricaoP = document.createElement('p');
    let divBotoes = document.createElement('div');
    let btnGitPage = document.createElement('button');
    let btnGitRepo = document.createElement('button');
    let linkGitPage = document.createElement('a');
    let linkGitRepo = document.createElement('a');
    divProjeto.classList.add('div-projeto');
    divImg.classList.add('img-projeto');
    divBotoes.classList.add('div-botao');

    img.src = projeto.urlImg;
    tituloH3.innerText = projeto.titulo;
    descricaoP.innerText = projeto.descricao;
    btnGitPage.innerHTML = "GitPage";
    btnGitRepo.innerHTML = "Repositório";
    linkGitPage.href = projeto.gitPage;
    linkGitRepo.href = projeto.gitRepo;


    divImg.appendChild(img);
    linkGitPage.appendChild(btnGitPage);
    linkGitRepo.appendChild(btnGitRepo);
    divBotoes.appendChild(linkGitPage);
    divBotoes.appendChild(linkGitRepo);
    
    divProjeto.appendChild(divImg);
    divProjeto.appendChild(tituloH3);
    divProjeto.appendChild(descricaoP);
    divProjeto.appendChild(divBotoes);
    
    listaProjetos.appendChild(divProjeto);
});
