// Arreglo que guarda los productos del inventario
let inventario = [
  { id: 1, nombre: 'ACETAMINOFEN 500MG CJA X 100 TAB', Laboratorio: 'AG', Lote: 'AG001', cantidad: '1500' },
  { id: 2, nombre: 'AMOXICILINA 500MG CJA X 100 TAB', Laboratorio: 'La Santé', Lote: 'LS001', cantidad: '1200' },
  { id: 3, nombre: 'IBUPROFENO 400MG CJA X 100 TAB', Laboratorio: 'Genfar', Lote: 'Gf001', cantidad: '800' },
];
let idEditando = null;

// ✅ Función para mostrar la tabla completa
function mostrarInventario() {
  const tabla = document.getElementById('inventario');
  tabla.innerHTML = '';

  inventario.forEach(item => {
    const fila = document.createElement('tr');

    fila.innerHTML = `
      <td>${item.id}</td>
      <td>${item.nombre}</td> 
      <td>${item.Laboratorio}</td>
      <td>${item.Lote}</td> 
      <td>${item.cantidad}</td>
      <td>
        <button onclick="editarProducto(${item.id})">
          <i class="fa fa-edit"></i> Editar
        </button>
        <button onclick="duplicarProducto(${item.id})">
          <i class="fa fa-copy"></i> Duplicar
        </button>
        <button onclick="eliminarProducto(${item.id})">
          <i class="fa fa-trash"></i> Eliminar
        </button>
      </td>
    `;
    tabla.appendChild(fila);
  });
}

// ✅ Función para agregar producto desde la UI
function agregarProductoDesdeUI() {
  const nombreInput = document.querySelector('.nombre').value.trim();
  const cantidadInput = parseInt(document.querySelector('.cantidad').value);
  const laboratorioInput = document.querySelector('.laboratorio').value.trim();
  const loteInput = document.querySelector('.lote').value.trim();

  if (!nombreInput || isNaN(cantidadInput) || !laboratorioInput || !loteInput) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const nuevo = {
    id: inventario.length ? inventario[inventario.length - 1].id + 1 : 1,
    nombre: nombreInput,
    cantidad: cantidadInput,
    Laboratorio: laboratorioInput,
    Lote: loteInput
  };

  inventario.push(nuevo);

  limpiarInputs();
  mostrarInventario();
}

// ✅ Función para editar un producto
function editarProducto(id) {
  const producto = inventario.find(p => p.id === id);
  if (!producto) return;

  document.querySelector('.nombre').value = producto.nombre;
  document.querySelector('.cantidad').value = producto.cantidad;
  document.querySelector('.laboratorio').value = producto.Laboratorio;
  document.querySelector('.lote').value = producto.Lote;

  idEditando = id;

  const btn = document.getElementById('btnGuardar');
  btn.innerHTML = '<i class="fa fa-rotate-right"></i> Actualizar';
  btn.onclick = actualizarProducto;
}

// ✅ Función para actualizar un producto
function actualizarProducto() {
  const nombreInput = document.querySelector('.nombre').value.trim();
  const cantidadInput = parseInt(document.querySelector('.cantidad').value);
  const laboratorioInput = document.querySelector('.laboratorio').value.trim();
  const loteInput = document.querySelector('.lote').value.trim();

  if (!nombreInput || isNaN(cantidadInput) || !laboratorioInput || !loteInput) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const index = inventario.findIndex(p => p.id === idEditando);
  if (index === -1) return;

  inventario[index].nombre = nombreInput;
  inventario[index].cantidad = cantidadInput;
  inventario[index].Laboratorio = laboratorioInput;
  inventario[index].Lote = loteInput;

  limpiarInputs();
  mostrarInventario();
}

// ✅ Duplicar producto
function duplicarProducto(id) {
  const producto = inventario.find(p => p.id === id);
  if (!producto) return;

  const nuevoProducto = {
    id: inventario.length ? inventario[inventario.length - 1].id + 1 : 1,
    nombre: producto.nombre,
    cantidad: producto.cantidad,
    Laboratorio: producto.Laboratorio,
    Lote: producto.Lote
  };

  inventario.push(nuevoProducto);
  mostrarInventario();
}

// ✅ Eliminar producto
function eliminarProducto(id) {
  inventario = inventario.filter(p => p.id !== id);
  mostrarInventario();
}

// ✅ Limpiar inputs
function limpiarInputs() {
  document.querySelector('.nombre').value = '';
  document.querySelector('.cantidad').value = '';
  document.querySelector('.laboratorio').value = '';
  document.querySelector('.lote').value = '';
  idEditando = null;

  const btn = document.getElementById('btnGuardar');
  btn.innerHTML = '<i class="fa fa-plus"></i> Agregar';
  btn.onclick = agregarProductoDesdeUI;
}

// ✅ Filtrar productos
function filtrarInventario() {
  const filtro = document.querySelector('.filtro').value.toLowerCase();
  const tabla = document.getElementById('inventario');
  tabla.innerHTML = '';

  inventario
    .filter(item => item.nombre.toLowerCase().includes(filtro))
    .forEach(item => {
      const fila = document.createElement('tr');

      fila.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nombre}</td> 
        <td>${item.Laboratorio}</td>
        <td>${item.Lote}</td> 
        <td>${item.cantidad}</td>
        <td>
          <button onclick="editarProducto(${item.id})">
            <i class="fa fa-edit"></i> Editar
          </button>
          <button onclick="duplicarProducto(${item.id})">
            <i class="fa fa-copy"></i> Duplicar
          </button>
          <button onclick="eliminarProducto(${item.id})">
            <i class="fa fa-trash"></i> Eliminar
          </button>
        </td>
      `;
      tabla.appendChild(fila);
    });
}

// ✅ Mostrar inventario al cargar
mostrarInventario();
