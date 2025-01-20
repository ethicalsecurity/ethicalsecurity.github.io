// Function to create a card
function createCard(service) {
    const formattedServiceName = service.name.replace(/\s+/g, '-').toLowerCase();

    return `
    <a href="${service.url}" class="service-card" data-bg-image="/src/img/bg/services-card-bg/${formattedServiceName}.webp">
        <div class="card-title-union">
            <span class="card-title">${service.name}</span>
            <span class="card-text">${service.description}</span>
        </div>
        <span class="text"><i data-feather="arrow-right"></i></span>
    </a>
    `;

}

document.addEventListener('mouseenter', function (event) {
    // Check if the hover is on a card
    if (event.target.classList.contains('service-card')) {
        const bgImage = event.target.getAttribute('data-bg-image');
        // Apply the background image
        event.target.style.backgroundImage = `url(${bgImage})`;
    }
}, true);

document.addEventListener('mouseleave', function (event) {
    // Check if the mouse leaves a card
    if (event.target.classList.contains('service-card')) {
        // Remove the background image
        event.target.style.backgroundImage = '';
    }
}, true);

// Function to create a card container (2 per row)
function createCardContainer(services) {
    let cardContainer = '';
    for (let i = 0; i < services.length; i += 2) {
        cardContainer += `
            <div class="card-container-row">
                ${createCard(services[i])}
                ${services[i + 1] ? createCard(services[i + 1]) : ''}
            </div>
        `;
    }
    return cardContainer;
}

// Function to create cards for each category
function createServiceBlocks(servicesData) {
    const servicesContainer = document.getElementById('services-container');

    Object.keys(servicesData).forEach(category => {
        const services = servicesData[category];
        const categoryBlock = `
            <div id="ss-2-${category}" data-category="${category}" class="gs-1-block">
                <span class="service-title"><span class="makeitprimary">></span> ${category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                <div class="gs-1-card-container">
                    ${createCardContainer(services)}
                </div>
            </div>
        `;
        servicesContainer.innerHTML += categoryBlock;
    });

    // Initialize icons (if necessary)
    feather.replace();
}

// Fetching JSON data from external file
fetch('/src/json/services-info-en.json')
    .then(response => response.json())
    .then(data => createServiceBlocks(data))
    .catch(error => console.error('Error loading JSON file:', error));