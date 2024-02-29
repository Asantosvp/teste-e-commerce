/*botão selecione a cor*/
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.color-button button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });
});

/*botão selecione tamanho*/
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.size-button button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });
});

/*botação: adicionar ao carrinho*/

/*botação: adicionar calcular frete*/

/*Lista suspensa: Opções de pagamentos*/
function toggleDropwnList() {
    var dropdownListMenu = document.getElementById("dropdownList-menu");
    if (dropdownListMenu.style.display === "none") {
        dropdownListMenu.style.display = "block"
    } else {
        dropdownListMenu.style.display = "none";
    }
}

/*Lista suspensa: Trocas e Devoluções*/
function toggleExchangeDropdownList() {
    var exchangeDropdownListMenu = document.getElementById("exchangeDropdownList-menu");
    if (exchangeDropdownListMenu.style.display === "none") {
        exchangeDropdownListMenu.style.display = "block"
    } else {
        exchangeDropdownListMenu.style.display = "none";
    }
}