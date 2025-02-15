// VARIABLES GLOBALES 
let compteur = 0;

document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {
    // affichage du nom 
    document.querySelector(".name").innerHTML = data[compteur].bulle;

    // Mettre en highlight
    // document.querySelector(".devant").classList.remove("devant");
    // if (compteur == 2 && compteur == 4) {
    //     document.querySelector(".froggySad").classList.add("disparu");
    //     document.querySelector(".froggy").classList.remove("disparu");
    // }
    document.querySelector(".devant").classList.remove("devant");

    if (data[compteur].invisible) {
        data[compteur].invisible.forEach(e => {
            document.querySelector(e).classList.add("disparu");
        });
    }
    
    data[compteur].visible.forEach(e => {
        document.querySelector(e).classList.add("devant");
        document.querySelector(e).classList.remove("disparu");
    });

    // changement de page 
    if (data[compteur].fin == "") {
        document.querySelector(".boite").addEventListener("click", changePage);
        function changePage() {
            window.location.href = "labyrinthe.html";
        }
    }

    // Affichage lettres par lettres 
    let texte = data[compteur].texte;
    let position = 1;
    let zone = document.querySelector(".texte");

    let timer = setInterval(() => {
        zone.innerText = texte.slice(0, position++);
        if (position > texte.length) {
            clearInterval(timer);
        }
    })

    compteur++;

}