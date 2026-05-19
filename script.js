// LÓGICA DE INTERACCIÓN, NAVEGACIÓN Y ANIMACIONES ORIGINAL

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  const barraProgreso = document.getElementById('barra-progreso');

  // 1. Control del Scroll (Sombra del menú y barra de progreso)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('con-desplazamiento');
    } else {
      nav.classList.remove('con-desplazamiento');
    }

    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progreso = (window.scrollY / alturaTotal) * 100;
    if (barraProgreso) {
      barraProgreso.style.width = `${progreso}%`;
    }
  });

  // 2. Control de Animaciones al hacer Scroll (Tu algoritmo original con clases actualizadas)
  const elementosAAnimar = document.querySelectorAll('.revelar, .desde-izquierda, .desde-derecha, .escala-entrada');

  const verificarVisibilidad = () => {
    elementosAAnimar.forEach(elemento => {
      const posicion = elemento.getBoundingClientRect();
      if (posicion.top < window.innerHeight * 0.85) {
        elemento.classList.add('activo');
      }
    });
  };

  window.addEventListener('scroll', verificarVisibilidad);
  verificarVisibilidad(); // Ejecución inicial
});

// 3. Función para mover la pantalla a secciones específicas (Botones laterales)
function goTo(idSeccion) {
  const elemento = document.getElementById(idSeccion);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }
}