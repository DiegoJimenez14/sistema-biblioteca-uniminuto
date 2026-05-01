// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    
    // Verificar si el botón existe para evitar errores
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Alterna la clase 'dark-theme' en el elemento body
            document.body.classList.toggle('dark-theme');
            
            // Opcional: Cambiar el texto del botón según el tema
            if (document.body.classList.contains('dark-theme')) {
                themeToggleBtn.textContent = 'Modo Claro';
            } else {
                themeToggleBtn.textContent = 'Modo Oscuro';
            }
        });
    }
});