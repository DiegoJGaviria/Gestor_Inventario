import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Sidebar({ showSidebar, toggleSidebar }) {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => logout();

  const menuItems = [
    { icon: "🏠", label: "Dashboard", path: "/dashboard" },
    { icon: "📦", label: "Ver Inventario", path: "/inventario" },
    { icon: "➕", label: "Agregar Producto", path: "/agregar-producto" },
    { icon: "🔄", label: "Movimientos", path: "/movimientos" },
    { icon: "📊", label: "Reportes", path: "/reportes" }
  ];

  const adminItems = [
    { icon: "👥", label: "Gestión de Usuarios", path: "/usuarios" },
    { icon: "⚙️", label: "Configuración", path: "/configuracion" }
  ];

  return (
    <>
      {/* Botón flotante */}
      <button
        className="menu-button"
        onClick={toggleSidebar}
        aria-label={showSidebar ? "Cerrar menú" : "Abrir menú"}
      >
        <span className="menu-icon">{showSidebar ? "✕" : "☰"}</span>
        <span className="menu-label">Menú</span>
      </button>

      {/* Overlay */}
      {showSidebar && <div className="overlay" onClick={toggleSidebar} />}

      {/* Sidebar Drawer */}
      <nav className={`sidebar ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-menu">
          {menuItems.map(item => (
            <button
              key={item.path}
              className="sidebar-button"
              onClick={() => {
                navigate(item.path);
                toggleSidebar();
              }}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}

          {isAdmin && (
            <>
              <div className="sidebar-divider" />
              {adminItems.map(item => (
                <button
                  key={item.path}
                  className="sidebar-button"
                  onClick={() => {
                    navigate(item.path);
                    toggleSidebar();
                  }}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </>
          )}
        </div>

        <button className="logout-button" onClick={handleLogout}>
          <span className="sidebar-icon">🚪</span>
          <span>Cerrar Sesión</span>
        </button>
      </nav>
    </>
  );
}

export default Sidebar;
