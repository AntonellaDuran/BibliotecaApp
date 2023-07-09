// Obtener referencia a los elementos de la página
const inputCodigo = document.getElementById('id_libro');
const tablaLibros = document.getElementById('tabla_libros');

// Agregar evento de clic al botón "Consultar"
document.querySelector('button[type="button"]').addEventListener('click', () => {
  const codigoBuscado = inputCodigo.value.trim().toLowerCase();
  const libros = tablaLibros.querySelectorAll('tbody tr');
  
  // Iterar sobre los libros para buscar el código o nombre
  libros.forEach(libro => {
    const codigo = libro.querySelector('td:first-child').textContent.trim().toLowerCase();
    const nombre = libro.querySelector('td:nth-child(2)').textContent.trim().toLowerCase();
    
    if (codigo === codigoBuscado || nombre === codigoBuscado) {
      libro.style.display = '';
    } else {
      libro.style.display = 'none';
    }
  });
});
