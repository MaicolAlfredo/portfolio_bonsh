// Seleccionar el botón del menú y el contenedor de navegación
const navToggle = document.querySelector(".nav-toggle");
const navContainer = document.querySelector(".nav__container");
const navLinks = document.querySelectorAll(".nav-links a"); // Seleccionar todos los enlaces

// Agregar evento de clic al botón
navToggle.addEventListener("click", () => {
  // Alternar la clase .nav-open en el contenedor nav
  navContainer.classList.toggle("nav-open");

  // Cambiar el ícono entre "bars" (menú) y "times" (cerrar)
  const icon = navToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContainer.classList.remove("nav-open"); // Quitar la clase .nav-open
    const icon = navToggle.querySelector("i");
    icon.classList.add("fa-bars"); // Restaurar ícono a "bars"
    icon.classList.remove("fa-times"); // Quitar "times"
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 500) {
    header.style.backgroundColor = "#222";
    header.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
});
