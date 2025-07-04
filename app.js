// Arreglo que guarda los productos del inventario
let inventario = [
  { id: 1, nombre: 'Producto A', cantidad: 10 },
  { id: 2, nombre: 'Producto B', cantidad: 5 }
];

// Función para mostrar el inventario en el HTML
function mostrarInventario() {
  const div = document.getElementById('inventario'); // encuentra el div
  div.innerHTML = ''; // limpia el contenido anterior

  // recorre cada producto del inventario y lo agrega al HTML
  inventario.forEach(item => {
    div.innerHTML += `
      <p>
        ${item.id}. ${item.nombre} - ${item.cantidad}
        <button onclick="eliminarProducto(${item.id})">Eliminar</button>
      </p>`;
  });
}
// Función para agregar un producto desde los inputs de la UI
function agregarProductoDesdeUI() {
  const nombreInput = document.querySelector('.nombre').value.trim();
  const cantidadInput = parseInt(document.querySelector('.cantidad').value);


  // Validar que el usuario haya escrito algo
  if (!nombreInput || isNaN(cantidadInput)) {
    alert('Por favor completa todos los campos.');
    return;
  }

  // Crear el nuevo producto
  const nuevo = {
    id: inventario.length ? inventario[inventario.length - 1].id + 1 : 1,
    nombre: nombreInput,
    cantidad: cantidadInput
  };

  // Agregarlo al array
  inventario.push(nuevo);

  // Limpiar inputs
  document.querySelector('.nombre').value = '';
  document.querySelector('.cantidad').value = '';


  // Mostrar inventario actualizado
  mostrarInventario();
}

// Función para eliminar un producto por ID
function eliminarProducto(id) {
  inventario = inventario.filter(p => p.id !== id);
  mostrarInventario();
}

// Llamar la función al cargar para mostrar los datos iniciales
mostrarInventario();
