document.addEventListener("DOMContentLoaded", function(){

  // LOAD HEADER
  fetch("layout/userNavigation.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("nav-placeholder").innerHTML = data;

    updateNavbar(); // important
  });

  function updateNavbar(){

const employee = localStorage.getItem("loggedUser");
const admin = localStorage.getItem("adminLogged");

const loginLink = document.getElementById("loginLink");
const logoutLink = document.getElementById("logoutLink");
const contentLink = document.getElementById("contentLink");
const adminPanelLink = document.getElementById("adminPanelLink");

if(employee){

if(loginLink) loginLink.style.display="none";
if(logoutLink) logoutLink.style.display="block";
if(contentLink) contentLink.style.display="block";
if(adminPanelLink) adminPanelLink.style.display="none";

}

else if(admin){

if(loginLink) loginLink.style.display="none";
if(logoutLink) logoutLink.style.display="block";
if(contentLink) contentLink.style.display="block";
if(adminPanelLink) adminPanelLink.style.display="block";

}

else{

if(loginLink) loginLink.style.display="block";
if(logoutLink) logoutLink.style.display="none";
if(contentLink) contentLink.style.display="none";
if(adminPanelLink) adminPanelLink.style.display="none";

}

}

  // LOAD FOOTER
  fetch("layout/userFooter.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("footer-placeholder").innerHTML = data;

  });

});


/* AUTH BUTTON LOGIC */

function setupAuthButton(){

  const authBtn = document.getElementById("authBtn");

  const session =
    JSON.parse(localStorage.getItem("loggedInUser"));

  if(session){

    authBtn.innerHTML =
      '<i class="fa-solid fa-right-from-bracket"></i> Logout';

    authBtn.onclick = function(){

      localStorage.clear();

      alert("Logged out successfully");

      window.location.href =
        "../index.html";

    };

  }

  else{

    authBtn.innerHTML =
      '<i class="fa-solid fa-user"></i> Login';

    authBtn.onclick = function(){

      window.location.href =
        "../Login.html";

    };

  }

}