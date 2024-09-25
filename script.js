// Get modal element for "Resumo"
var modal = document.getElementById("modal");
// Get open modal button for "Resumo"
var openModalBtn = document.getElementById("openModalBtn");
// Get close button for "Resumo" modal
var closeBtn = modal.querySelector(".close-btn");

// Open modal for "Resumo"
openModalBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    modal.style.display = "flex"; // Use flex to center the modal
});

// Close modal for "Resumo" when clicking the 'X' button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal for "Resumo" when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Get modal element for "Diferencial"
var modalDiferencial = document.getElementById("modalDiferencial");
// Get open modal button for "Diferencial"
var openModalDiferencialBtn = document.querySelector(".research-btn");
// Get close button for "Diferencial" modal
var closeBtnDiferencial = modalDiferencial.querySelector(".close-btn");

// Open modal for "Diferencial"
openModalDiferencialBtn.addEventListener("click", function(event) {
    event.preventDefault();
    modalDiferencial.style.display = "flex";
});

// Close modal for "Diferencial" when clicking the 'X' button
closeBtnDiferencial.addEventListener("click", function() {
    modalDiferencial.style.display = "none";
});

// Close modal for "Diferencial" when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modalDiferencial) {
        modalDiferencial.style.display = "none";
    }
});
// Get modal element for "Visão de Futuro"
var modalVisaoFuturo = document.getElementById("modalVisaoFuturo");
// Get open modal button for "Visão de Futuro"
var openModalVisaoFuturoBtn = document.querySelector(".outreach-btn");
// Get close button for "Visão de Futuro" modal
var closeBtnVisaoFuturo = modalVisaoFuturo.querySelector(".close-btn");

// Open modal for "Visão de Futuro"
openModalVisaoFuturoBtn.addEventListener("click", function(event) {
    event.preventDefault();
    modalVisaoFuturo.style.display = "flex";
});

// Close modal for "Visão de Futuro" when clicking the 'X' button
closeBtnVisaoFuturo.addEventListener("click", function() {
    modalVisaoFuturo.style.display = "none";
});

// Close modal for "Visão de Futuro" when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modalVisaoFuturo) {
        modalVisaoFuturo.style.display = "none";
    }
});
// Get modal element for "Objetivo Profissional"
var modalObjetivoProfissional = document.getElementById("modalObjetivoProfissional");
// Get open modal button for "Objetivo Profissional"
var openModalObjetivoProfissionalBtn = document.querySelector(".personal-btn");
// Get close button for "Objetivo Profissional" modal
var closeBtnObjetivoProfissional = modalObjetivoProfissional.querySelector(".close-btn");

// Open modal for "Objetivo Profissional"
openModalObjetivoProfissionalBtn.addEventListener("click", function(event) {
    event.preventDefault();
    modalObjetivoProfissional.style.display = "flex";
});

// Close modal for "Objetivo Profissional" when clicking the 'X' button
closeBtnObjetivoProfissional.addEventListener("click", function() {
    modalObjetivoProfissional.style.display = "none";
});

// Close modal for "Objetivo Profissional" when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modalObjetivoProfissional) {
        modalObjetivoProfissional.style.display = "none";
    }
});
// Get modal element for "Meus Contatos"
var modalMeusContatos = document.getElementById("modalMeusContatos");
// Get open modal button for "Meus Contatos"
var openModalMeusContatosBtn = document.querySelector(".header-right a");
// Get close button for "Meus Contatos" modal
var closeBtnMeusContatos = modalMeusContatos.querySelector(".close-btn");

// Open modal for "Meus Contatos"
openModalMeusContatosBtn.addEventListener("click", function(event) {
    event.preventDefault();
    modalMeusContatos.style.display = "flex";
});

// Close modal for "Meus Contatos" when clicking the 'X' button
closeBtnMeusContatos.addEventListener("click", function() {
    modalMeusContatos.style.display = "none";
});

// Close modal for "Meus Contatos" when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modalMeusContatos) {
        modalMeusContatos.style.display = "none";
    }
});
