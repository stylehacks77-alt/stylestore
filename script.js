/* ==========================================================================
   1. BASE DE DATOS DE PAÍSES Y MÉTODOS DE PAGO
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
    
    const resumen = `
        🚀 <b>PRODUCTO:</b> ${producto}<br>
        ⏳ <b>PLAN:</b> ${plan}<br>
        🌎 <b>ORIGEN:</b> ${pais.toUpperCase()}
    `;
    
    document.getElementById('summary-text').innerHTML = resumen;
    document.getElementById('modal-confirm').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-confirm').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-confirm');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* ==========================================================================
   3. SISTEMA DE REDIRECCIONES EN VIVO
   ========================================================================== */
function verReferencias() {
    window.open("https://whatsapp.com/channel/0029VbBnYK9CHDydoBe7st2U", "_blank");
}

function enviarWhatsApp() {
    const info = document.getElementById('summary-text').innerText;
    const numero = "584243132113"; 
    const mensaje = encodeURIComponent("¡Hola! Quiero notificar un pago de mi pedido:\n\n" + info);
    
    const webUrl = "https://wa.me/" + numero + "?text=" + mensaje;
    window.open(webUrl, '_blank');
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
    
    document.getElementById("btn-unirse-obligatorio").addEventListener("click", function() {
        document.body.removeChild(alertaDiv);
    });
}

/* ==========================================================================
   5. GENERADOR DINÁMICO DE NOTIFICACIONES
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function() {
    verificarBloqueoGrupo();

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

    const nombres = ["José", "Carlos", "Mateo", "Luis", "Alejandro", "Santiago", "Manuel", "Andrés", "Javier", "David", "Diego", "Daniel", "Fernando", "Gabriel", "Marcos", "Kevin", "Brayan", "Ángel", "Juan", "Pedro", "Sebastián", "Samuel", "Anthony", "Adrián", "Jesús", "Ezequiel", "Isaac", "Mathías", "Nicolás", "Alan", "Axel", "Damián", "Esteban", "Lautaro", "Tomás", "Benjamín", "Rodrigo", "Cristian", "Mauricio", "Álvaro", "Leonardo", "Hugo", "Iker", "Thiago", "Aaron", "Gael", "Alex", "Sandro", "Omar", "Yahir", "Julian", "Valentino", "Ignacio", "Facundo", "Santino", "Bautista", "Joaquín", "Felipe", "Bruno", "Vicente", "Emilio", "César", "Iván", "Héctor", "Raúl", "Ricardo", "Víctor", "Jorge", "Francisco", "Alberto", "Arturo", "Enrique", "Eduardo", "Gerardo", "Armando", "Alfredo", "Félix", "Ernesto", "Gustavo", "Ramiro", "Agustín", "Pablo", "Hernán", "Mariano", "Federico", "Nicolás", "Lucas", "Franco", "Federico", "Gonzalo", "Tomás", "Matías", "Juan", "Pedro", "Jorge", "Carlos", "Luis", "José", "Manuel", "Antonio", "Brayan", "Kevin", "Jefferson", "Yohandry", "Jean", "Jhon", "Deyvis", "Jhoan", "Darwin", "Elvis", "Junior", "Anderson", "Edixon", "Yorman", "Jhonny", "Alexander", "Christopher", "Jhonatan", "Deiker", "Yeferson", "Yoel", "Jhon", "Douglas", "Ronal", "Edgar", "Franklin", "Richard", "Jhon", "Wilmer", "Yosue", "Jhon", "Keiner", "Jorvi", "Jhon", "Jonnathan", "Jhon", "Jose", "Jhon", "Gabriel", "Jhon", "Miguel"];
    const productos = ["DRIP CLIENTE", "CUBAN MODS", "HG CHEATS", "PATO TEAM", "CUBAN MODS DELUXE", "FLORITE IOS"];
    const opiniones = [
        "ha dicho que la página es 100% recomendable, 100% legal.",
        "confirmó entrega inmediata. Compras 100% seguras.",
        "comentó que es la mejor página, entrega al instante.",
        "dejó su referencia: Todo el proceso fue legal y transparente.",
        "recomienda el sitio al 100%. Cero estafas, todo legal.",
        "escribió: Súper confiado, la instalación fue guiada.",
        "reportó: Segunda vez que compro aquí, entrega flash.",
        "mencionó: Excelente atención, todo legal y verificado."
    ];

    function generar() {
        document.getElementById("notif-user").innerText = nombres[Math.floor(Math.random() * nombres.length)];
        document.getElementById("notif-text").innerText = opiniones[Math.floor(Math.random() * opiniones.length)];
        document.getElementById("notif-tag").innerText = productos[Math.floor(Math.random() * productos.length)];

        notifDiv.classList.add("mostrar");

        // Visible por 3 segundos
        setTimeout(() => {
            notifDiv.classList.remove("mostrar");
            // Espera 15 segundos antes de mostrar la siguiente
            setTimeout(generar, 15000);
        }, 3000); 
    }

    setTimeout(generar, 3000);
});
