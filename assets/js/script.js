document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Navbar toggle for mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close navbar when a link is clicked (mobile view)
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove("active");
                }
            });
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Show submission details
            const submissionDetails = document.getElementById("submission-details");
            const submittedInfo = document.getElementById("submitted-info");
            if (submissionDetails && submittedInfo) {
                const formData = new FormData(contactForm);
                submittedInfo.innerHTML = `
                    <strong>First Name:</strong> ${formData.get("first-name")} <br>
                    <strong>Last Name:</strong> ${formData.get("last-name")} <br>
                    <strong>Email:</strong> ${formData.get("email")} <br>
                    <strong>Message:</strong> ${formData.get("message")} <br>
                `;
                submissionDetails.classList.remove("hidden");
                contactForm.style.display = "none";
            }
        });

        // Back button to return to form
        const backBtn = document.getElementById("back-btn");
        if (backBtn) {
            backBtn.addEventListener("click", function () {
                document.getElementById("submission-details").classList.add("hidden");
                contactForm.style.display = "block";
                contactForm.reset();
            });
        }
    }

    // Scroll to Contact Section on "Contact Me" button click
    const contactButtons = document.querySelectorAll(".btn");
    contactButtons.forEach(button => {
        if (button.textContent.toLowerCase().includes("contact me")) {
            button.addEventListener("click", function () {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            });
        }
    });
});
