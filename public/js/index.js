const conteudo = {
    links: [
        {
            titulo: 'Home',
            href: '#myCarousel'
        },
        {
            titulo: 'Sobre',
            href: '#sobre'

        },
        {
            titulo: 'Conhecimentos',
            href: '#conhecimentos',
        },
        {


            titulo: 'Benefícios',
            href: '#beneficios'
        },
        {
            titulo: 'Depoimentos',
            href: '#depoimentos'
        },
        {

            titulo: 'Blog',
            href: '#blog'
        }
    ],
    icone: {
        textoAlt: 'Logo terapeuta de valor',
        urlImage: './public/assets/logo-header.png',
        linkLogo: '#'
    },
    tema: {
        light: false,
        dark: true,
    },
    topicos: {
        sobre: {
            tituloPrincipal: 'Outro Titulo',
            subtituloPrincipal: 'Meu subtitulo principal',
            descricaoPrincipal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate eveniet eum, ea qui praesentium blanditiis itaque, error deserunt exercitationem, nesciunt ratione! Odit repellat ad, quibusdam blanditiis neque veritatis commodi. Enim officia nostrum delectus doloremque et repudiandae asperiores at suscipit, iste ipsam aspernatur, vel distinctio quasi saepe.Nemo itaque quisquam accusamus deleniti provident, optio odit nam nostrum aut consectetur deserunt. Doloremque, repudiandae tenetur eligendi ipsum natus, nisi esse hic provident laudantium repellat at nam aspernatur.Optio odio sint nesciunt accusantium mollitia rem nulla error animi eligendi doloribus, fugit quos velit.',
            botao: {
                texto: '',
                url: ''
            },
            imagem: {
                textoAlt: '',
                url: ''
            }
        }
    },
    fonts: {
        body: 'Poppins, sans-serif'
    }
}

function montarLinks() {
    const ul = document.getElementById('links-menu');
    for (const link of conteudo.links) {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = link.href;
        a.innerText = link.titulo;
        li.appendChild(a);
        ul.appendChild(li);
    }
}

function trocarLogo() {
    const logoLink = document.getElementById('logo-link');

    const imageLogo = document.createElement('img');
    imageLogo.src = conteudo.icone.urlImage;
    imageLogo.alt = conteudo.icone.textoAlt;
    imageLogo.style = 'max-width: 50px; margin-left:20px; paddind:10px;'

    logoLink.href = conteudo.icone.linkLogo;
    logoLink.appendChild(imageLogo);
}
function aplicaFontePadrao() {
    document.querySelector('body').style = `font-family: ${conteudo.fonts.body}`
}

function aplicarTemaSalvoStorage() {
    const tema = localStorage.getItem('tema') || 'dark';

    document.getElementById('toogle-theme').checked = (tema == 'dark');
    document.querySelector('body').setAttribute('data-bs-theme', tema);
}
document.addEventListener('DOMContentLoaded', () => {
    montarLinks();
    trocarLogo();
    // montarTextosPrincipais();
    aplicaFontePadrao();
    aplicarTemaSalvoStorage();
})

