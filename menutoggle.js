document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");
  const logo = document.getElementById("logo");

  menuToggle.addEventListener("click", function () {
    menuList.classList.toggle("show");
    logo.classList.toggle("hidden");
  });
});

// Função para redirecionar sem mostrar o nome do arquivo na URL
function redirectToHomePage() {
    var stateObj = { page: "index" };
    history.pushState(stateObj, "index", "/");
    window.location.href = "/";
}

// Vincular a função ao clique do link
document.getElementById("logo").addEventListener("click", function (event) {
    event.preventDefault();
    redirectToHomePage();
});


// Mostra o iframe do github
document.getElementById('openGitHub').addEventListener('click', function() {
  var githubIframe = document.getElementById('githubIframe');
  if (githubIframe.style.display === 'none') {
      githubIframe.style.display = 'block'; // Mostrar o iframe
      githubIframe.src="https://github.com/JoaoVictorMCosta";
  } else {
      githubIframe.style.display = 'none'; // Ocultar o iframe se já estiver visível
      githubIframe.src=''; //Limpa o src e para a pagina de ser exibida
  }
});