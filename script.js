
/* =========================
   LANGUAGE TOGGLE
========================= */

const languageToggle = document.getElementById("language-toggle");

let currentLanguage = "en";

languageToggle.addEventListener("click", function () {

    if (currentLanguage === "en") {

        // English to Marathi
        document.querySelectorAll("[data-en]").forEach(function (element) {
            element.textContent = element.getAttribute("data-mr");
        });

        currentLanguage = "mr";
        languageToggle.textContent = "English";

    } else {

        // Marathi to English
        document.querySelectorAll("[data-en]").forEach(function (element) {
            element.textContent = element.getAttribute("data-en");
        });

        currentLanguage = "en";
        languageToggle.textContent = "मराठी";

    }

});


/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});
