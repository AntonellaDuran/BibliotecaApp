function Prestar() {
  // Obtener los valores de los campos de entrada
  const cedula = document.getElementById('Cedula').value;
  const nombres = document.getElementById('Nombres').value;
  const cantidad = document.getElementById('Cantidad').value;
  const libro = document.getElementById('Libro').value;
  const correo = document.getElementById('email').value;
  const observacion = document.getElementById('Observacion').value;
  const codigoLibro = document.getElementById('CodigoLibro').value;
  const fechaPrestamo = document.querySelector('.inicio input').value;
  const fechaDevolucion = document.querySelector('.egreso input').value;

  // Validar los campos de entrada
  if (cedula === '' || nombres === '' || cantidad === '' || libro === '' || correo === '' || observacion === '' || codigoLibro === '' || fechaPrestamo === '' || fechaDevolucion === '') {
    document.getElementById('error-message').textContent = 'Por favor, complete todos los campos.';
    return false;
  }
  alert('Listo tu solicitud de prestamo ha sido enviada!!');

  // Otro código para enviar los datos a un servidor o realizar otras acciones
}










