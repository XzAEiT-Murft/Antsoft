document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const serviceList = document.getElementById('service-list-container');

  // Aquí guardamos el índice de los servicios
  let currentIndex = 0;
  const maxVisible = 3;  // Mostrar solo 3 servicios a la vez
  const servicios = window.servicios || []; // Cargar servicios desde el servidor

  function renderServices() {
    serviceList.innerHTML = '';

    const visibleServices = servicios.slice(currentIndex, currentIndex + maxVisible);
    visibleServices.forEach(servicio => {
      const serviceCard = document.createElement('section');
      serviceCard.classList.add('service-card');
      serviceCard.innerHTML = `
        <img src="${servicio.icono}" alt="${servicio.titulo}" class="service-icon" />
        <h2>${servicio.titulo}</h2>
        <p>${servicio.descripcion}</p>
      `;
      serviceList.appendChild(serviceCard);
    });

    // Deshabilitar botones si no hay más servicios
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex + maxVisible >= servicios.length;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= maxVisible; // Retroceder 3 servicios
      renderServices();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex + maxVisible < servicios.length) {
      currentIndex += maxVisible; // Avanzar 3 servicios
      renderServices();
    }
  });

  renderServices(); // Cargar los servicios iniciales
});
