
function getServiceFromUrl() {
    const url = new URL(window.location.href);
    const urlParams = new URLSearchParams(url.search);
    const service = urlParams.get('service');
    if (service) {
        const [category, name] = service.split('.');
        return { category, name };
    }
    return null;
}

function populateServicePage(data) {
    try {
        const { category, name } = getServiceFromUrl();
        if (!category || !name) {
            throw new Error('Impossibile estrarre le informazioni del servizio dall\'URL');
        }

        const serviceData = data[category]?.find(service => service.name.toLowerCase() === name.replace(/-/g, ' '));
        if (!serviceData) {
            throw new Error(`Dati del servizio non trovati per la categoria "${category}" e il nome "${name}"`);
        }

        // Popola il nome della categoria con l'indicatore
        const heroCategory = document.getElementById('hero-service-category');
        heroCategory.innerHTML = `<span class="title-indicator">> </span>${category.replace(/-/g, ' ')}`;

        // Popola il titolo del servizio
        const heroTitle = document.getElementById('hero-service-title');
        heroTitle.textContent = serviceData.name;

        // Popola la descrizione del servizio
        const heroDescription = document.getElementById('hero-service-description');
        heroDescription.textContent = serviceData.description;

        // Imposta lo sfondo dell'hero section
        const heroSection = document.querySelector('.hero');
        heroSection.style.backgroundImage = `url(${serviceData.background_url})`;

        // Funzione di supporto per popolare contenuti con paragrafi separati
        function populateContentWithParagraphs(content, element) {
            if (content) {
                const lines = content.split('\n');
                element.innerHTML = ''; // Pulisce il contenuto esistente
                lines.forEach(line => {
                    if (line.trim() !== '') { // Ignora linee vuote
                        const span = document.createElement('span');
                        span.classList.add('text');
                        span.innerHTML = line.trim(); // Usa innerHTML per interpretare i tag
                        element.appendChild(span);
                    }
                });
            } else {
                element.parentElement.style.display = 'none'; // Nasconde l'elemento se non c'è contenuto
            }
        }

        // Popola il "In cosa consiste" con paragrafi separati
        const firstContentBlock = document.getElementById('first-content').querySelector('.gssc-block-content');
        populateContentWithParagraphs(serviceData.first_content, firstContentBlock);

        // Popola il "Modalità operative" con paragrafi separati
        const secondContentBlock = document.getElementById('second-content').querySelector('.gssc-block-content');
        populateContentWithParagraphs(serviceData.second_content, secondContentBlock);

        // Popola i passi
        const stepsContainer = document.querySelector('.gen-section-service-steps');
        stepsContainer.innerHTML = ''; // Pulisce i contenuti esistenti
        if (serviceData.steps) {
            const stepsArray = Object.values(serviceData.steps);
            stepsArray.forEach((step, index) => {
                const stepBlock = document.createElement('div');
                stepBlock.classList.add('step-block');
                stepBlock.classList.add('service');

                // Aggiungi il contenuto degli step solo se è definito
                stepBlock.innerHTML = `
                    <div class="gsss-title">
                        <span class="tag">${step.tag ? step.tag : ''}</span>
                        <span class="tag-name">${step.name ? step.name : ''}</span>
                    </div>
                    <span class="text">${step.content ? step.content : ''}</span>
                `;

                stepsContainer.appendChild(stepBlock);

                // Aggiungi l'icona della freccia dopo ogni passo, tranne l'ultimo
                if (index < stepsArray.length - 1) {
                    const arrowIcon = document.createElement('i');
                    arrowIcon.classList.add('step-icon');
                    arrowIcon.setAttribute('data-feather', 'arrow-down');
                    stepsContainer.appendChild(arrowIcon);
                }
            });
        } else {
            stepsContainer.style.display = 'none'; // Nascondi se non ci sono passi
        }

        // Popola la lista nel blocco "list-content"
        const listContainer = document.getElementById('list-content');
        listContainer.innerHTML = ''; // Pulisce i contenuti esistenti
        if (serviceData.list) {
            const listArray = Object.values(serviceData.list);
            listArray.forEach((listItem, index) => {
                const listElement = document.createElement('li');
                listElement.classList.add('text');
                listElement.textContent = listItem.content ? listItem.content : ''; // Aggiunge il contenuto della lista solo se esiste
                listContainer.appendChild(listElement);
            });
            if (listContainer.childNodes.length === 0) {
                listContainer.parentElement.style.display = 'none'; // Nascondi se non ci sono elementi nella lista
            }
        } else {
            listContainer.parentElement.style.display = 'none'; // Nascondi se non ci sono elementi nella lista
        }

        const emailSubject = encodeURIComponent(`Richiesta informazioni per ${serviceData.name}`);
        const emailBody = encodeURIComponent(`Salve,\n\nSiamo interessati al vostro servizio di ${serviceData.name}. Potremmo avere maggiori informazioni?\n\nGrazie.`);
        const mailtoLink = `mailto:vendite@ethsec.com?subject=${emailSubject}&body=${emailBody}`;

        const contactForService = document.getElementById('contact-for-service');
        contactForService.href = mailtoLink;
        contactForService.innerHTML = `Contattaci per ${serviceData.name} <i data-feather="arrow-right"></i>`;

        feather.replace();
    } catch (error) {
        console.error(error);
        window.location.href = '/services.html';
    }
}

// Carica il file JSON e popola la pagina
fetch('/src/json/services-info.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => populateServicePage(data))
    .catch(error => {
        console.error('Error loading service data:', error);
        window.location.href = '/services.html';
    });