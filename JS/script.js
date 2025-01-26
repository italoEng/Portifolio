function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();

    // Ajusta a idade se o aniversário ainda não ocorreu este ano
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

const dataNascimento = '1996-08-05';
document.getElementById('idade').textContent = calcularIdade(dataNascimento);

let slideIndex = 0; // Índice do slide atual
showSlide(slideIndex); // Exibe o slide inicial

function showSlide(n) {
    const slides = document.querySelectorAll('.perfil-imagem'); // Seleciona todas as imagens do slider
    slides.forEach((slide, index) => {
        slide.style.display = index === n ? 'block' : 'none'; // Exibe o slide atual e oculta os outros
    });
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.perfil-imagem').length) {
        slideIndex = 0; // Reinicia o índice se ultrapassar o número de slides
    }
    showSlide(slideIndex); // Exibe o próximo slide
}

// Altera de slide a cada 3 segundos (3000 milissegundos)
setInterval(nextSlide, 3000);


document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll(".animate-text");

    function restartAnimation(element) {
        element.style.animation = "none"; // Reseta a animação
        void element.offsetWidth; // Força o reflow (reinício do CSS)
        element.style.animation = ""; // Reaplica a animação definida no CSS
    }

    // Função para verificar visibilidade
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Monitorar o scroll
    window.addEventListener("scroll", () => {
        animateElements.forEach(element => {
            if (isElementInViewport(element)) {
                restartAnimation(element); // Reinicia a animação para elementos visíveis
            }
        });
    });
});


// efeito barra de navegação
let currentSection = 0;
const sections = document.querySelectorAll('section');
const totalSections = sections.length;
let isScrolling = false;

// Defina o intervalo de tempo para permitir outra rolagem (milissegundos)
const scrollDelay = 600; 

// Evento de rolagem com o mouse
window.addEventListener('wheel', (e) => {
  if (isScrolling) return; // Impede o scroll rápido

  isScrolling = true;

  if (e.deltaY > 0) {
    // Scroll para baixo
    currentSection = Math.min(currentSection + 1, totalSections - 1);
  } else {
    // Scroll para cima
    currentSection = Math.max(currentSection - 1, 0);
  }

  // Move para a seção correspondente
  scrollToSection(currentSection);

  // Define o tempo de espera antes de permitir outro scroll
  setTimeout(() => {
    isScrolling = false;
  }, scrollDelay);
});

function scrollToSection(index) {
  const section = sections[index];
  window.scrollTo({
    top: section.offsetTop, // Ajusta para a parte superior da seção
    behavior: 'smooth'
  });
}



// tema dark
function trocarIcone() {
    const iconeSol = document.getElementById('icone-sol');
    const iconeLua = document.getElementById('icone-lua');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const inicio = document.querySelector('.inicio button');


    if (iconeSol.classList.contains('show')) {
        // Troca para lua
        iconeSol.classList.remove('show');
        iconeSol.classList.add('hide');
        iconeLua.classList.remove('hide');
        iconeLua.classList.add('show');
        body.classList.remove('light-theme');  // Remove o tema claro
        body.classList.add('dark-theme');  // Adiciona o tema escuro
        navbar.classList.remove('light-theme');
        navbar.classList.add('dark-theme');
        inicio.classList.remove('light-theme');
        inicio.classList.add('dark-theme');
    } else {
        // Troca para sol
        iconeLua.classList.remove('show');
        iconeLua.classList.add('hide');
        iconeSol.classList.remove('hide');
        iconeSol.classList.add('show');
        body.classList.remove('dark-theme');  // Remove o tema escuro
        body.classList.add('light-theme');
        navbar.classList.remove('dark-theme');
        navbar.classList.add('light-theme');  // Adiciona o tema claro
        inicio.classList.remove('dark-theme');
        inicio.classList.add('light-theme');
    }
}

