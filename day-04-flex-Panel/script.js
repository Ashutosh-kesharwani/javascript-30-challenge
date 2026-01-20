const panels = document.querySelectorAll(".panel");

      function toggleOpen() {
        // Close all other panels first i.e which are open already close them
        panels.forEach((panel) => {
          if (panel !== this) {
            panel.classList.remove("open", "open-active");
          }
        });

        // Toggle current panel [now open current one]
        this.classList.toggle("open");

        // Handle transition end only once 
        this.addEventListener("transitionend", function handler(e) {
          if (e.propertyName.includes("flex")) {
            this.classList.toggle("open-active");

            // remove this event after executed so that it will not listen always
            this.removeEventListener("transitionend", handler);
          }
        });
      }

      // Attach only click listeners
      panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
