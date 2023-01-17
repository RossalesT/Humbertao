const creatNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="C:\Users\Win10\Desktop\Loja Digital\Imagens\degraus.png" class="logo" alt="">
            <div class="nav-itens">
                <div class="pesquisa">
                    <input type="text" class="barra-pesquisa" placeholder="Pesquisa">
                    <button class="pesquisa-botao">Pesquisar</button>
                </div>
                <a href="inscrição.html"><img src="Imagens/user.png" alt=""></a>
                <a href="carrinho.html"><img src="Imagens/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="link-container">
            <li class="link-itens"><a href="index.html" class="link">Inicio</a></li>
            <li class="link-itens"><a href="sala.html" class="link">Sala</a></li>
            <li class="link-itens"><a href="banheiro.html" class="link">Banheiro</a></li>
            <li class="link-itens"><a href="quarto.html" class="link">Quarto</a></li>
            <li class="link-itens"><a href="jardim.html" class="link">Jardim</a></li>
        </ul>
    ` ;
} 

creatNav();