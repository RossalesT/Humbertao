const productImages = document.querySelectorAll('.imagens-produto img');
const productImageSlide = document.querySelector('.slider-imagem');

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.getElementsByClassName.backgroundImage = `url('{item.src})`;
        activeImageSlide = i;
    })
})

// tentei fazer a 'seleção' de imagens, porém nao deu certo :/

const sizeBtns = document.querySelectorAll('.botao-tamanho');
let checkBtn = 0;

sizeBtns.forEach((item, i ) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i
    })
})