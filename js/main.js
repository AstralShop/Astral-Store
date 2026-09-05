/* ==========================================================================
   main.js
   Comportamiento compartido de la interfaz: navbar responsive, placeholders
   de imagen y utilidades generales usadas en varias páginas.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initImageFallbacks();
  initYear();
});

/* --------------------------------------------------------------------
   Navbar / menú hamburguesa
   -------------------------------------------------------------------- */
function initNavbar() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  const header = document.querySelector(".navbar");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("nav-links--open");
    toggle.classList.toggle("nav-toggle--open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al hacer clic en un enlace (útil en móvil).
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("nav-links--open");
      toggle.classList.remove("nav-toggle--open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Sombra/fondo sólido al hacer scroll, para mejorar legibilidad.
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("navbar--scrolled", window.scrollY > 8);
    });
  }
}

/* --------------------------------------------------------------------
   Placeholder elegante cuando una imagen de assets/ no existe todavía
   -------------------------------------------------------------------- */
function initImageFallbacks() {
  document.querySelectorAll("img[data-fallback-label]").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        const label = img.getAttribute("data-fallback-label") || "Astral Store";
        const wrapper = document.createElement("div");
        wrapper.className = "img-placeholder";
        wrapper.setAttribute("role", "img");
        wrapper.setAttribute("aria-label", label);
        wrapper.innerHTML = `
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M24 4L29.5 17L43 20L33 29.5L35.5 43L24 36L12.5 43L15 29.5L5 20L18.5 17L24 4Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
          <span>${label}</span>
        `;
        img.replaceWith(wrapper);
      },
      { once: true }
    );
  });
}

/* --------------------------------------------------------------------
   Año actual en el footer
   -------------------------------------------------------------------- */
function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* --------------------------------------------------------------------
   Utilidades generales
   -------------------------------------------------------------------- */

/**
 * Muestra un mensaje de error elegante debajo de un campo de formulario.
 * @param {HTMLElement} fieldEl - el input relacionado
 * @param {HTMLElement} errorEl - el elemento donde se muestra el error
 * @param {string} message
 */
function showFieldError(fieldEl, errorEl, message) {
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.hidden = false;
  }
  if (fieldEl) {
    fieldEl.classList.add("input--error");
    fieldEl.setAttribute("aria-invalid", "true");
  }
}

function clearFieldError(fieldEl, errorEl) {
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.hidden = true;
  }
  if (fieldEl) {
    fieldEl.classList.remove("input--error");
    fieldEl.removeAttribute("aria-invalid");
  }
}

/**
 * Pequeño helper para simular un estado de carga en un botón.
 * @param {HTMLButtonElement} button
 * @param {boolean} isLoading
 */
function setButtonLoading(button, isLoading) {
  if (!button) return;
  if (isLoading) {
    button.dataset.originalText = button.textContent;
    button.disabled = true;
    button.classList.add("btn--loading");
    button.innerHTML = `<span class="spinner" aria-hidden="true"></span> Procesando...`;
  } else {
    button.disabled = false;
    button.classList.remove("btn--loading");
    button.textContent = button.dataset.originalText || button.textContent;
  }
}
