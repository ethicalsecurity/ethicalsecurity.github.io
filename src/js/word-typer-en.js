document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        ["The only ones", "you'd want in", "your network"], 
        ["Your security", "is our", "first priority"]
    ];
    
    let textIndex = 0;
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 60;
    const deletingSpeed = 30;
    const delay = 100; // Tempo di pausa tra una riga e l'altra
    const switchDelay = 3000; // Tempo di pausa tra una frase e l'altra

    const lines = [
        document.getElementById("line1"),
        document.getElementById("line2"),
        document.getElementById("line3")
    ];
    
    const cursor = document.querySelector(".cursor");

    function moveCursor() {
        const targetLine = lines[lineIndex];

        // Posizioniamo il cursore direttamente accanto al testo
        targetLine.appendChild(cursor);
    }

    function typeWriter() {
        const currentText = texts[textIndex][lineIndex]; 
        let targetLine = lines[lineIndex];

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                targetLine.textContent = currentText.substring(0, charIndex + 1);
                targetLine.appendChild(cursor); // Assicura che il cursore sia sempre accanto al testo
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => {
                    if (lineIndex < 2) {
                        lineIndex++;
                        charIndex = 0;
                        moveCursor();
                        setTimeout(typeWriter, typingSpeed);
                    } else {
                        setTimeout(() => {
                            isDeleting = true;
                            setTimeout(typeWriter, deletingSpeed);
                        }, switchDelay);
                    }
                }, delay);
            }
        } else {
            if (charIndex > 0) {
                targetLine.textContent = currentText.substring(0, charIndex - 1);
                targetLine.appendChild(cursor);
                charIndex--;
                setTimeout(typeWriter, deletingSpeed);
            } else {
                if (lineIndex > 0) {
                    lineIndex--;
                    charIndex = texts[textIndex][lineIndex].length;
                    moveCursor();
                    setTimeout(typeWriter, deletingSpeed);
                } else {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    moveCursor();
                    setTimeout(typeWriter, typingSpeed);
                }
            }
        }
    }

    moveCursor();
    typeWriter();
});