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
  var socialIframe = document.getElementById('socialIframe');
  if (socialIframe.style.display === 'none') {
      socialIframe.style.display = 'block'; // Mostrar o iframe
      socialIframe.src="http://www.github.com/JoaoVictorMCosta";
  } else {
      socialIframe.style.display = 'none'; // Ocultar o iframe se já estiver visível
      socialIframe.src=''; //Limpa o src e para a pagina de ser exibida
  }
});
  

// Mostra o iframe do linkedin
document.getElementById('openLinkedIn').addEventListener('click', function() {
  var socialIframe = document.getElementById('socialIframe');
  if (socialIframe.style.display === 'none') {
      socialIframe.style.display = 'block'; // Mostrar o iframe
      socialIframe.src="http://www.linkedin.com/in/joaovictormdacosta/";
  } else {
      socialIframe.style.display = 'none'; // Ocultar o iframe se já estiver visível
      socialIframe.src=''; //Limpa o src e para a pagina de ser exibida
  }
});