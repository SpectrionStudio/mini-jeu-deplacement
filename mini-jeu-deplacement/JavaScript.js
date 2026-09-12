// Récupérer l'élément du personnage
let personnage = document.getElementById("personnage");

// Position initiale
let x = 225;  // Position horizontale du personnage
let y = 225;  // Position verticale du personnage

// Fonction pour déplacer le personnage
function deplacerPersonnage() {
    personnage.style.left = x + "px";
    personnage.style.top = y + "px";
}

// Écouteur d'événements pour les touches directionnelles
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
        y -= 10;  // Déplacer vers le haut
    } else if (e.key === "ArrowDown") {
        y += 10;  // Déplacer vers le bas
    } else if (e.key === "ArrowLeft") {
        x -= 10;  // Déplacer vers la gauche
    } else if (e.key === "ArrowRight") {
        x += 10;  // Déplacer vers la droite
    }
    
    // Appeler la fonction pour mettre à jour la position
    deplacerPersonnage();
});
