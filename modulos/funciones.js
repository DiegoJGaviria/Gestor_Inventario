// Arreglo que guarda los productos del inventario
let inventario = [
  { id: 1, nombre: 'ACETAMINOFEN 325 MG + HIDROCODONA 5 MG TAB CJA X 30 B/5', ncomercial: 'FENALGEX', Laboratorio: 'TECNOQUIMICAS', Lote: 'AG001', fechaVencimiento: '2025-12-31', cum: '20103181-5', invima: '2017M-0017664', cantidad: '1500', costo: '5000', iva: '0', },
  { id: 2, nombre: 'AMOXICILINA 500 MG CÁPSULA CJA X 100', ncomercial: 'AMOXIDAL', Laboratorio: 'ROEMMERS', Lote: 'BX892', fechaVencimiento: '2026-03-15', cum: '19953215-2', invima: '2016M-0012043', cantidad: '1200', costo: '3200', iva: '0' },
  { id: 3, nombre: 'LORATADINA 10 MG TABLETA CJA X 30', ncomercial: 'LORATEX', Laboratorio: 'GENFAR', Lote: 'LT773', fechaVencimiento: '2025-09-30', cum: '20046271-1', invima: '2007M-0006792', cantidad: '950', costo: '1800', iva: '0' },
  { id: 4, nombre: 'IBUPROFENO 400 MG TABLETA CJA X 100', ncomercial: 'DOLPRIN', Laboratorio: 'TECNOQUIMICAS', Lote: 'IB005', fechaVencimiento: '2025-11-20', cum: '19997116-3', invima: '2011M-0012310', cantidad: '1800', costo: '2900', iva: '0' },
  { id: 5, nombre: 'METFORMINA 850 MG TABLETA CJA X 60', ncomercial: 'GLAFORNIL', Laboratorio: 'LAFRANCOL', Lote: 'MF234', fechaVencimiento: '2026-01-05', cum: '19963598-1', invima: '2013M-0002416', cantidad: '1100', costo: '2500', iva: '0' }

];
let idEditando = null;

// ✅ Función para mostrar la tabla completa
function mostrarInventario() {
  const tabla = document.getElementById('inventario');
  tabla.innerHTML = '';

  inventario.forEach(item => {
    const fila = document.createElement('tr');

    fila.innerHTML = `
      <td>P${item.id}</td>
      <td>${item.nombre}</td> 
      <td>${item.ncomercial}</td>
      <td>${item.Laboratorio}</td>
      <td>${item.Lote}</td> 
      <td>${item.fechaVencimiento}</td>
      <td>${item.cum}</td>
      <td>${item.invima}</td> 
      <td>${item.cantidad}</td>
      <td>$ ${item.costo}</td>
      <td>${item.iva}%</td>
      <td>
        <button onclick="editarProducto(${item.id})"><i class="fa fa-edit"></i></button>
        <button onclick="duplicarProducto(${item.id})"><i class="fa fa-copy"></i></button>
        <button onclick="eliminarProducto(${item.id})"><i class="fa fa-trash"></i></button>
      </td>
    `;
    tabla.appendChild(fila);
  });
}

// ✅ Función para agregar producto desde la UI
function agregarProductoDesdeUI() {
  const nombreInput = document.querySelector('.nombre').value.trim();
  const ncomercialInput = document.querySelector('.ncomercial').value.trim();
  const cantidadInput = parseInt(document.querySelector('.cantidad').value);
  const laboratorioInput = document.querySelector('.laboratorio').value.trim();
  const loteInput = document.querySelector('.lote').value.trim();
  const fechaVencimientoInput = document.querySelector('.fecha-Vencimiento').value;
  const cumInput = document.querySelector('.cum').value.trim();
  const invimaInput = document.querySelector('.invima').value.trim();
  const costoInput = document.querySelector('.costo').value.trim();
  const ivaInput = document.querySelector('.iva').value.trim();

  if (!nombreInput || !ncomercialInput || isNaN(cantidadInput) || !laboratorioInput || !loteInput || !fechaVencimientoInput || !cumInput || !invimaInput || !costoInput || !ivaInput) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const nuevo = {
    id: inventario.length ? inventario[inventario.length - 1].id + 1 : 1,
    nombre: nombreInput,
    ncomercial: ncomercialInput,
    cantidad: cantidadInput,
    Laboratorio: laboratorioInput,
    Lote: loteInput,
    fechaVencimiento: fechaVencimientoInput,
    cum: cumInput,
    invima: invimaInput,
    costo: costoInput,
    iva: ivaInput
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
  document.querySelector('.ncomercial').value = producto.ncomercial;
  document.querySelector('.cantidad').value = producto.cantidad;
  document.querySelector('.laboratorio').value = producto.Laboratorio;
  document.querySelector('.lote').value = producto.Lote;
  document.querySelector('.fecha-Vencimiento').value = producto.fechaVencimiento;
  document.querySelector('.cum').value = producto.cum;
  document.querySelector('.invima').value = producto.invima;
  document.querySelector('.costo').value = producto.costo;
  document.querySelector('.iva').value = producto.iva;

  idEditando = id;

  const btn = document.getElementById('btnGuardar');
  btn.innerHTML = '<i class="fa fa-rotate-right"></i> Actualizar';
  btn.onclick = actualizarProducto;
}

// ✅ Función para actualizar un producto
function actualizarProducto() {
  const nombreInput = document.querySelector('.nombre').value.trim();
  const ncomercialInput = document.querySelector('.ncomercial').value.trim();
  const cantidadInput = parseInt(document.querySelector('.cantidad').value);
  const laboratorioInput = document.querySelector('.laboratorio').value.trim();
  const loteInput = document.querySelector('.lote').value.trim();
  const fechaVencimientoInput = document.querySelector('.fecha-Vencimiento').value;
  const cumInput = document.querySelector('.cum').value.trim();
  const invimaInput = document.querySelector('.invima').value.trim();
  const costoInput = document.querySelector('.costo').value.trim();
  const ivaInput = document.querySelector('.iva').value.trim();

  if (!nombreInput || !ncomercialInput || isNaN(cantidadInput) || !laboratorioInput || !loteInput || !fechaVencimientoInput || !cumInput || !invimaInput || !costoInput || !ivaInput) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const index = inventario.findIndex(p => p.id === idEditando);
  if (index === -1) return;

  inventario[index].nombre = nombreInput;
  inventario[index].ncomercial = ncomercialInput;
  inventario[index].cantidad = cantidadInput;
  inventario[index].Laboratorio = laboratorioInput;
  inventario[index].Lote = loteInput;
  inventario[index].fechaVencimiento = fechaVencimientoInput;
  inventario[index].cum = cumInput;
  inventario[index].invima = invimaInput;
  inventario[index].costo = costoInput;
  inventario[index].iva = ivaInput;

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
    ncomercial: producto.ncomercial,
    cantidad: producto.cantidad,
    Laboratorio: producto.Laboratorio,
    Lote: producto.Lote,
    fechaVencimiento: producto.fechaVencimiento,
    cum: producto.cum,
    invima: producto.invima,
    costo: producto.costo,
    iva: producto.iva
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
  document.querySelector('.ncomercial').value = '';
  document.querySelector('.cantidad').value = '';
  document.querySelector('.laboratorio').value = '';
  document.querySelector('.lote').value = '';
  document.querySelector('.fecha-Vencimiento').value = '';
  document.querySelector('.cum').value = '';
  document.querySelector('.invima').value = '';
  document.querySelector('.costo').value = '';
  document.querySelector('.iva').value = '';
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
        <td>${item.ncomercial}</td>
        <td>${item.Laboratorio}</td>
        <td>${item.Lote}</td> 
        <td>${item.fechaVencimiento}</td>
        <td>${item.cum}</td>
        <td>${item.invima}</td>
        <td>${item.cantidad}</td>
        <td>${item.costo}</td>
        <td>${item.iva}%</td>
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
function irAInicio() {
  window.location.href = "../inicio/inicio.html";
}

// ✅ Mostrar inventario al cargar
mostrarInventario();
