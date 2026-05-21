/* ==========================================================================
   1. BASE DE DATOS DE PAÍSES Y MÉTODOS DE PAGO
   ========================================================================= */
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
   2. CONTROLADORES DE INTERFAZ Y NAVEGACIÓN
   ========================================================================== */
function actualizarMetodo() {
    const seleccion = document.getElementById('country-select').value;
    const visualizador = document.getElementById('method-text');
    if (seleccion) {
        visualizador.innerHTML = bancos[seleccion];
    } else {
        visualizador.innerHTML = "Selecciona un país para ver los datos bancarios.";
    }
}

function solicitar(producto, idSelect) {
    const plan = document.getElementById(idSelect).value;
    const pais = document.getElementById('country-select').value || "MÉTODO NO SELECCIONADO";
    const resumen = `🚀 <b>PRODUCTO:</b> ${producto}<br>⏳ <b>PLAN:</b> ${plan}<br>🌎 <b>ORIGEN:</b> ${pais.toUpperCase()}`;
    document.getElementById('summary-text').innerHTML = resumen;
    document.getElementById('modal-confirm').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-confirm').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-confirm');
    if (event.target == modal) { modal.style.display = "none"; }
}

/* ==========================================================================
   3. SISTEMA DE REDIRECCIONES (WHATSAPP CONFIGURADO)
   ========================================================================== */
function verReferencias() {
    window.open("https://whatsapp.com/channel/0029VbBnYK9CHDydoBe7st2U", "_blank");
}

function enviarWhatsApp() {
    const info = document.getElementById('summary-text').innerText;
    const numero = "584243132113"; 
    const mensaje = encodeURIComponent("¡Hola! Quiero notificar un pago de mi pedido:\n\n" + info);
    // Enlace directo a WhatsApp
    window.open("https://wa.me/" + numero + "?text=" + mensaje, "_blank");
}

/* ==========================================================================
   4. SISTEMA DE BLOQUEO OBLIGATORIO DE GRUPO
   ========================================================================== */
function verificarBloqueoGrupo() {
    let visitas = parseInt(localStorage.getItem("visitas_grupo")) || 0;
    if (visitas >= 2) return; 
    
    visitas++;
    localStorage.setItem("visitas_grupo", visitas);
    
    let alertaDiv = document.createElement("div");
    alertaDiv.id = "bloqueo-grupo-modal";
    // Corrección de z-index y posición para que sea overlay completo
    alertaDiv.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(3,3,3,0.98); z-index:2147483647; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);";
    alertaDiv.innerHTML = `
        <div class="modal-content" style="border: 2px solid #00ffcc; box-shadow: 0 0 30px rgba(0, 255, 204, 0.4); max-width: 320px; padding: 30px; text-align: center; background: black; border-radius: 20px;">
            <h2 style="font-size: 24px; margin-bottom: 15px; color:#00ffcc; font-weight: 900;">⚠️ AVISO IMPORTANTE</h2>
            <p style="color: #eee; font-size: 14px; margin-bottom: 25px; line-height: 1.6;">Para poder seguir navegando, es obligatorio unirse al grupo oficial de referencias y soporte.</p>
            <a href="https://chat.whatsapp.com/GgLGErIQynBDXKKiFFrE4d" target="_blank" id="btn-unirse-obligatorio" style="background: linear-gradient(90deg, #00ffcc, #0077ff); color: black; text-decoration: none; display: inline-block; width: 85%; font-weight: 900; padding: 15px 0; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,255,204,0.3); font-size: 16px;">🚀 UNIRSE AL GRUPO AQUÍ</a>
        </div>
    `;
    document.body.appendChild(alertaDiv);
    document.getElementById("btn-unirse-obligatorio").addEventListener("click", function() {
        document.body.removeChild(alertaDiv);
    });
}

/* ==========================================================================
   5. NOTIFICACIONES DINÁMICAS (CORREGIDO DISEÑO Y POSICIÓN)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
    verificarBloqueoGrupo();

    // Generador de nodo HTML para la notificación con estilos corregidos
    let notifDiv = document.createElement("div");
    notifDiv.id = "notif-flotante";
    
    // ESTILOS CORREGIDOS: Posición lateral izquierda inferior, fondo oscuro, bordes neón, z-index medio
    notifDiv.style = "position: fixed; bottom: 85px; left: 15px; width: 280px; background: rgba(10, 10, 10, 0.95); border: 1px solid rgba(0, 255, 204, 0.3); border-radius: 15px; padding: 15px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); z-index: 1000; opacity: 0; transform: translateY(20px); transition: all 0.5s ease; pointer-events: none; font-family: sans-serif;";
    
    notifDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span id="notif-user" style="color: #00ffcc; font-weight: bold; font-size: 14px; text-transform: uppercase;"></span>
            <span style="color: rgba(0, 255, 204, 0.7); font-size: 10px; font-weight: bold; border: 1px solid rgba(0, 255, 204, 0.3); padding: 2px 6px; border-radius: 5px;">✓ 100% LEGAL</span>
        </div>
        <p id="notif-text" style="color: #eee; font-size: 12px; line-height: 1.5; margin: 0; font-weight: 300;"></p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 8px;">
            <span id="notif-time" style="color: #999; font-size: 10px;">Hace un momento</span>
            <span id="notif-tag" style="color: #ff0077; font-size: 10px; font-weight: bold; text-transform: uppercase;"></span>
        </div>
    `;
    document.body.appendChild(notifDiv);

    // Banco de datos para las referencias flotantes
    const nombres = ["José", "Carlos", "Mateo", "Luis", "Alejandro", "Santiago", "Manuel", "Andrés", "Javier", "David"];
    const productos = ["DRIP CLIENTE", "CUBAN MODS", "HG CHEATS", "PATO TEAM", "CUBAN MODS DELUXE", "FLORITE IOS"];
    const opiniones = [
        "ha dicho que la página es 100% recomendable, 100% legal. Entrega súper rápida.",
        "confirmó entrega inmediata. Compras 100% seguras y soporte verificado.",
        "comentó que es la mejor página de distribución, súper confiable y todo legal.",
        "dejó su referencia: Todo el proceso fue legal y transparente, entrega flash.",
        "recomienda el sitio al 100%. Cero estafas, todo completamente legal.",
        "escribió: Súper confiado con la compra, la instalación fue guiada y el sistema es real.",
        "reportó: Segunda vez que compro aquí y la velocidad sigue siendo increíble. Negocio serio."
    ];

    function generarNotificacion() {
        // Asignación de datos aleatorios
        document.getElementById("notif-user").innerText = nombres[Math.floor(Math.random() * nombres.length)];
        document.getElementById("notif-text").innerText = opiniones[Math.floor(Math.random() * opiniones.length)];
        document.getElementById("notif-tag").innerText = productos[Math.floor(Math.random() * productos.length)];
        document.getElementById("notif-time").innerText = "Hace un momento";

        // Animación de entrada (mostrarse)
        notifDiv.style.opacity = "1";
        notifDiv.style.transform = "translateY(0)";
        notifDiv.style.pointerEvents = "auto";

        // Temporizador para ocultar (desvanecerse)
        setTimeout(() => {
            notifDiv.style.opacity = "0";
            notifDiv.style.transform = "translateY(20px)";
            notifDiv.style.pointerEvents = "none";
            // Temporizador cíclico aleatorio para la siguiente notificación (10-20 segundos)
            setTimeout(generarNotificacion, Math.floor(Math.random() * 10000) + 10000);
        }, 6000); // Duración visible (6 segundos)
    }

    // Arranque inicial con retraso (3 segundos después de cargar la página)
    setTimeout(generarNotificacion, 3000);
});
