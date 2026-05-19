// LÓGICA DE INTERACCIÓN Y NAVEGACIÓN

// Cambia el estilo del menú al hacer scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  const barraProgreso = document.getElementById('barra-progreso');
  
  // Efecto de sombra en menú
  if (window.scrollY > 20) {
    nav.classList.add('con-desplazamiento');
  } else {
    nav.classList.remove('con-desplazamiento');
  }

  // Cálculo para la barra de progreso superior
  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
  const progreso = (window.scrollY / alturaTotal) * 100;
  if (barraProgreso) {
    barraProgreso.style.width = `${progreso}%`;
  }
});

// Función para mover la pantalla a secciones específicas (Botones laterales)
function goTo(idSeccion) {
  const elemento = document.getElementById(idSeccion);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }
}