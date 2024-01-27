let darkModeBtn = document.getElementById("darkModeBtn");
let body = document.getElementById("body");
let  nouveau = "Activer le mode sombre";
function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")){
        nouveau = "Désactiver le mode sombre";
    }
    else{
        nouveau = "Activer le mode sombre";
    }
    darkModeBtn.textContent = nouveau;
}

darkModeBtn.addEventListener("click", toggleDarkMode);


