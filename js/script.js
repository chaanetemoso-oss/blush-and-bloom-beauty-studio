
document.addEventListener("DOMContentLoaded", function () {

    console.log("Blush & Bloom JavaScript is working!");

    // Fade-in animation
    const sections = document.querySelectorAll("main section");

    sections.forEach(function (section, index) {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 1s ease, transform 1s ease";

        setTimeout(function () {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300);
    });

    // Dynamic welcome message
    const welcomeMessage = document.getElementById("dynamic-message");

    if (welcomeMessage) {
        welcomeMessage.textContent =
            "Welcome! We're delighted to have you at Blush & Bloom Beauty Studio. Explore our beauty services and treat yourself today!";
    }

    // Current date
    const dateElement = document.getElementById("current-date");

    if (dateElement) {
        dateElement.textContent = "Today's date: " +
            new Date().toLocaleDateString("en-ZA");
    }

    // Image lightbox
    const images = document.querySelectorAll("main img");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            const lightbox = document.createElement("div");

            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                cursor: pointer;
            `;

            const largeImage = document.createElement("img");
            largeImage.src = image.src;
            largeImage.alt = image.alt;
            largeImage.style.cssText =
                "max-width:90%; max-height:85%; object-fit:contain;";

            lightbox.appendChild(largeImage);
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });

    // Enquiry form validation
    const enquiryForm = document.getElementById("enquiry-form");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();
            const feedback = document.getElementById("form-feedback");

            if (!name || !email || !service || !message) {
                feedback.textContent = "Please complete all fields.";
                feedback.style.color = "red";
            } else {
                feedback.textContent =
                    "Thank you! Your enquiry form has been completed successfully.";
                feedback.style.color = "green";
                enquiryForm.reset();
            }
        });
    }

    // Contact form validation
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const message = document.getElementById("contact-message").value.trim();
            const feedback = document.getElementById("contact-feedback");

            if (!name || !email || !message) {
                feedback.textContent = "Please complete all fields.";
                feedback.style.color = "red";
            } else {
                feedback.textContent =
                    "Thank you! Your message has been completed successfully.";
                feedback.style.color = "green";
                contactForm.reset();
            }
        });
    }

});
