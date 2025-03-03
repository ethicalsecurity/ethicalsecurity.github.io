// contenuto dinamico

document.addEventListener("DOMContentLoaded", function () {
    
    // Navbar
    var navbar = document.getElementById("main-navbar");
  
    navbar.innerHTML = `
    
        <div class="navbar-container">

            <a href="/index.html"><img id="nav-logo" src="/src/logo/complete-logo.webp" alt=""></a>

            <div class="navbar-link-container">

                <a href="/info.html" class="navbar-link"><span class="link-indicator">></span> info</a>
                <a href="/services.html" id="flyout-toggle" class="navbar-link"><span class="link-indicator">></span> servizi</a>
                <a href="/contact.html" class="navbar-link"><span class="link-indicator">></span> contatti</a>

                <span class="navbar-link separator"> |</span>

                <a href="/info.html#is-3" class="navbar-link new-link"><span class="link-indicator">></span> partnerships</a>
                <a href="/reality-check.html" class="navbar-link new-link"><span class="link-indicator">></span> reality check</a>

            </div>

            <div class="navbar-link-container">

                <a href="" id="goto-translated" class="navbar-link nav-link-u">it <i data-feather="globe"></i></a>

                <a href="/contact.html" class="secondary-btn">Contattaci</a>

            </div>

            <span id="offcanvas-toggle" class="secondary-btn" data-bs-toggle="offcanvas" data-bs-target="#main-offcanvas" aria-controls="offcanvasNavbar"><i data-feather="menu"></i></span>

        </div>

        <div class="flyout-container hidden">
            
            <div id="navbar-divider-1" class="divider"></div>

            <div class="flyout-category-container">
                
                <div class="flyout-link-container">

                    <span data-category="ethical-hacking" id="ethical-hacking" class="navbar-link-semibold"><span class="link-indicator">></span> Ethical Hacking</span>
                    <span data-category="application-security" id="application-security" class="navbar-link-semibold"><span class="link-indicator">></span> Application Security</span>
                    <span data-category="compliance" id="compliance" class="navbar-link-semibold"><span class="link-indicator">></span> Compliance</span>
                    <span data-category="digital-forensic" id="Digital Forensic" class="navbar-link-semibold"><span class="link-indicator">></span> Digital Forensic</span>
    
                </div>
    
                <a href="/services.html" class="navbar-link-semibold"><span class="link-indicator">></span> Tutti i servizi</a>

            </div>

            <div id="navbar-divider-2" class="divider hidden"></div>

            <div class="flyout-category-services-container hidden">

                    <a href="" id="flyout-service-card">
                        <div class="flyout-card-title-union">
                            <span class="navbar-link-semibold"></span>
                            <span class="navbar-link disabled"></span>
                        </div>

                        <span class="text"><i data-feather="arrow-right"></i></span>
                    </a>

            </div>

        </div>

    `;

    // Estrai l'attributo data-page-goto e impostalo come href per l'elemento con id "goto-translated"
    var gotoTranslated = document.getElementById("goto-translated");
    var pageGoto = navbar.getAttribute("data-page-goto");
    gotoTranslated.setAttribute("href", pageGoto);

    // Offcanvas
    var offcanvas = document.getElementById("main-offcanvas");
  
    offcanvas.innerHTML = `
    
        
        <div class="oc-link-container">

            <a class="offcanvas-link" href="/index.html">Home<span class="offcanvas-indicator"> <</span></a>
            <a class="offcanvas-link" href="/info.html">Info<span class="offcanvas-indicator"> <</span></a>
            <a class="offcanvas-link" href="/services.html">Servizi<span class="offcanvas-indicator"> <</span></a>
            <a class="offcanvas-link" href="/contact.html">Contatti<span class="offcanvas-indicator"> <</span></a>

            <div class="divider"></div>

            <a class="offcanvas-link" href="/info.html#is-3">Partnerships<span class="offcanvas-indicator"> <</span></a>
            <a class="offcanvas-link" href="/reality-check.html">Reality Check<span class="offcanvas-indicator"> <</span></a>

        </div>

        <div class="oc-cta-container">
            <div class="oc-setting-container">

                <a id="goto-translated-oc" class="navbar-link">english website <i data-feather="globe"></i></a>
                <span class="navbar-link" id="privacy-btn-oc">privacy info <i data-feather="info"></i></span>
    
            </div>
            <a href="/contact.html" class="primary-btn">Contattaci <i data-feather="arrow-right"></i></a>
        </div>

        <div id="oc-credits">
            <span class="credit-text">P.IVA/CF: 04465560987 — REA: BS - 616749, SDI: M5UXCR1</span>
            <span class="credit-text">© 2023-2025 Ethical Security S.r.l. — Riproduzione Riservata</span>
        </div>

    `;

    // Estrai l'attributo data-page-goto e impostalo come href per l'elemento con id "goto-translated"
    var gotoTranslatedOc = document.getElementById("goto-translated-oc");
    var pageGotoOc = navbar.getAttribute("data-page-goto");
    gotoTranslatedOc.setAttribute("href", pageGotoOc);
  
    // Footer
    var footer = document.getElementById("footer");
  
    footer.innerHTML = `
    <div id="main-footer">

            <div class="footer-main-container">

                <div class="footer-header">

                    <img id="footer-logo" src="/src/logo/complete-logo.webp" alt="eth-logo">

                    <div class="fh-link-container">

                        <a id="goto-translated-footer" href="" class="navbar-link">it <i data-feather="globe"></i></a>
                        <span class="navbar-link" id="privacy-btn">privacy <i data-feather="info"></i></span>

                    </div>

                </div>
    
                <div class="footer-body">

                    <div class="fb-link-container">

                        <div class="fb-link-block">

                            <a href="/info.html" class="navbar-link-semibold">Info</a>

                            <a href="/info.html#is-2" class="navbar-link">Chi siamo</a>
                            <a href="/info.html#is-3" class="navbar-link">Partnerships</a>

                        </div>
                        <div class="fb-link-block">

                            <a href="/services.html" class="navbar-link-semibold">Servizi</a>

                            <a href="/services.html#" class="navbar-link">Ethical Hacking</a>
                            <a href="/services.html#" class="navbar-link">Application Security</a>
                            <a href="/services.html#" class="navbar-link">Compliance</a>
                            <a href="/services.html#" class="navbar-link">Digital Forensic</a>

                        </div>
                        <div class="fb-link-block">

                            <a href="/contact.html" class="navbar-link-semibold">Contatti</a>

                            <a href="/contact.html#" class="navbar-link">email informativa</a>
                            <a href="/contact.html#" class="navbar-link">email vendite</a>
                            <a href="/contact.html#" class="navbar-link">p.e.c.</a>

                        </div>

                    </div>

                    <div class="fb-cta-container">

                        <span class="navbar-link">Pensi che la tua rete sia al sicuro? Scopri grazie a noi la verità sullo stato della tua infrastruttura IT</span>

                        <a href="/services.html"><div class="secondary-btn">Scopri tutti i Servizi <i data-feather="arrow-right"></i></div></a>

                    </div>

                </div>
    
            </div>

        </div>

        <div id="credits">
            <span class="credit-text">P.IVA/CF: 04465560987 — REA: BS - 616749, SDI: M5UXCR1</span>
            <span class="credit-text">© 2023-2025 Ethical Security S.r.l. — Riproduzione Riservata</span>
        </div>`;

    // Modal per la privacy
    var modal = document.createElement('div');
    modal.id = 'privacy-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
                <div class="union-title-etiquette">
                    <span class="card-title">Informativa sulla Privacy</span>
                    <span class="text">La tutela della privacy dei nostri utenti è per noi una priorità. Questo sito non raccoglie né tratta alcun dato personale degli utenti e non utilizza cookie o altri strumenti di tracciamento per finalità di profilazione o monitoraggio.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="card-title">Dati raccolti</span>
                    <span class="text">Non vengono raccolti, trattati o conservati dati personali degli utenti che visitano il sito. La navigazione è completamente anonima e non monitorata.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="card-title">Cookie</span>
                    <span class="text">Non utilizziamo alcun tipo di cookie per raccogliere informazioni sull'attività dell'utente. Il sito non impiega cookie di profilazione o tecnologie simili.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="card-title">Servizi di terze parti</span>
                    <span class="text">Questo sito non integra servizi di terze parti che raccolgono dati personali, come strumenti di analisi o pubblicità.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="card-title">Modifiche alla presente informativa</span>
                    <span class="text">Qualsiasi eventuale modifica futura a questa informativa sarà prontamente pubblicata in questa sezione del sito. Raccomandiamo di visitare periodicamente questa pagina per rimanere aggiornati.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="text">Per qualsiasi domanda relativa alla privacy o all'utilizzo del sito, potete contattarci direttamente tramite i canali forniti nella sezione Contatti.</span>
                </div>
            
                <button id="close-modal" class="primary-btn">Ho capito</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Funzione per aprire la modal
    function openModal() {
        modal.style.display = "block";
    }

    // Funzione per chiudere la modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Event listener per il pulsante privacy nel footer
    document.getElementById('privacy-btn').addEventListener('click', openModal);

    // Event listener per il pulsante privacy nell'offcanvas
    document.getElementById('privacy-btn-oc').addEventListener('click', openModal);

    // Event listener per chiudere la modal cliccando sul pulsante "Ho capito"
    document.getElementById('close-modal').addEventListener('click', closeModal);

    // Event listener per chiudere la modal cliccando fuori da essa
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
        
        var gotoTranslatedFooter = document.getElementById("goto-translated-footer");
        var pageGotoFooter = navbar.getAttribute("data-page-goto");
        gotoTranslatedFooter.setAttribute("href", pageGotoFooter);
        


    // Cta
    var cta = document.getElementById("cta-section");

    if(cta) {
        cta.innerHTML = `
    

        <div class="gen-section-cta">
            <div id="base-service-cta">

                <div class="cta-container">
    
                    <div class="union-title-text">
                        <span class="subtitle">Non sai da Dove Partire?</span>
                        <span class="text-hero">Inizia dal nostro nuovo servizio Reality Check, Ottieni una prima consulenza sul vero stato della tua infrastruttura IT.</span>
                    </div>
    
                    <a class="primary-btn" href="/reality-check.html">Reality Check <i data-feather="arrow-right"></i></a>
    
                </div>
    
            </div>
    
            <div id="faq-cta">
                
                <div class="cta-container">
    
                    <div class="union-title-text">
                        <span class="subtitle">Hai qualche domanda?</span>
                        <span class="text-hero">Visita la nostra <a href="/contact.html" class="text-link">pagina dei contatti</a>, saremo felici di aiutarti</span>
                    </div>

                    <a class="secondary-btn" href="/contact.html">Contattaci <i data-feather="arrow-right"></i></a>
    
                </div>
    
            </div>
        </div>

    `;
    }

    // Short Cta
    var ctashort = document.getElementById("cta-section-short");
  
    if(ctashort) {
        ctashort.innerHTML = `
    
        <div class="gen-section-cta">
    
            <div id="faq-cta">
                
                <div class="cta-container">
    
                    <div class="union-title-text">
                        <span class="subtitle">Hai qualche domanda?</span>
                        <span class="text-hero">Visita la nostra <a href="/contact.html" class="text-link">pagina dei contatti</a>, saremo felici di aiutarti</span>
                    </div>

                    <a class="secondary-btn" href="/contact.html">Contattaci <i data-feather="arrow-right"></i></a>
    
                </div>
    
            </div>
        </div>

    `;
    }

    feather.replace();

    const offcanvasToggle = document.getElementById('offcanvas-toggle');
    const iconSvg = offcanvasToggle.querySelector('svg');
    
    document.getElementById('main-offcanvas').addEventListener('show.bs.offcanvas', function () {
        iconSvg.innerHTML = feather.icons['x'].toSvg();
    });
    
    document.getElementById('main-offcanvas').addEventListener('hide.bs.offcanvas', function () {
        iconSvg.innerHTML = feather.icons['menu'].toSvg();
    });
      
      
  });