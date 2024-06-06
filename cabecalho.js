// cabecalho.js
document.addEventListener("DOMContentLoaded", function() {
    const cabecalhoContainer = document.getElementById("cabecalho-container");
    cabecalhoContainer.innerHTML = `
    <header>
    <nav class="navbar bg-dark navbar-dark navbar-expand-sm sticky-top">
        <div class="container">
            <a href="index.html" class="navbar-brand d-flex align-items-center">
                <i class="bi-car-front-fill fs-1 me-2"></i><strong>DESCUBRA O FUTURO DA MOBILIDADE</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menuNavbar">
                <div class="navbar-nav ms-auto">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="listacarro.html" class="nav-link">Guia de modelos</a>
                    <a href="#" class="nav-link">Cuidados essenciais</a>
                    <a href="#" class="nav-link">Testemunhos </a>
                    <a href="#" class="nav-link">FAQ</a>
                </div>
            </div>

        </div>
    </nav>
</header>
    `;
});