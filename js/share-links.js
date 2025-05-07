// Attache un écouteur d'événement pour exécuter le script lorsque le DOM est entièrement chargé
// Cela garantit que tous les éléments HTML sont accessibles par JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Récupère l'URL actuelle de la page et l'encode pour l'utiliser dans une URL de partage
    // encodeURIComponent permet d'éviter les problèmes avec les caractères spéciaux dans l'URL.
    const pageUrl = encodeURIComponent(window.location.href);
    // Récupère le titre de l'article (élément avec l'ID 'article-title') et l'encode pour l'utiliser dans une URL de partage
    // Cela permet d'afficher le titre de l'article dans le partage sur les réseaux sociaux.
    const pageTitle = encodeURIComponent(document.getElementById('article-title').textContent);

    // Fonction utilitaire pour appliquer l'ouverture dans un nouvel onglet et la sécurité sur un lien
    // Ajoute target='_blank' pour ouvrir le lien dans un nouvel onglet
    // Ajoute rel='noopener' pour éviter les failles de sécurité potentielles
    function setTargetBlank(link) {
        if(link) {
            link.setAttribute('target', '_blank'); // Ouvre le lien dans un nouvel onglet
            link.setAttribute('rel', 'noopener');  // Sécurise l'ouverture du nouvel onglet
        }
    }

    // Sélectionne le lien de partage Facebook par son aria-label
    const fb = document.querySelector('a[aria-label="Share on Facebook"]');
    // Si le bouton Facebook existe, définit dynamiquement son href pour partager la page sur Facebook
    // puis applique l'ouverture dans un nouvel onglet
    if(fb) {
        fb.href = `https://www.facebook.com/share.php?u=${pageUrl}`;
        setTargetBlank(fb);
    }

    // Sélectionne le lien de partage Twitter par son aria-label
    const tw = document.querySelector('a[aria-label="Share on Twitter"]');
    // Si le bouton Twitter existe, définit dynamiquement son href pour partager la page sur Twitter avec le titre
    // puis applique l'ouverture dans un nouvel onglet
    if(tw) {
        tw.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
        setTargetBlank(tw);
    }

    // Sélectionne le lien de partage LinkedIn par son aria-label
    const li = document.querySelector('a[aria-label="Share on LinkedIn"]');
    // Si le bouton LinkedIn existe, définit dynamiquement son href pour partager la page sur LinkedIn avec le titre
    // puis applique l'ouverture dans un nouvel onglet
    if(li) {
        li.href = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`;
        setTargetBlank(li);
    }

    // Sélectionne le lien de partage WhatsApp par son aria-label
    const wa = document.querySelector('a[aria-label="Share on WhatsApp"]');
    // Si le bouton WhatsApp existe, définit dynamiquement son href pour partager la page sur WhatsApp avec le titre
    // puis applique l'ouverture dans un nouvel onglet
    if(wa) {
        wa.href = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;
        setTargetBlank(wa);
    }
}); 