const REGISTRO = document.querySelector('form-regis');

function Registrate()
{

  const Identificacion = document.getElementById('Identificacion').value;
  const Nombres = document.getElementById('Nombres').value;
  const Telefono = document.getElementById('Telefono').value;
  const Carrera = document.getElementById('Carrera').value;
  const Correo= document.getElementById('Correo Institucional').value;
  const Contraseña = document.getElementById('Contraseña').value;
  const ConfirmarContraseña = document.getElementById('Confirmar Contraseña').value;
  
  // Vereficamos con un mensaje para ver si los datos se enviaron//

  alert('Felicidades te has registrado correctamente!!');

  window.location="Inicio.html";

}
