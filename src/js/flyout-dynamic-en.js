document.addEventListener("DOMContentLoaded", function() {
    const flyoutToggle = document.getElementById('flyout-toggle');
    const flyoutContainer = document.querySelector('.flyout-container');
    const categoryLinks = document.querySelectorAll('.flyout-link-container span');
    const servicesContainer = document.querySelector('.flyout-category-services-container');
    const serviceCard = document.getElementById('flyout-service-card');
    const cardTitle = serviceCard.querySelector('.navbar-link-semibold');
    const cardDescription = serviceCard.querySelector('.navbar-link.disabled');
    const divider1 = document.getElementById('navbar-divider-1');
    const divider2 = document.getElementById('navbar-divider-2');
    const mainNavbar = document.getElementById('main-navbar');
    const navbarLinkContainer = document.querySelector('.navbar-link-container');

    let currentCategory = null;
    let services = {};
    let currentServiceLink = null;

    function updateServiceCard(service) {
        if (!service) return;
        cardTitle.textContent = service.name;
        cardDescription.textContent = service.description;
        
        const formattedServiceName = service.name.replace(/\s+/g, '-').toLowerCase();
        const backgroundUrl = `/src/img/bg/services-card-bg/${formattedServiceName}.webp`;
        
        const img = new Image();
        img.src = backgroundUrl;
        img.onload = () => {
            serviceCard.style.backgroundImage = `url(${backgroundUrl})`;
        };
        img.onerror = () => {
            console.error('Immagine non trovata:', backgroundUrl);
            serviceCard.style.backgroundImage = '';
        };

        serviceCard.href = service.url;
    }

    function updateServices(category) {
        servicesContainer.innerHTML = "";

        const categoryServices = services[category];

        if (!categoryServices || categoryServices.length === 0) {
            console.error('Nessun servizio trovato per la categoria:', category);
            return;
        }

        updateServiceCard(categoryServices[0]);

        for (let i = 0; i < categoryServices.length; i += 3) {
            const serviceGroup = categoryServices.slice(i, i + 3);
            
            const serviceDiv = document.createElement('div');
            serviceDiv.classList.add('flyout-category-services');
            
            serviceGroup.forEach(service => {
                if (!service) return;
                const serviceLink = document.createElement('a');
                serviceLink.href = service.url;
                serviceLink.classList.add('navbar-link');
                
                const linkIndicator = document.createElement('span');
                linkIndicator.classList.add('link-indicator');
                linkIndicator.textContent = "> ";
            
                serviceLink.appendChild(linkIndicator);
                serviceLink.appendChild(document.createTextNode(service.name));
            
                serviceLink.addEventListener('mouseover', function() {
                    updateServiceCard(service);
                    
                    if (currentServiceLink) {
                        currentServiceLink.classList.remove('current');
                    }
                    
                    serviceLink.classList.add('current');
                    currentServiceLink = serviceLink;
                });
            
                serviceDiv.appendChild(serviceLink);
            });

            servicesContainer.appendChild(serviceDiv);
        }

        servicesContainer.appendChild(serviceCard);
    }

    function resetFlyout() {
        flyoutContainer.classList.remove('visible');
        flyoutContainer.classList.add('hidden');
        servicesContainer.classList.remove('visible');
        servicesContainer.classList.add('hidden');
        divider2.classList.remove('visible');
        divider2.classList.add('hidden');
        servicesContainer.innerHTML = "";
        categoryLinks.forEach(link => {
            link.classList.remove('current');
        });
        if (currentServiceLink) {
            currentServiceLink.classList.remove('current');
            currentServiceLink = null;
        }
        currentCategory = null;
        mainNavbar.classList.remove('focus');
    }

    function toggleVisibility(element, isVisible) {
        element.classList.toggle('hidden', !isVisible);
        element.classList.toggle('visible', isVisible);
    }

    flyoutToggle.addEventListener('mouseenter', function() {
        toggleVisibility(flyoutContainer, true);
        mainNavbar.classList.add('focus');
    });

    categoryLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const category = link.getAttribute('data-category');

            if (!services[category]) {
                console.error('Categoria non trovata:', category);
                return;
            }

            categoryLinks.forEach(l => l.classList.remove('current'));
            link.classList.add('current');

            updateServices(category);
            toggleVisibility(servicesContainer, true);
            toggleVisibility(divider2, true);
            currentCategory = category;
        });
    });

    mainNavbar.addEventListener('mouseleave', resetFlyout);

    navbarLinkContainer.addEventListener('mouseover', function(event) {
        if (!event.target.closest('#flyout-toggle')) {
            resetFlyout();
        }
    });

    fetch('/src/json/services-info-en.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella risposta del server');
            }
            return response.json();
        })
        .then(data => {
            services = data;
            console.log('Servizi caricati:', services);
        })
        .catch(error => {
            console.error('Errore durante il caricamento dei servizi:', error);
            services = {};
        });
});