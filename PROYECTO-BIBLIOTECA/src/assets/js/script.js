// Arreglo de materiales bibliográficos
var materiales = [
    {tipo: "libro", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, editorial: "Sudamericana"},
    {tipo: "libro", titulo: "La Odisea", autor: "Homero", año: -800, editorial: "Desconocida"},
    {tipo: "revista", titulo: "National Geographic", autor: "", año: 2021, editorial: "National Geographic Partners, LLC"},
    {tipo: "tesis", titulo: "Estudio de la calidad del agua en el río Magdalena", autor: "Juan Pérez", año: 2020, editorial: "Universidad Nacional"},
    {tipo: "cdrom", titulo: "Enciclopedia Británica", autor: "", año: 2005, editorial: "Encyclopædia Britannica, Inc."}
  ];
  
  // Función para buscar y mostrar los resultados
  function search() {
    // Obtener los valores del cuadro de búsqueda y la selección de material
    var searchTerm = document.getElementById("searchBox").value.toLowerCase();
    var materialType = document.getElementById("materialSelect").value;
    
    // Filtrar los materiales por tipo y término de búsqueda
    var filteredMaterials = materiales.filter(function(material) {
      return (material.tipo === materialType || materialType === "todos") && 
             (material.titulo.toLowerCase().includes(searchTerm) ||
              material.autor.toLowerCase().includes(searchTerm) ||
              material.año.toString().includes(searchTerm) ||
              material.editorial.toLowerCase().includes(searchTerm));
    });
    
    // Obtener el cuerpo de la tabla de resultados y vaciarlo
    var resultsBody = document.getElementById("resultsBody");
    resultsBody.innerHTML = "";
    
    // Agregar cada resultado a la tabla de resultados
    filteredMaterials.forEach(function(material) {
      var row = document.createElement("tr");
      row.innerHTML = "<td>" + material.titulo + "</td>" +
                      "<td>" + material.autor + "</td>" +
                      "<td>" + material.año + "</td>" +
                      "<td>" + material.editorial + "</td>";
      resultsBody.appendChild(row);
    });
  }
  
  