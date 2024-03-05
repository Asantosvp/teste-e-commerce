/*Selecionar modelo*/


document.addEventListener('DOMContentLoaded', function() {
    let imageLinks = document.querySelectorAll('[class^="image-link"]');

    imageLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let clickedImage = event.currentTarget;
            let image4 = document.getElementById('image4');

            // Remover a classe 'selected-image' de todas as imagens
            imageLinks.forEach(function(link) {
                link.classList.remove('selected-image');
            });

            // Adicionar a classe 'selected-image' à imagem clicada
            clickedImage.classList.add('selected-image');

            // Trocar a src da imagem 4 com a src da imagem clicada
            let clickedImageSrc = clickedImage.querySelector('img').src;
            image4.querySelector('img').src = clickedImageSrc;
        });
    });
});





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

/*botão - Opções de pagamentos*/
function clickFormaPagmento() {
    var dropdownContent = document.getElementById("box-toggle1");
    var btnPagamento = document.getElementById("btnPagamento");
    var miniSection = document.querySelector('.desc .main-container');

    dropdownContent.classList.toggle("show");


    if (!dropdownContent.classList.contains("show")) {
        btnPagamento.style.color = ""; 
        miniSection.style.height = "80rem";

    } else {
        btnPagamento.style.color = "#7A306C"; 
        miniSection.style.height = "100rem"; 


    }
}


function clickTrocasDevolucoes() {
    var dropdownContent = document.getElementById("box-toggle2");
    var btnTroca = document.getElementById("btnTroca");
    var miniSection = document.querySelector('.desc .main-container');
    dropdownContent.classList.toggle("show");

    if (!dropdownContent.classList.contains("show")) {
        btnTroca.style.color = ""; 
        miniSection.style.height = "80rem";
    
    } else {
        btnTroca.style.color = "#7A306C";
        miniSection.style.height = "100rem";  
    }
}
// ocultos
function clickDetalhes() {
    var dropdownContent = document.getElementById("box-toggle3");
    var btnDetalhes = document.getElementById("btnDetalhes");
    var miniSection = document.querySelector('.desc .main-container');
    dropdownContent.classList.toggle("show");

    if (!dropdownContent.classList.contains("show")) {
        miniSection.style.height = "80rem";
    
    } else {
        miniSection.style.height = "100rem";  
    }

}

function clickInfo() {
    var dropdownContent = document.getElementById("box-toggle4");
    var btnCaract = document.getElementById("btnCaract");
    var miniSection = document.querySelector('.desc .main-container');
    dropdownContent.classList.toggle("show");

    if (!dropdownContent.classList.contains("show")) {
        miniSection.style.height = "80rem";
    
    } else {
        miniSection.style.height = "100rem";  
    }

}




/*características do produto*/
function detalhesProduto() {
    var contentInfo1 = document.getElementById("content-info1");
    var contentInfo2 = document.getElementById("content-info2");
    var btnDetails = document.getElementById("btnDetails")
    var btnCharacteristics = document.getElementById("btnCharacteristics")

    btnCharacteristics.classList.add("Product-characteristics")
    btnCharacteristics.classList.remove("Product-details")

    btnDetails.classList.add("Product-details")
    btnDetails.classList.remove("Product-characteristics")

    contentInfo1.classList.add("show");
    contentInfo2.classList.remove("show")
}


function caracteristicaProduto() {
    var contentInfo1 = document.getElementById("content-info1");
    var contentInfo2 = document.getElementById("content-info2");
    var btnDetails = document.getElementById("btnDetails")
    var btnCharacteristics = document.getElementById("btnCharacteristics")

    btnCharacteristics.classList.add("Product-details")
    btnCharacteristics.classList.remove("Product-characteristics")

    btnDetails.classList.add("Product-characteristics")
    btnDetails.classList.remove("Product-details")
    
    contentInfo2.classList.add("show");
    contentInfo1.classList.remove("show");
    
}




// heart - coração
var btnHearts = document.querySelectorAll('.heart');

// Adicionar um evento de clique para cada botão de coração
btnHearts.forEach(function(btnHeart) {
    btnHeart.addEventListener('click', function() {
        
        if (btnHeart.innerText === '💜') { 
            
            btnHeart.innerText = '♡'; 
            btnHeart.style.fontSize = ''; 
            btnHeart.style.color = ''; 
            btnHeart.style.top = ''; 
        } else {
            
            btnHeart.innerText = '💜'; 
            btnHeart.style.fontSize = '24px'; 
            btnHeart.style.color = '#811BBF'; 
            btnHeart.style.top = '12px'; 
        }
    });

    // Ajustar o tamanho do coração de acordo com a classe .heart
    var computedStyle = getComputedStyle(btnHeart);
    btnHeart.style.fontSize = computedStyle.fontSize;
});

// slide 

var currentSlideIndex = 0;
var totalSlides = document.querySelectorAll('.carousel-img-content').length;

function showSlides() {
    var slides = document.querySelectorAll('.carousel-img-content');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }
    slides[currentSlideIndex].style.display = "flex";
    setTimeout(showSlides, 3000); // Altera o slide a cada 3 segundos
}

showSlides();

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselImg = document.querySelector('.carousel-img');

nextButton.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }
    showCurrentSlide();
});

prevButton.addEventListener('click', () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    showCurrentSlide();
});

function showCurrentSlide() {
    var slides = document.querySelectorAll('.carousel-img-content');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlideIndex].style.display = "flex";
}