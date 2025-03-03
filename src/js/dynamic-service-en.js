
function getServiceFromUrl() {
    const url = new URL(window.location.href);
    const urlParams = new URLSearchParams(url.search);
    const service = urlParams.get('service-en');
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
            throw new Error('Unable to extract service information from URL');
        }

        const serviceData = data[category]?.find(service => service.name.toLowerCase() === name.replace(/-/g, ' '));
        if (!serviceData) {
            throw new Error(`Service data not found for category "${category}" and name "${name}"`);
        }

        // Populate the category name with the indicator
        const heroCategory = document.getElementById('hero-service-category');
        heroCategory.innerHTML = `<span class="title-indicator">> </span>${category.replace(/-/g, ' ')}`;

        // Populate the service title
        const heroTitle = document.getElementById('hero-service-title');
        heroTitle.textContent = serviceData.name;

        // Populate the service description
        const heroDescription = document.getElementById('hero-service-description');
        heroDescription.textContent = serviceData.description;

        // Set the background of the hero section
        const heroSection = document.querySelector('.hero');
        heroSection.style.backgroundImage = `url(${serviceData.background_url})`;

        // Helper function to populate content with separate paragraphs
        function populateContentWithParagraphs(content, element) {
            if (content) {
                const lines = content.split('\n');
                element.innerHTML = ''; // Clear existing content
                lines.forEach(line => {
                    if (line.trim() !== '') { // Ignore empty lines
                        const span = document.createElement('span');
                        span.classList.add('text');
                        span.innerHTML = line.trim(); // Use innerHTML to interpret tags
                        element.appendChild(span);
                    }
                });
            } else {
                element.parentElement.style.display = 'none'; // Hide the element if there's no content
            }
        }

        // Populate the "What it consists of" with separate paragraphs
        const firstContentBlock = document.getElementById('first-content').querySelector('.gssc-block-content');
        populateContentWithParagraphs(serviceData.first_content, firstContentBlock);

        // Populate the "Operational methods" with separate paragraphs
        const secondContentBlock = document.getElementById('second-content').querySelector('.gssc-block-content');
        populateContentWithParagraphs(serviceData.second_content, secondContentBlock);

        // Populate the steps
        const stepsContainer = document.querySelector('.gen-section-service-steps');
        stepsContainer.innerHTML = ''; // Clear existing content
        if (serviceData.steps) {
            const stepsArray = Object.values(serviceData.steps);
            stepsArray.forEach((step, index) => {
                const stepBlock = document.createElement('div');
                stepBlock.classList.add('step-block');
                stepBlock.classList.add('service');

                // Add step content only if it's defined
                stepBlock.innerHTML = `
                    <div class="gsss-title">
                        <span class="tag">${step.tag ? step.tag : ''}</span>
                        <span class="tag-name">${step.name ? step.name : ''}</span>
                    </div>
                    <span class="text">${step.content ? step.content : ''}</span>
                `;

                stepsContainer.appendChild(stepBlock);

                // Add arrow icon after each step, except the last one
                if (index < stepsArray.length - 1) {
                    const arrowIcon = document.createElement('i');
                    arrowIcon.classList.add('step-icon');
                    arrowIcon.setAttribute('data-feather', 'arrow-down');
                    stepsContainer.appendChild(arrowIcon);
                }
            });
        } else {
            stepsContainer.style.display = 'none'; // Hide if there are no steps
        }

        // Populate the list in the "list-content" block
        const listContainer = document.getElementById('list-content');
        listContainer.innerHTML = ''; // Clear existing content
        if (serviceData.list) {
            const listArray = Object.values(serviceData.list);
            listArray.forEach((listItem, index) => {
                const listElement = document.createElement('li');
                listElement.classList.add('text');
                listElement.textContent = listItem.content ? listItem.content : ''; // Add list content only if it exists
                listContainer.appendChild(listElement);
            });
            if (listContainer.childNodes.length === 0) {
                listContainer.parentElement.style.display = 'none'; // Hide if there are no list items
            }
        } else {
            listContainer.parentElement.style.display = 'none'; // Hide if there are no list items
        }

        const emailSubject = encodeURIComponent(`Information request for ${serviceData.name}`);
        const emailBody = encodeURIComponent(`Hello,\n\nWe are interested in your ${serviceData.name} service. Could we have more information?\n\nThank you.`);
        const mailtoLink = `mailto:vendite@ethsec.com?subject=${emailSubject}&body=${emailBody}`;

        const contactForService = document.getElementById('contact-for-service');
        contactForService.href = mailtoLink;
        contactForService.innerHTML = `Contact us for ${serviceData.name} <i data-feather="arrow-right"></i>`;

        feather.replace();
    } catch (error) {
        console.error(error);
        window.location.href = '/en/services-en.html';
    }
}

// Load the JSON file and populate the page
fetch('/src/json/services-info-en.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => populateServicePage(data))
    .catch(error => {
        console.error('Error loading service data:', error);
        window.location.href = '/en/services-en.html';
    });