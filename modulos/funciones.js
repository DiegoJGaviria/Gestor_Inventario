
// --- Inventario ---
let inventario = [
  { id: 1, nombre: 'ACETAMINOFEN 325 MG + HIDROCODONA 5 MG TAB CJA X 30 B/5', ncomercial: 'FENALGEX', Laboratorio: 'TECNOQUIMICAS', Lote: 'AG001', fechaVencimiento: '2025-12-31', cum: '20103181-5', invima: '2017M-0017664', cantidad: '1500', costo: '5000', iva: '0' },
  { id: 2, nombre: 'AMOXICILINA 500 MG CÁPSULA CJA X 100', ncomercial: 'AMOXIDAL', Laboratorio: 'ROEMMERS', Lote: 'BX892', fechaVencimiento: '2026-03-15', cum: '19953215-2', invima: '2016M-0012043', cantidad: '1200', costo: '3200', iva: '0' },
  { id: 3, nombre: 'LORATADINA 10 MG TABLETA CJA X 30', ncomercial: 'LORATEX', Laboratorio: 'GENFAR', Lote: 'LT773', fechaVencimiento: '2025-09-30', cum: '20046271-1', invima: '2007M-0006792', cantidad: '950', costo: '1800', iva: '0' },
  { id: 4, nombre: 'IBUPROFENO 400 MG TABLETA CJA X 100', ncomercial: 'DOLPRIN', Laboratorio: 'TECNOQUIMICAS', Lote: 'IB005', fechaVencimiento: '2025-11-20', cum: '19997116-3', invima: '2011M-0012310', cantidad: '1800', costo: '2900', iva: '0' },
  { id: 5, nombre: 'METFORMINA 850 MG TABLETA CJA X 60', ncomercial: 'GLAFORNIL', Laboratorio: 'LAFRANCOL', Lote: 'MF234', fechaVencimiento: '2026-01-05', cum: '19963598-1', invima: '2013M-0002416', cantidad: '1100', costo: '2500', iva: '0' },
  { id: 6, nombre: 'ACETAMINOFEN 325 MG + HIDROCODONA 5 MG TAB CJA X 30 B/5', ncomercial: 'FENALGEX', Laboratorio: 'TECNOQUIMICAS', Lote: 'AG001', fechaVencimiento: '2025-12-31', cum: '20103181-5', invima: '2017M-0017664', cantidad: '1500', costo: '5000', iva: '0' },
  { id: 7, nombre: 'AMOXICILINA 500 MG CÁPSULA CJA X 100', ncomercial: 'AMOXIDAL', Laboratorio: 'ROEMMERS', Lote: 'BX892', fechaVencimiento: '2026-03-15', cum: '19953215-2', invima: '2016M-0012043', cantidad: '1200', costo: '3200', iva: '0' },
  { id: 8, nombre: 'LORATADINA 10 MG TABLETA CJA X 30', ncomercial: 'LORATEX', Laboratorio: 'GENFAR', Lote: 'LT773', fechaVencimiento: '2025-09-30', cum: '20046271-1', invima: '2007M-0006792', cantidad: '950', costo: '1800', iva: '0' },
  { id: 9, nombre: 'IBUPROFENO 400 MG TABLETA CJA X 100', ncomercial: 'DOLPRIN', Laboratorio: 'TECNOQUIMICAS', Lote: 'IB005', fechaVencimiento: '2025-11-20', cum: '19997116-3', invima: '2011M-0012310', cantidad: '1800', costo: '2900', iva: '0' },
  { id: 10, nombre: 'METFORMINA 850 MG TABLETA CJA X 60', ncomercial: 'GLAFORNIL', Laboratorio: 'LAFRANCOL', Lote: 'MF234', fechaVencimiento: '2026-01-05', cum: '19963598-1', invima: '2013M-0002416', cantidad: '1100', costo: '2500', iva: '0' },
  { id: 11, nombre: 'ACETAMINOFEN 325 MG + HIDROCODONA 5 MG TAB CJA X 30 B/5', ncomercial: 'FENALGEX', Laboratorio: 'TECNOQUIMICAS', Lote: 'AG001', fechaVencimiento: '2025-12-31', cum: '20103181-5', invima: '2017M-0017664', cantidad: '1500', costo: '5000', iva: '0' },
  { id: 12, nombre: 'AMOXICILINA 500 MG CÁPSULA CJA X 100', ncomercial: 'AMOXIDAL', Laboratorio: 'ROEMMERS', Lote: 'BX892', fechaVencimiento: '2026-03-15', cum: '19953215-2', invima: '2016M-0012043', cantidad: '1200', costo: '3200', iva: '0' },
  { id: 13, nombre: 'LORATADINA 10 MG TABLETA CJA X 30', ncomercial: 'LORATEX', Laboratorio: 'GENFAR', Lote: 'LT773', fechaVencimiento: '2025-09-30', cum: '20046271-1', invima: '2007M-0006792', cantidad: '950', costo: '1800', iva: '0' },
  { id: 14, nombre: 'IBUPROFENO 400 MG TABLETA CJA X 100', ncomercial: 'DOLPRIN', Laboratorio: 'TECNOQUIMICAS', Lote: 'IB005', fechaVencimiento: '2025-11-20', cum: '19997116-3', invima: '2011M-0012310', cantidad: '1800', costo: '2900', iva: '0' },
  { id: 15, nombre: 'METFORMINA 850 MG TABLETA CJA X 60', ncomercial: 'GLAFORNIL', Laboratorio: 'LAFRANCOL', Lote: 'MF234', fechaVencimiento: '2026-01-05', cum: '19963598-1', invima: '2013M-0002416', cantidad: '1100', costo: '2500', iva: '0' }

];
let idEditando = null;

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

function agregarProductoDesdeUI() {
  const nombre = document.querySelector('.nombre').value.trim();
  const ncomercial = document.querySelector('.ncomercial').value.trim();
  const cantidad = document.querySelector('.cantidad').value.trim();
  const laboratorio = document.querySelector('.laboratorio').value.trim();
  const lote = document.querySelector('.lote').value.trim();
  const fechaVencimiento = document.querySelector('.fecha-vencimiento').value.trim();
  const cum = document.querySelector('.cum').value.trim();
  const invima = document.querySelector('.invima').value.trim();
  const costo = document.querySelector('.costo').value.trim();
  const iva = document.querySelector('.iva').value.trim();

  if (!nombre || !ncomercial || !cantidad || !laboratorio || !lote || !fechaVencimiento || !cum || !invima || !costo || !iva) {
    alert('Por favor completa todos los campos.');
    return;
  }

  inventario.push({
    id: inventario.length ? inventario[inventario.length - 1].id + 1 : 1,
    nombre, ncomercial, cantidad, Laboratorio: laboratorio, Lote: lote, fechaVencimiento, cum, invima, costo, iva
  });

  limpiarInputs();
  mostrarInventario();
}

function editarProducto(id) {
  const producto = inventario.find(p => p.id === id);
  if (!producto) return;
  document.querySelector('.nombre').value = producto.nombre;
  document.querySelector('.ncomercial').value = producto.ncomercial;
  document.querySelector('.cantidad').value = producto.cantidad;
  document.querySelector('.laboratorio').value = producto.Laboratorio;
  document.querySelector('.lote').value = producto.Lote;
  document.querySelector('.fecha-vencimiento').value = producto.fechaVencimiento;
  document.querySelector('.cum').value = producto.cum;
  document.querySelector('.invima').value = producto.invima;
  document.querySelector('.costo').value = producto.costo;
  document.querySelector('.iva').value = producto.iva;
  idEditando = id;
  const btn = document.getElementById('btnGuardar');
  btn.innerHTML = '<i class="fa fa-rotate-right"></i> Actualizar';
  btn.onclick = actualizarProducto;
}

function actualizarProducto() {
  const nombre = document.querySelector('.nombre').value.trim();
  const ncomercial = document.querySelector('.ncomercial').value.trim();
  const cantidad = document.querySelector('.cantidad').value.trim();
  const laboratorio = document.querySelector('.laboratorio').value.trim();
  const lote = document.querySelector('.lote').value.trim();
  const fechaVencimiento = document.querySelector('.fecha-vencimiento').value.trim();
  const cum = document.querySelector('.cum').value.trim();
  const invima = document.querySelector('.invima').value.trim();
  const costo = document.querySelector('.costo').value.trim();
  const iva = document.querySelector('.iva').value.trim();

  if (!nombre || !ncomercial || !cantidad || !laboratorio || !lote || !fechaVencimiento || !cum || !invima || !costo || !iva) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const index = inventario.findIndex(p => p.id === idEditando);
  if (index === -1) return;

  inventario[index] = {
    id: idEditando,
    nombre, ncomercial, cantidad, Laboratorio: laboratorio, Lote: lote, fechaVencimiento, cum, invima, costo, iva
  };

  limpiarInputs();
  mostrarInventario();
  const btn = document.getElementById('btnGuardar');
  btn.innerHTML = '<i class="fa fa-plus"></i> Agregar';
  btn.onclick = agregarProductoDesdeUI;
  idEditando = null;
}

function duplicarProducto(id) {
  const producto = inventario.find(p => p.id === id);
  if (!producto) return;
  const nuevoProducto = { ...producto, id: inventario.length ? inventario[inventario.length - 1].id + 1 : 1 };
  inventario.push(nuevoProducto);
  mostrarInventario();
}

function eliminarProducto(id) {
  inventario = inventario.filter(p => p.id !== id);
  mostrarInventario();
}

function limpiarInputs() {
  document.querySelector('.nombre').value = '';
  document.querySelector('.ncomercial').value = '';
  document.querySelector('.cantidad').value = '';
  document.querySelector('.laboratorio').value = '';
  document.querySelector('.lote').value = '';
  document.querySelector('.fecha-vencimiento').value = '';
  document.querySelector('.cum').value = '';
  document.querySelector('.invima').value = '';
  document.querySelector('.costo').value = '';
  document.querySelector('.iva').value = '';
  idEditando = null;
  const btn = document.getElementById('btnGuardar');
  btn.innerHTML = '<i class="fa fa-plus"></i> Agregar';
  btn.onclick = agregarProductoDesdeUI;
}

function filtrarInventario() {
  const filtro = document.querySelector('.filtro').value.toLowerCase();
  const tabla = document.getElementById('inventario');
  tabla.innerHTML = '';
  inventario
    .filter(item => item.nombre.toLowerCase().includes(filtro) || item.ncomercial.toLowerCase().includes(filtro))
    .forEach(item => {
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

// Funciones Modulo Usuario
let usuarios = [
  { id: 1, nombre: "Diego Gaviria", email: "Diego@mail.com", rol: "Administrador/a" },
  { id: 2, nombre: "Karoline Gaviria", email: "Karoline@mail.com", rol: "Coordinador/a" },
  { id: 3, nombre: "Juan Perez", email: "juan@gmail.com", rol: "Usuario/a" },
  { id: 4, nombre: "María Rodríguez", email: "maria.rodriguez@mail.com", rol: "Usuario/a" },
  { id: 5, nombre: "Luis Martínez", email: "luis.martinez@mail.com", rol: "Coordinador/a" },
  { id: 6, nombre: "Ana Torres", email: "ana.torres@mail.com", rol: "Administrador/a" },
  { id: 7, nombre: "Carlos Ruiz", email: "carlos.ruiz@mail.com", rol: "Usuario/a" },
  { id: 8, nombre: "Paola Herrera", email: "paola.herrera@mail.com", rol: "Usuario/a" },
  { id: 9, nombre: "Andrés Gómez", email: "andres.gomez@mail.com", rol: "Coordinador/a" },
  { id: 10, nombre: "Laura Mendoza", email: "laura.mendoza@mail.com", rol: "Administrador/a" },
  { id: 11, nombre: "Felipe Navarro", email: "felipe.navarro@mail.com", rol: "Usuario/a" },
  { id: 12, nombre: "Camila Castaño", email: "camila.castano@mail.com", rol: "Usuario/a" },
  { id: 13, nombre: "Julián Salazar", email: "julian.salazar@mail.com", rol: "Coordinador/a" }
];


// Renderiza la tabla de usuarios segun el filtro
function renderUsuarios(filtro = "") {
  const tbody = document.getElementById('tablaUsuarios');
  if (!tbody) return;
  tbody.innerHTML = "";
  usuarios
    .filter(u => u.nombre.toLowerCase().includes(filtro.toLowerCase()) || u.email.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(u => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${u.id}</td>
        <td>${u.nombre}</td>
        <td>${u.email}</td>
        <td>${u.rol}</td>
        <td>
          <button class="btn-accion edit" onclick="editarUsuario(${u.id})"><i class="fa fa-edit"></i> Editar</button>
          <button class="btn-accion delete" onclick="eliminarUsuario(${u.id})"><i class="fa fa-trash"></i> Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
}

// Funcion para editar usuario: carga los datos en el formulario y cambia el boton a "Actualizar"
window.editarUsuario = function (id) {
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return;
  document.getElementById('nombreUsuario').value = usuario.nombre;
  document.getElementById('emailUsuario').value = usuario.email;
  document.getElementById('rolUsuario').value = usuario.rol;
  const btnGuardar = document.getElementById('btnAgregarUsuario');
  btnGuardar.innerHTML = '<i class="fa fa-rotate-right"></i> Actualizar';
  btnGuardar.onclick = function (e) {
    e.preventDefault();
    actualizarUsuario(id);
  };
}

// Funcion para actualizar usuario
function actualizarUsuario(id) {
  const nombre = document.getElementById('nombreUsuario').value.trim();
  const email = document.getElementById('emailUsuario').value.trim();
  const rol = document.getElementById('rolUsuario').value.trim();
  if (!nombre || !email || !rol) {
    alert('Por favor completa todos los campos.');
    return;
  }
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return;
  usuario.nombre = nombre;
  usuario.email = email;
  usuario.rol = rol;
  document.getElementById('btnAgregarUsuario').innerHTML = '<i class="fa fa-plus"></i> Agregar';
  document.getElementById('btnAgregarUsuario').onclick = function (e) {
    e.preventDefault();
    agregarUsuarioDesdeUI();
  };
  document.getElementById('nombreUsuario').value = '';
  document.getElementById('emailUsuario').value = '';
  document.getElementById('rolUsuario').value = '';
  renderUsuarios(document.getElementById('buscarUsuario') ? document.getElementById('buscarUsuario').value : "");
}

// Funcion para agregar usuario (usada por el boton Agregar)

function agregarUsuarioDesdeUI() {
  const nombre = document.getElementById('nombreUsuario').value.trim();
  const email = document.getElementById('emailUsuario').value.trim();
  const rol = document.getElementById('rolUsuario').value.trim();
  if (!nombre || !email || !rol) {
    alert('Por favor completa todos los campos.');
    return;
  }
  usuarios.push({
    id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
    nombre, email, rol
  });
  document.getElementById('nombreUsuario').value = '';
  document.getElementById('emailUsuario').value = '';
  document.getElementById('rolUsuario').value = '';
  renderUsuarios(document.getElementById('buscarUsuario') ? document.getElementById('buscarUsuario').value : "");
}

// Eliminar usuario
window.eliminarUsuario = function (id) {
  usuarios = usuarios.filter(u => u.id !== id);
  renderUsuarios(document.getElementById('buscarUsuario') ? document.getElementById('buscarUsuario').value : "");
};


function irAInicio() {
  window.location.href = "inicio.html";
}

// Mostrar inventario al cargar
if (document.getElementById('inventario')) mostrarInventario();
if (document.getElementById('tablaUsuarios')) renderUsuarios();

//Funcion Descargar Resporte CSV
function descargarExcel() {
  let csv = "ID,Nombre,Nombre Comercial,Laboratorio,Lote,Fecha De Vencimiento,Cum,Invima,Cantidad,Costo,Iva\n";
  inventario.forEach(item => {
    csv += `P${item.id},"${item.nombre}","${item.ncomercial}","${item.Laboratorio}","${item.Lote}","${item.fechaVencimiento}","${item.cum}","${item.invima}",${item.cantidad},${item.costo},${item.iva}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "BD-inventario.csv";
  a.click();
  window.URL.revokeObjectURL(url);
}

function downloadXls() {
  const data = inventario.map(item => ({
    ID: `P${item.id}`,
    Nombre: item.nombre,
    "Nombre Comercial": item.ncomercial,
    Laboratorio: item.Laboratorio,
    Lote: item.Lote,
    "Fecha De Vencimiento": item.fechaVencimiento,
    Cum: item.cum,
    Invima: item.invima,
    Cantidad: item.cantidad,
    Costo: item.costo,
    Iva: item.iva
  }));

  // Crear una hoja de cálculo
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Crear un libro de trabajo y agregar la hoja
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Inventario");

  // Generar archivo Excel
  XLSX.writeFile(workbook, "BD-inventario.xlsx");
}
//Funcion Sidebar
const btnSidebar = document.getElementById('btnSidebar');
const sidebar = document.getElementById('sidebar');
btnSidebar.onclick = function () {
  sidebar.classList.toggle('open');

};


document.addEventListener('click', function (e) {
  if (!sidebar.contains(e.target) && !btnSidebar.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

document.getElementById('buscarUsuario').oninput = function () {
  renderUsuarios(this.value);
};
document.addEventListener('click', function (e) {
  if (!sidebar.contains(e.target) && !btnSidebar.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

document.getElementById('formUsuario').onsubmit = function (e) {
  e.preventDefault();
  agregarUsuarioDesdeUI();
};