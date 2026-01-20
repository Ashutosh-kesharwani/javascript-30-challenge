const panels = document.querySelectorAll(".panel");

      function toggleOpen() {
        // Close all other panels first
        panels.forEach((panel) => {
          if (panel !== this) {
            panel.classList.remove("open", "open-active");
          }
        });

        // Toggle current panel
        this.classList.toggle("open");

        // Handle transition end only once
        this.addEventListener("transitionend", function handler(e) {
          if (e.propertyName.includes("flex")) {
            this.classList.toggle("open-active");
            this.removeEventListener("transitionend", handler);
          }
        });
      }

      // Attach only click listeners
      panels.forEach((panel) => panel.addEventListener("click", toggleOpen));