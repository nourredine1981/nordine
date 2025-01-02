let score = 0;

function collecterObjet() {
    score += 10; // Ajoute 10 points pour chaque objet collecté
    document.getElementById("score").innerText = score;
    document.getElementById("message").innerText = "Vous avez collecté un objet ! Score actuel : " + score;
}

function terminerJeu() {
    document.getElementById("message").innerText = "Jeu terminé ! Votre score final est : " + score;
    // Désactive les boutons après la fin du jeu
    document.querySelector("button[onclick='collecterObjet()']").disabled = true;
    document.querySelector("button[onclick='terminerJeu()']").disabled = true;
}
