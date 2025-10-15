// Solution simple pour les tooltips de logos clients
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner tous les éléments avec un attribut title dans le carrousel
  const logoContainers = document.querySelectorAll(".logo-scroll .w-40");

  logoContainers.forEach((container) => {
    // Créer un tooltip simple qui sera affiché au survol
    container.style.position = "relative";

    // Récupérer le texte du title
    const tooltipText = container.getAttribute("title");

    if (tooltipText) {
      // Créer l'élément tooltip
      const tooltip = document.createElement("div");
      tooltip.className = "logo-tooltip";
      tooltip.textContent = tooltipText;
      container.appendChild(tooltip);

      // On conserve le title natif comme fallback mais on ajoute notre version CSS
      container.addEventListener("mouseenter", function () {
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
      });

      container.addEventListener("mouseleave", function () {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
      });
    }
  });
});
