const productContainer = [...document.querySelectorAll('.container-produtos')];
const nxtBtn = [...document.querySelectorAll('.pro-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimennstions = item.getBoundingClientRect();
    let containerWidth = containerDimennstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
