// contenuto dinamico

document.addEventListener("DOMContentLoaded", function () {
    
    // Navbar
    var navbar = document.getElementById("main-navbar");
  
    navbar.innerHTML = `
    

        <div class="navbar-container">

            <a href="/en/index-en.html"><img id="nav-logo" src="/src/logo/complete-logo.webp" alt=""></a>

            <div class="navbar-link-container">

                <a href="/en/info-en.html" class="navbar-link"><span class="link-indicator">></span> info</a>
                <a href="/en/services-en.html" id="flyout-toggle" class="navbar-link"><span class="link-indicator">></span> services</a>
                <a href="/en/contact-en.html" class="navbar-link"><span class="link-indicator">></span> contact</a>

                <span class="navbar-link separator"> |</span>

                <a href="/en/info-en.html#is-3" class="navbar-link new-link"><span class="link-indicator">></span> partnerships</a>
                <a href="/en/reality-check-en.html" class="navbar-link new-link"><span class="link-indicator">></span> reality check</a>

            </div>

            <div class="navbar-link-container">

                <a href="" id="goto-translated" class="navbar-link nav-link-u">en <i data-feather="globe"></i></a>

                <a href="/en/contact-en.html" class="secondary-btn">Contact Us</a>

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
    
                <a href="/en/services-en.html" class="navbar-link-semibold"><span class="link-indicator">></span> All services</a>

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

            <a class="offcanvas-link" href="/en/index-en.html">Home<span class="offcanvas-indicator"> <</span></a>
            <a class="offcanvas-link" href="/en/info-en.html">Info<span class="offcanvas-indicator"> <</span></a>
            <a class="offcanvas-link" href="/en/services-en.html">Services<span class="offcanvas-indicator"> <</span></a>
            <a class="offcanvas-link" href="/en/contact-en.html">Contact<span class="offcanvas-indicator"> <</span></a>

            <div class="divider"></div>

            <a class="offcanvas-link" href="/en/info-en.html#is-3">Partnerships<span class="offcanvas-indicator"> <</span></a>
            <a class="offcanvas-link" href="/en/reality-check-en.html">Reality Check<span class="offcanvas-indicator"> <</span></a>

        </div>

        <div class="oc-cta-container">
            <div class="oc-setting-container">

                <a id="goto-translated-oc" class="navbar-link">italian website <i data-feather="globe"></i></a>
                <span id="privacy-btn-oc" class="navbar-link">privacy info <i data-feather="info"></i></span>
    
            </div>
            <a href="/en/contact-en.html" class="primary-btn">Contact Us <i data-feather="arrow-right"></i></a>
        </div>

        <div id="oc-credits">
            <span class="credit-text">P.IVA/CF: 04465560987 — REA: BS - 616749, SDI: M5UXCR1</span>
            <span class="credit-text">© 2023-2025 Ethical Security S.r.l. — All Rights Reserved</span>
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

                        <a id="goto-translated-footer" class="navbar-link">en <i data-feather="globe"></i></a>
                        <span id="privacy-btn" class="navbar-link">privacy <i data-feather="info"></i></span>

                    </div>

                </div>
    
                <div class="footer-body">

                    <div class="fb-link-container">

                        <div class="fb-link-block">

                            <a href="/en/info-en.html" class="navbar-link-semibold">Info</a>

                            <a href="/en/info-en.html#is-2" class="navbar-link">Who we are</a>
                            <a href="/en/info-en.html#is-3" class="navbar-link">Partnerships</a>

                        </div>
                        <div class="fb-link-block">

                            <a href="/en/services-en.html" class="navbar-link-semibold">Services</a>

                            <a href="/en/services-en.html#" class="navbar-link">Ethical Hacking</a>
                            <a href="/en/services-en.html#" class="navbar-link">Application Security</a>
                            <a href="/en/services-en.html#" class="navbar-link">Compliance</a>
                            <a href="/en/services-en.html#" class="navbar-link">Digital Forensic</a>

                        </div>
                        <div class="fb-link-block">

                            <a href="/en/contact-en.html" class="navbar-link-semibold">Contact</a>

                            <a href="/en/contact-en.html#" class="navbar-link">email</a>
                            <a href="/en/contact-en.html#" class="navbar-link">p.e.c.</a>

                        </div>

                    </div>

                    <div class="fb-cta-container">

                        <span class="navbar-link">Do you think your network is secure? Discover the truth about the state of your IT infrastructure with us</span>

                        <a href="/en/services-en.html"><div class="secondary-btn">Discover all Services <i data-feather="arrow-right"></i></div></a>

                    </div>

                </div>
    
            </div>

        </div>

        <div id="credits">
            <span class="credit-text">P.IVA/CF: 04465560987 — REA: BS - 616749, SDI: M5UXCR1</span>
            <span class="credit-text">© 2023-2025 Ethical Security S.r.l. — All Rights Reserved</span>
        </div>`;

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
                        <span class="subtitle">Don't know where to start?</span>
                        <span class="text-hero">Start with our new Reality Check service. Get an initial consultation on the true state of your IT infrastructure.</span>
                    </div>
    
                    <a class="primary-btn" href="/en/reality-check-en.html">Reality Check <i data-feather="arrow-right"></i></a>
    
                </div>
    
            </div>
    
            <div id="faq-cta">
                
                <div class="cta-container">
    
                    <div class="union-title-text">
                        <span class="subtitle">Have any questions?</span>
                        <span class="text-hero">Visit our <a href="/en/contact-en.html" class="text-link">contact page</a>, we'll be happy to help you</span>
                    </div>

                    <a class="secondary-btn" href="/en/contact-en.html">Contact Us <i data-feather="arrow-right"></i></a>
    
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
                        <span class="subtitle">Have any questions?</span>
                        <span class="text-hero">Visit our <a href="/en/contact-en.html" class="text-link">contact page</a>, we'll be happy to help you</span>
                    </div>

                    <a class="secondary-btn" href="/en/contact-en.html">Contact Us <i data-feather="arrow-right"></i></a>
    
                </div>
    
            </div>
        </div>

    `;
    }

    // Modal per la privacy
    var modal = document.createElement('div');
    modal.id = 'privacy-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
                <div class="union-title-etiquette">
                    <span class="card-title">Privacy Policy</span>
                    <span class="text">Protecting the privacy of our users is a priority for us. This site does not collect or process any personal data of users and does not use cookies or other tracking tools for profiling or monitoring purposes.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="card-title">Data collected</span>
                    <span class="text">No personal data of users visiting the site is collected, processed or stored. Navigation is completely anonymous and not monitored.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="card-title">Cookies</span>
                    <span class="text">We do not use any type of cookie to collect information about user activity. The site does not use profiling cookies or similar technologies.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="card-title">Third-party services</span>
                    <span class="text">This site does not integrate third-party services that collect personal data, such as analysis or advertising tools.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="card-title">Changes to this policy</span>
                    <span class="text">Any future changes to this policy will be promptly published in this section of the site. We recommend visiting this page periodically to stay updated.</span>
                </div>
                <div class="union-title-etiquette">
                    <span class="text">For any questions regarding privacy or the use of the site, you can contact us directly through the channels provided in the Contact section.</span>
                </div>
            
                <button id="close-modal" class="primary-btn">I understand</button>
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