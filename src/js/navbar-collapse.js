document.addEventListener("DOMContentLoaded", function() {
    const mainNavbar = document.getElementById('main-navbar');
    const collapsePoint = 100; // Punto di scroll in pixel per attivare la classe "collapsed"
    const hidePoint = 500; // Punto di scroll in pixel per nascondere la navbar
    let isCollapsed = false; // Stato della navbar
    let isHovering = false; // Stato dell'hover sulla navbar
    let lastScrollTop = 0; // Ultima posizione di scroll

    // Funzione per gestire la classe "collapsed" e la scomparsa della navbar
    function handleNavbarCollapse() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Applica la classe "collapsed" solo se non siamo in hover sulla navbar
        if (!isHovering && currentScrollTop > collapsePoint) {
            if (!isCollapsed) {
                mainNavbar.classList.add('collapsed');
                isCollapsed = true; // Aggiorna lo stato a "collapsed"
            }
        } else if (currentScrollTop <= collapsePoint) {
            // Se siamo sopra il punto di collapse, rimuoviamo la classe
            if (isCollapsed) {
                mainNavbar.classList.remove('collapsed');
                isCollapsed = false; // Aggiorna lo stato a "not collapsed"
            }
        }

        // Gestione della scomparsa della navbar
        if (currentScrollTop > hidePoint && currentScrollTop > lastScrollTop) {
            mainNavbar.style.transform = 'translateY(-100%)'; // Nasconde la navbar
        } else if (currentScrollTop < lastScrollTop) {
            mainNavbar.style.transform = 'translateY(0)'; // Mostra la navbar
        }

        lastScrollTop = currentScrollTop; // Aggiorna l'ultima posizione di scroll
    }

    // Evento di scroll per gestire il comportamento della navbar
    window.addEventListener('scroll', handleNavbarCollapse);

    // Evento per rimuovere la classe "collapsed" quando si effettua l'hover sulla navbar
    mainNavbar.addEventListener('mouseover', function() {
        isHovering = true; // Imposta lo stato di hover su "true"
        if (isCollapsed) {
            mainNavbar.classList.remove('collapsed');
        }
    });

    // Evento per ripristinare la classe "collapsed" quando il mouse esce dalla navbar, ma solo se siamo sotto il punto di collapse
    mainNavbar.addEventListener('mouseleave', function() {
        isHovering = false; // Imposta lo stato di hover su "false"
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Se siamo sotto il punto di collapse, riapplica la classe "collapsed" quando si esce dall'hover
        if (currentScrollTop > collapsePoint) {
            mainNavbar.classList.add('collapsed');
            isCollapsed = true; // Imposta lo stato a "collapsed"
        }
    });
});