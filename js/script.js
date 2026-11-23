// =========================
// MENÚ RESPONSIVE
// =========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Cerrar menú al seleccionar un enlace
if (navLinks) {
    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}

// =========================
// FORMULARIO DE CONTACTO
// =========================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const asunto = document.getElementById("asunto").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
            formMessage.textContent = "Por favor, completa todos los campos.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "¡Gracias! Tu formulario fue validado correctamente.";
        formMessage.style.color = "green";

        contactForm.reset();
    });
}