const form = document.getElementById('prestamoForm');
const notificacion = document.getElementById('notificacion');
const themeToggle = document.getElementById('themeToggle');

const API_URL = 'http://localhost:3000/api/prestamos';

form.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const datosFormulario = new FormData(form);
    const payload = Object.fromEntries(datosFormulario.entries());

    try {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (respuesta.ok) {
            mostrarNotificacion('Registro completado', 'exito');
            form.reset();
        } else {
            mostrarNotificacion('Error en validación', 'error');
        }
    } catch (error) {
        mostrarNotificacion('Error de conexión', 'error');
    }
});

function mostrarNotificacion(mensaje, tipo) {
    notificacion.textContent = mensaje;
    notificacion.className = tipo;
    setTimeout(() => {
        notificacion.className = 'oculto';
    }, 3000);
}

themeToggle.addEventListener('click', () => {
    const temaActual = document.documentElement.getAttribute('data-theme');
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nuevoTema);
});