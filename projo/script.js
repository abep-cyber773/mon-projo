document.addEventListener('DOMContentLoaded', function() {
    // ---- Gestion du menu de navigation pour mobile (menu burger) ----
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Basculer la navigation
            nav.classList.toggle('nav-active');

            // Animer les liens
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            // Basculer l'animation du burger
            burger.classList.toggle('toggle');
        });
    }

    // ---- Gestion du formulaire de contact ----
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi réel du formulaire

            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message-text').value; // Changé l'ID ici

            if (nom && email && message) {
                // Ici, vous enverriez normalement les données à un serveur
                // Pour cet exemple, nous allons juste afficher un message de succès
                formFeedback.textContent = `Merci ${nom}, votre message a été envoyé !`;
                formFeedback.style.color = '#28a745'; // Vert pour le succès
                contactForm.reset(); // Réinitialiser le formulaire
            } else {
                formFeedback.textContent = 'Veuillez remplir tous les champs.';
                formFeedback.style.color = '#dc3545'; // Rouge pour l'erreur
            }
        });
    }

    // Appeler les fonctions pour les activer
    navSlide();
});