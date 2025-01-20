document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Gli unici che vorresti nella tua rete", 
        "Proteggiamo la tua rete da ogni minaccia", 
        "La tua sicurezza è la nostra priorità"
    ];
    let textIndex = 0;
    let index = 0;
    let isDeleting = false;
    const typingSpeed = 60;
    const deletingSpeed = 30;
    const delay = 5500;
    const span = document.querySelector(".title");
    const cursor = document.createElement("span");
    cursor.innerText = "|";
    cursor.classList.add("blinking-cursor");
    span.appendChild(cursor);

    function typeWriter() {
        const text = texts[textIndex];

        if (!isDeleting) {
            if (index < text.length) {
                span.innerHTML = text.substring(0, index + 1);
                span.appendChild(cursor);
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(typeWriter, deletingSpeed);
                }, delay);
            }
        } else {
            if (index > 0) {
                span.innerHTML = text.substring(0, index - 1);
                span.appendChild(cursor);
                index--;
                setTimeout(typeWriter, deletingSpeed);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }

    typeWriter();
});