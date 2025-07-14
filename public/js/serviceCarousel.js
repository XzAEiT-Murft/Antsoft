document.addEventListener('DOMContentLoaded', () => {
  const serviceList = document.getElementById('serviceList');
  const prevBtn = document.getElementById('prev-button');
  const nextBtn = document.getElementById('next-button');

  // Inicializamos el índice actual y la cantidad de servicios por vista
  let currentIndex = 0;
  const maxVisible = 3; // Siempre mostrar 3 servicios a la vez

  // Obtener los servicios desde la variable 'servicios' que EJS pasa al cliente
  const servicios = <%- JSON.stringify(servicios) %>; // Servicios pasados desde el backend

  // Función para renderizar los servicios
  function renderServices() {
    serviceList.innerHTML = ''; // Limpiamos la lista de servicios

    // Mostrar los servicios actuales según el índice
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

    // Deshabilitar los botones de navegación cuando no hay más servicios
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + maxVisible >= servicios.length;
  }

  // Función para ir al servicio anterior
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= maxVisible; // Retrocedemos 3 servicios
      renderServices(); // Re-renderizamos los servicios
    }
  });

  // Función para ir al siguiente servicio
  nextBtn.addEventListener('click', () => {
    if (currentIndex + maxVisible < servicios.length) {
      currentIndex += maxVisible; // Avanzamos 3 servicios
      renderServices(); // Re-renderizamos los servicios
    }
  });

  renderServices(); // Inicializamos el carrusel con los primeros 3 servicios
});
