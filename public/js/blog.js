const posts = [
    {
        titulo: 'Bem-estar emocional',
        duracao: '3 min de leitura',
        descricao: 'Por que você deve procurar ajuda para o seu bem-estar emocional? Leia esse artigo e descubra.',
        imagemURL: './public/assets/blog-img/artigo1.jpg',
        altImagem: 'balões amarelos felizes',
        idArtigo: 1
    },
    {
        titulo: 'As pessoas não buscam ajuda emocional',
        duracao: '6 min de vídeo',
        descricao: 'Se você precisa de ajuda hoje, não deixe para buscar amanha . Pois amanha é muito tempo.',
        imagemURL: './public/assets/blog-img/artigo2.jpg',
        altImagem: '',
        idArtigo: 2
    },
    {
        titulo: 'Como sair da prisão emocional e alcançar seus objetivos',
        duracao: '3 min de leitura',
        descricao: 'Você já parou para refletir sobre os ciclos que se repetem em sua vida?',
        imagemURL: './public/assets/blog-img/artigo3.jpg',
        altImagem: '',
        idArtigo: 3
    },
    {
        titulo: 'Até quando você vai procrastinar?',
        duracao: '2 min de vídeo',
        descricao: 'A vida passa muito rápido então não fique preso nesse ciclo vicioso...',
        imagemURL: './public/assets/blog-img/artigo4.jpg',
        altImagem: '',
        idArtigo: 4
    },
];


function montarTopicos() {
    const divTopicos = document.getElementById('topicos');

    for(const post of posts) {
        const card = document.createElement('div');
        card.classList.add('col-md-6');
        card.innerHTML = `
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-secondary-subtle">
                <div class="col p-4 d-flex flex-column position-static" title="click para ler mais sobre o artigo.">
                    <h4 class="mb-0">${post.titulo}</h4>
                    <p class="mb-1 text-body-tertiary small">${post.duracao}</p>
                    <p class="card-text mb-auto text-body-secondary">${post.descricao}</p>
                    <a href="./public/blog/artigo.html?i=${post.idArtigo}" class="icon-link gap-1 icon-link-hover stretched-link">
                    Continue lendo
                    <svg class="bi">
                        <use xlink:href="#chevron-right" />
                    </svg>
                    </a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img src="${post.imagemURL}" alt="${post.altImagem}" class="img-artigo-blog img-fluid">
                </div>
            </div>
        `;

        divTopicos.appendChild(card);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    montarTopicos();
})