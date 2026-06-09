from flask import Flask, request, jsonify, send_from_directory
import os

app = Flask(__name__, static_folder='.', static_url_path='')

# Ruta principal para servir el HTML
@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

# Funcionalidad básica: Endpoint para simular recepción de contacto o pedidos
@app.route('/api/contacto', methods=['POST'])
def recibir_contacto():
    datos = request.json
    nombre = datos.get('nombre', 'Cliente')
    mensaje = datos.get('mensaje', '')
    # Aquí se podría guardar en una base de datos
    return jsonify({
        "estado": "éxito",
        "mensaje": f"¡Gracias {nombre}! Hemos recibido tu mensaje: '{mensaje}'. Nos pondremos en contacto pronto."
    }), 200

if __name__ == '__main__':
    print("🚀 Servidor HYPERHARCOM iniciado en http://localhost:5000")
    app.run(debug=True, port=5000)