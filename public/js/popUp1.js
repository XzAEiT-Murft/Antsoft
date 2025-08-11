document.addEventListener('DOMContentLoaded', () => {
  console.log('Script cargado');

    // Abrir popup
    document.querySelectorAll('.open-popup').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-popup-target');
        if (!targetId) return;

        const popup = document.querySelector(targetId);
        if (popup) {
          popup.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closePopup() {
      const popup = document.getElementById('popupMasNos');
      if (popup) {
        popup.classList.add('hidden');
      }
      document.body.style.overflow = '';
    }

    // Cerrar popup al presionar el botón ✖
    document.querySelectorAll('#close-popup').forEach(button => {
      button.addEventListener('click', closePopup);
    });

    // Cerrar al hacer clic fuera del contenido del popup
    const popup = document.getElementById('popupMasNos');
    if (popup) {
      popup.addEventListener('click', e => {
        if (e.target === popup) {
          closePopup();
        }
      });
    }

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    });
});