//const { takeCoverage } = require("v8");

const loader = document.querySelector('.loader')

const submitBtn = document.querySelector('.btn-enviar');
const name = document.querySelector('#Nome');
const email = document.querySelector('#Email');
const password = document.querySelector('#Senha');
const number = document.querySelector('#Número');

submitBtn.addEventListener('click', ()=> {
    if(name.value.length < 3){
        showAlert('Nome precisa de 3 caracteres');
    } else if(!email.value.length){
        showAlert('Digite seu email');
    } else if(password.value.length < 8){
        showAlert('Senha deve conter no mínimo 8 caracteres');
    } else if(!number.value.length){
        showAlert('Digite seu número de telefone');
    } else if(!Number(number.value)  || number.value.length < 11){
        showAlert('Número de telefone inválido');
    } else{
        loader.style.display = 'block';
        sendData('/inscrição', {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            seller: false
        })
    }
})

const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        console.log(response);
    })
}

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alerta');
    let alertMsg = document.querySelector('.alerta-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000)
}