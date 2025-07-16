export function useAuth() {
  // 👇 Esto es solo de ejemplo
  return {
    isAdmin: true, // Cambia a false si quieres ocultar el menú admin
    logout: () => {
      console.log("Sesión cerrada");
      // Aquí puedes limpiar localStorage o redirigir al login
    }
  };
}
