var btnRemover = document.getElementsByClassName('btn-remover') 
console.log(btnRemover)

for (var i = 0; i < btnRemover.length; i++) {
    var button = btnRemover[i]
    button.addEventListener('click', funtion(event) {
        var buttonClicked = event.target
        buttonClicked.parentElemnt.parentElemnt.parentElemnt.remove()
    })
}