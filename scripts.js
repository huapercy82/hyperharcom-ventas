// Variable global para el carrito
let cartCount = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`¡${producto} ha sido agregado al carrito!`);
}

// Manejo del formulario de contacto conectando con Python (Flask)
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const responseText = document.getElementById('form-response');

    try {
        // Enviamos los datos al backend de Python
        const response = await fetch('/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre: nombre, mensaje: mensaje })
        });

        const data = await response.json();
        
        if (response.ok) {
            responseText.style.color = 'green';
            responseText.innerText = data.mensaje;
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Error en el servidor');
        }
    } catch (error) {
        responseText.style.color = 'red';
        responseText.innerText = 'Hubo un error al enviar el mensaje. Intenta de nuevo.';
        console.error(error);
    }
});