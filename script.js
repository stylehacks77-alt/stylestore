/* ==========================================================================
   1. BASE DE DATOS DE PAÍSES Y MÉTODOS DE PAGO (SOLO NOMBRES SIN DATOS PRIVADOS)
   ========================================================================== */
const bancos = {
    ven: "<b>🇻🇪 VENEZUELA:</b><br>• Método disponible: Pago Móvil (Banco de Venezuela 0102)",
    col: "<b>🇨🇴 COLOMBIA:</b><br>• Métodos disponibles: Nequi / Bancolombia",
    per: "<b>🇵🇪 PERÚ:</b><br>• Métodos disponibles: Yape / Plin",
    par: "<b>🇵🇾 PARAGUAY:</b><br>• Métodos disponibles: Banco Itaú / Billetera Personal",
    nic: "<b>🇳🇮 NICARAGUA:</b><br>• Método disponible: BAC Credomatic",
    dom: "<b>🇩🇴 REP. DOMINICANA:</b><br>• Métodos disponibles: Banco Popular / Banco BHD",
    mex: "<b>🇲🇽 MÉXICO:</b><br>• Métodos disponibles: OXXO / BBVA México",
    chi: "<b>🇨🇱 CHILE:</b><br>• Métodos disponibles: Cuenta RUT / Banco Estado",
    ecu: "<b>🇪🇨 ECUADOR:</b><br>• Métodos disponibles: Banco Pichincha / Banco Guayaquil",
    pan: "<b>🇵🇦 PANAMÁ:</b><br>• Métodos disponibles: Banco General (Yappy)",
    gua: "<b>🇬🇹 GUATEMALA:</b><br>• Método disponible: Banrural",
    hon: "<b>🇭🇳 HONDURAS:</b><br>• Métodos disponibles: Banco Atlántida / Ficohsa",
    sal: "<b>🇸🇻 EL SALVADOR:</b><br>• Métodos disponibles: Banco Agrícola / Chivo Wallet",
    bol: "<b>🇧🇴 BOLIVIA:</b><br>• Métodos disponibles: Código QR / Tigo Money",
    otr: "<b>🌐 OTROS MÉTODOS:</b><br>• Métodos disponibles: Wally / Zinli / Binance Pay ID"
};

/* ==========================================================================
   2. CONTROLADORES DE INTERFAZ Y PASARELA DE NAVEGACIÓN
   ========================================================================== */

// Actualiza el contenedor dinámico al cambiar de país en el selector principal
function actualizarMetodo() {
    const seleccion = document.getElementById('country-select').value;
    const visualizador = document.getElementById('method-text');
    
    if (seleccion) {
        visualizador.innerHTML = bancos[seleccion];
    } else {
        visualizador.innerHTML = "Selecciona un país para ver los datos bancarios.";
    }
}

// Procesa el plan elegido y despliega el Modal de Confirmación en pantalla
function solicitar(producto, idSelect) {
    const plan = document.getElementById(idSelect).value;
    const pais = document.getElementById('country-select').value || "MÉTODO NO SELECCIONADO";
    
    const resumen = `
        🚀 <b>PRODUCTO:</b> ${producto}<br>
        ⏳ <b>PLAN:</b> ${plan}<br>
        🌎 <b>ORIGEN:</b> ${pais.toUpperCase()}
    `;
    
    document.getElementById('summary-text').innerHTML = resumen;
    document.getElementById('modal-confirm').style.display = 'flex';
}

// Cierra manualmente el Modal de Confirmación
function cerrarModal() {
    document.getElementById('modal-confirm').style.display = 'none';
}

// Cierra el modal de forma intuitiva si el cliente pulsa fuera de la caja de contenido
window.onclick = function(event) {
    const modal = document.getElementById('modal-confirm');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* ==========================================================================
   3. SISTEMA DE REDIRECCIONES EN VIVO (WHATSAPP TRADICIONAL)
   ========================================================================== */

// Abre de forma nativa tus referencias en el WhatsApp tradicional (Sin intermediarios de Business)
function verReferencias() {
    window.open("https://whatsapp.com/channel/0029VbBnYK9CHDydoBe7st2U", "_blank");
}

// Genera un mensaje estructurado y redirige al chat de tu WhatsApp Personal para validar el pago
function enviarWhatsApp() {
    const info = document.getElementById('summary-text').innerText;
    window.open("https://wa.me/584243132113?text=" + encodeURIComponent("¡Hola! Quiero notificar un pago de mi pedido:\n\n" + info), "_blank");
}

/* ==========================================================================
   4. SISTEMA DE BLOQUEO OBLIGATORIO DE GRUPO (MÁXIMO 2 VECES POR PERSONA)
   ========================================================================== */
function verificarBloqueoGrupo() {
    // Lee la memoria local del navegador del cliente
    let visitas = parseInt(localStorage.getItem("visitas_grupo")) || 0;
    
    // Si ya completó sus dos ingresos permitidos, el script se detiene y no interrumpe más
    if (visitas >= 2) {
        return; 
    }
    
    // Si está dentro del rango, suma el contador y actualiza su registro local
    visitas++;
    localStorage.setItem("visitas_grupo", visitas);
    
    // Inyecta el modal de bloqueo flotante con diseño integrado en pantalla
    let alertaDiv = document.createElement("div");
    alertaDiv.id = "bloqueo-grupo-modal";
    alertaDiv.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(3,3,3,0.98); z-index:200000; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
    
    alertaDiv.innerHTML = `
        <div class="modal-content" style="border: 2px solid #00ffcc; box-shadow: 0 0 30px rgba(0, 255, 204, 0.4); max-width: 320px; padding: 30px; text-align: center;">
            <h2 class="product-title animate-arcoiris" style="font-size: 24px; margin-bottom: 15px; color:#00ffcc;">⚠️ AVISO IMPORTANTE</h2>
            <p style="color: #eee; font-size: 14px; line-height: 1.6; margin-bottom: 25px;">
                Para poder seguir navegando en la plataforma y ver los métodos activos, es obligatorio que te unas a nuestro grupo oficial de referencias y soporte de WhatsApp.
            </p>
            <a href="https://chat.whatsapp.com/GgLGErIQynBDXKKiFFrE4d" target="_blank" id="btn-unirse-obligatorio" class="btn-buy" style="background: linear-gradient(90deg, #00ffcc, #0077ff); color: black; text-decoration: none; display: inline-block; width: 85%; font-weight: 900; padding: 15px 0; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,255,204,0.3);">
                🚀 UNIRSE AL GRUPO AQUÍ
            </a>
        </div>
    `;
    document.body.appendChild(alertaDiv);
    
    // Desactiva el aviso visual al pulsar la acción de redirección
    document.getElementById("btn-unirse-obligatorio").addEventListener("click", function() {
        document.body.removeChild(alertaDiv);
    });
}

/* ==========================================================================
   5. GENERADOR DINÁMICO DE NOTIFICACIONES DE COMPRA (LADO IZQUIERDO)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
    // Comprueba el estado de visitas del cliente de forma inmediata al entrar
    verificarBloqueoGrupo();

    // Genera el nodo HTML para las alertas de opiniones/referencias flotantes
    let notifDiv = document.createElement("div");
    notifDiv.id = "notif-flotante";
    notifDiv.className = "notif-referencia";
    notifDiv.innerHTML = `
        <div class="notif-header">
            <span class="notif-user" id="notif-user">@Usuario</span>
            <span class="notif-verif">✓ 100% LEGAL</span>
        </div>
        <p class="notif-text" id="notif-text">La página es 100% recomendable.</p>
        <div class="notif-footer">
            <span class="notif-time" id="notif-time">Hace un momento</span>
            <span class="notif-tag" id="notif-tag">DRIP CLIENTE</span>
        </div>
    `;
    document.body.appendChild(notifDiv);

    // Banco de datos para las simulaciones automáticas en vivo
    const nombresReales = [
        "José", "Carlos", "Mateo", "Luis", "Alejandro", "Santiago", "Manuel", "Andrés", "Javier", "David",
        "Diego", "Daniel", "Fernando", "Gabriel", "Marcos", "Kevin", "Brayan", "Ángel", "Juan", "Pedro",
        "Sebastián", "Samuel", "Anthony", "Adrián", "Jesús", "Ezequiel", "Isaac", "Mathías", "Nicolás", "Alan",
        "Axel", "Damián", "Esteban", "Lautaro", "Tomás", "Benjamín", "Rodrigo", "Cristian", "Mauricio", "Álvaro",
        "Leonardo", "Hugo", "Iker", "Thiago", "Aaron", "Gael", "Alex", "Sandro", "Omar", "Yahir", "Julian"
    ];
    
    const productos = ["DRIP CLIENTE", "CUBAN MODS", "HG CHEATS", "PATO TEAM", "CUBAN MODS DELUXE", "FLORITE IOS"];
    const tiempos = ["Hace un momento", "Hace 1 min", "Hace 2 min", "Hace 3 min", "Hace 5 min"];

    const opinionesLegales = [
        "ha dicho que la página es 100% recomendable, 100% legal. Me entregaron mi Case súper rápido. Muchas gracias confiado.",
        "confirmó entrega inmediata. Compras 100% seguras y legales sin demoras. Excelente soporte técnico.",
        "comentó que es la mejor página de distribución, súper confiable, entrega al instante y todo legal. Recomendado.",
        "dejó su referencia: Todo el proceso fue legal y transparente, me entregaron mi servicio rápido y sin problemas.",
        "recomienda el sitio al 100%. Cero estafas, todo es completamente legal y la atención por WhatsApp es súper rápida.",
        "escribió: Súper confiado con la compra, la instalación fue guiada y el sistema es 100% real y legal. ¡Gracias!",
        "reportó: Segunda vez que compro aquí y la velocidad de entrega sigue siendo flash. Negocio serio y legal.",
        "mencionó: Excelente atención, todo legal y verificado. Mi acceso funcionó de inmediato sin errores. Muy confiable."
    ];

    // Lógica interna cíclica e intervalos dinámicos para lanzar las alertas en pantalla
    function generarNotificacionAleatoria() {
        const nombreAleatorio = nombresReales[Math.floor(Math.random() * nombresReales.length)];
        const opinionAleatoria = opinionesLegales[Math.floor(Math.random() * opinionesLegales.length)];
        const productoAleatorio = productos[Math.floor(Math.random() * productos.length)];
        const tiempoAleatorio = tiempos[Math.floor(Math.random() * tiempos.length)];

        document.getElementById("notif-user").innerText = nombreAleatorio;
        document.getElementById("notif-text").innerText = `${nombreAleatorio} ${opinionAleatoria}`;
        document.getElementById("notif-time").innerText = tiempoAleatorio;
        document.getElementById("notif-tag").innerText = productoAleatorio;

        notifDiv.classList.add("mostrar");

        // Oculta la notificación tras 5.5 segundos y programa el siguiente disparo aleatorio
        setTimeout(() => {
            notifDiv.classList.remove("mostrar");
            const proximoIntervalo = Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000;
            setTimeout(generarNotificacionAleatoria, proximoIntervalo);
        }, 5500); 
    }

    // Arranca la secuencia de notificaciones 4 segundos después de que cargue el sitio
    setTimeout(generarNotificacionAleatoria, 4000);
});
