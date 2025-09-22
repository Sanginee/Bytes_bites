document.addEventListener("DOMContentLoaded", function () {
  
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            const href = this.getAttribute("href");
            if (href === "#" || href === "") {
                event.preventDefault();
                alert("Feature coming soon!");
            }
        });
    });
    const searchInput = document.querySelector("input");
    if (searchInput) {
        searchInput.addEventListener("focus", function () {
            this.style.boxShadow = "0px 0px 10px rgba(215, 0, 0, 0.5)";
        });

        searchInput.addEventListener("blur", function () {
            this.style.boxShadow = "none";
        });
    }

    const mainContent = document.querySelector("main img");
    if (mainContent) {
        mainContent.style.opacity = 0;
        mainContent.style.transform = "translateY(-20px)";
        setTimeout(() => {
            mainContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            mainContent.style.opacity = 1;
            mainContent.style.transform = "translateY(0)";
        }, 500);
    }
});

