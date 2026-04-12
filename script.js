// Variable global para almacenar los datos del pedido actual
// Se mantiene "metodo" para rastrear la opción elegida en las ofertas
let pedido = { prod: "", t: "", pais: "", metodo: "" };

// ENLACE DEL GRUPO ACTUALIZADO (Sincronizado con el HTML)
const LINK_GRUPO = "https://chat.whatsapp.com/GgLGErIQynBDXKKiFFrE4d?mode=gi_t";

/**
 * NUEVA FUNCIÓN: Copia los datos bancarios al portapapeles del usuario.
 */
function copiarDatos() {
    const texto = document.getElementById('modal-data').innerText;
    
    if (!pedido.pais || pedido.pais === "" || texto.includes("Selecciona")) {
        alert("⚠️ Por favor, selecciona un país primero.");
        return;
    }

    navigator.clipboard.writeText(texto).then(() => {
        // Feedback visual en el botón de copiar
        const btnCopy = document.getElementById('btnCopiar');
        if (btnCopy) {
            const originalText = btnCopy.innerHTML;
            btnCopy.innerHTML = "<i class='fas fa-check'></i> ¡DATOS COPIADOS!";
            btnCopy.style.background = "#ffffff";
            btnCopy.style.color = "#000000";
            
            setTimeout(() => {
                btnCopy.innerHTML = originalText;
                btnCopy.style.background = "rgba(0, 242, 255, 0.1)";
                btnCopy.style.color = "#00f2ff";
            }, 2000);
        }
    }).catch(err => {
        console.error('Error al intentar copiar: ', err);
        alert("No se pudo copiar automáticamente. Por favor, selecciona el texto manualmente.");
    });
}

/**
 * Sincroniza la selección de país y muestra los datos bancarios correspondientes.
 */
function sincronizar(v) {
    pedido.pais = v;
    const mS = document.getElementById('main-country');
    const modS = document.getElementById('modal-country');
    
    if (mS) mS.value = v;
    if (modS) modS.value = v;
    
    let info = "";
    switch(v) {
        case "Argentina": 
            info = "🇦🇷 Mercado Pago | CVU: 0000003100006100224001 | | Titular: Cristian Ezequiel"; 
            break;
        case "Bolivia": 
            info = "🇧🇴 Banco yape: N° Cuenta 76677904 | QR disponible al privado"; 
            break;
        case "Brasil": 
            info = "🇧🇷 PIX: Chave ariannyyoselinp@gmail.com| Titular: "; 
            break;
        case "Chile": 
            info = "🇨🇱 Banco Estado (Cuenta corriente): 19843276235 | Titular: leonel Chávez | RUT: 29.061.432-5 -K"; 
            break; 
        case "Colombia": 
            info = "🇨🇴 NEQUI / Bancolombia: 3233438983 | Titular: STYLEHACKS OFICIAL"; 
            break;
        case "Costa Rica": 
            info = "🇨🇷 SINPE Móvil: 68823166 | Titular: wilber gonzales"; 
            break;
        case "Ecuador": 
            info = "🇪🇨 Banco Pichincha: N° Cuenta 2210169007"; 
            break;
        case "España": 
            info = "🇪🇸 Bizum / BBVA: 34643172469 | Titular: Roberto tejeda"; 
            break;
        case "USA": 
            info = "🇺🇸 Zelle: elbateresa26@gmail.com| Titular: elba Oviedo (Mínimo $20)"; 
            break;
        case "Guatemala": 
            info = "🇬🇹 Banco Industrial: N° Cuenta 4442201736| Bi Fáciles"; 
            break;
        case "Honduras": 
            info = "🇭🇳 banco azteca N° Cuenta 38510116351825 | Titular: Oscar Gómez"; 
            break;
        case "Mexico": 
            info = "🇲🇽 mercado pago/ Guardadito: N° 722969017644052486 |titular: Victor cortez| Oxxo México: 4217470291863799"; 
            break;
        case "Nicaragua": 
            info = "🇳🇮 Banpro: 10021455632147 | IBAN: NI45BANP0000000001002145563214"; 
            break;
        case "Panama": 
            info = "🇵🇦 Banco General: N° Cuenta 04-72-98-554321-0 (Ahorros)"; 
            break;
        case "Paraguay": 
            info = "🇵🇾 Banco itau: 320553574 nombre:yeruti Mariela| cédula:4988245| alias yerutibaez25@gmail.com*; 
            break;
        case "Peru": 
            info = "🇵🇪 BCP: 191-98776543-0-12 | Yape / Plin: 954302258 (Xiomari Moreno)"; 
            break;
        case "Republica Dominicana": 
            info = "🇩🇴 Banco Popular: 849314034: Manuel Martinez| Banreservas: 9606178055 | Qik: 1002559567"; 
            break;
        case "Uruguay": 
            info = "🇺🇾 Prex / Mi Dinero: Consultar número de cuenta actual al WhatsApp."; 
            break;
        case "Venezuela": 
            info = "🇻🇪 Venezuela (0102) | 04128240604 | V-31.376.662 | Pago Móvil"; 
            break;
        default: 
            info = "Selecciona un país para ver los datos bancarios.";
    }

    const mainD = document.getElementById('main-data');
    const modalD = document.getElementById('modal-data');
    if (mainD) mainD.innerText = info;
    if (modalD) modalD.innerText = info;
}

/**
 * Función para productos con DESCUENTO (Drip, One Mods).
 * Captura el producto, el tiempo y el método de pago seleccionado.
 */
function solicitarPromo(prod, idPrecio, idMetodo, vid) {
    const selectorPrecio = document.getElementById(idPrecio);
    const selectorMetodo = document.getElementById(idMetodo);
    
    if (!selectorPrecio || !selectorMetodo) return;

    pedido.prod = prod;
    pedido.t = selectorPrecio.value;
    pedido.metodo = selectorMetodo.value; 
    
    const infoP = document.getElementById('infoPedido');
    if (infoP) {
        infoP.innerHTML = `📦 <b>PRODUCTO:</b> ${pedido.prod}<br>⏳ <b>TIEMPO:</b> ${pedido.t}<br>💳 <b>MÉTODO:</b> ${pedido.metodo}`;
    }
    
    abrirInterfazPedido(vid);
}

/**
 * Función estándar para precios normales.
 * Soporta CUBAN MODS, DRIP, STRICKS, HG, BYPASS, FLORITE, CUBAN RAGE, BR MODS y PATO TEAM.
 */
function solicitar(prod, id, vid) {
    const selectorPrecio = document.getElementById(id);
    
    if (!selectorPrecio || selectorPrecio.disabled) {
        alert("Lo sentimos, este producto no está disponible en este momento.");
        return;
    }

    pedido.prod = prod;
    pedido.t = selectorPrecio.value;
    pedido.metodo = "General / Otro"; 
    
    const infoP = document.getElementById('infoPedido');
    if (infoP) {
        infoP.innerHTML = `📦 <b>PRODUCTO:</b> ${pedido.prod}<br>⏳ <b>TIEMPO:</b> ${pedido.t}`;
    }
    
    // Configurar el botón de video dentro del modal antes de abrirlo
    const btnV = document.getElementById('btnVideo');
    if (btnV) {
        btnV.onclick = () => {
            const vT = document.getElementById('vid');
            if (vT) { 
                vT.src = vid; 
                document.getElementById('reproductor').style.display = 'flex';
                vT.play();
            }
        };
    }
    
    abrirInterfazPedido(vid);
}

/**
 * Abre el modal y configura el video de referencia.
 */
function abrirInterfazPedido(vid) {
    const modal = document.getElementById('miModal');
    if (modal) modal.style.display = 'flex';
}

/**
 * WhatsApp del administrador con los detalles actualizados.
 */
function enviarWhatsApp() {
    if (!pedido.pais || pedido.pais === "") { 
        alert("⚠️ Por favor, selecciona primero tu país."); 
        return; 
    }
    const tel = "584243132113";
    
    // Formateo de la información del método de pago para el mensaje
    const infoMetodo = pedido.metodo && pedido.metodo !== "General / Otro" ? `%0A💳 *Método de Pago:* ${pedido.metodo}` : "";
    
    const msg = `Hola STYLEHACKS! 🚀 Ya realicé mi pago.%0A%0A📦 *Producto:* ${pedido.prod}%0A⏳ *Tiempo:* ${pedido.t}${infoMetodo}%0A🌎 *País:* ${pedido.pais}%0A%0AAdjunto el comprobante de transferencia.`;
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}

/**
 * Función para unirse al grupo.
 */
function irAlCanal() {
    window.open(LINK_GRUPO, '_blank');
}

/**
 * Cierra el modal.
 */
function cerrarModal() {
    const modal = document.getElementById('miModal');
    if (modal) modal.style.display = 'none';
}

/**
 * Cierra el reproductor de video.
 */
function cerrarVid() { 
    const r = document.getElementById('reproductor'); 
    const v = document.getElementById('vid');
    if (v) { v.pause(); v.src = ""; }
    if (r) r.style.display = 'none'; 
}

// Cerrar al hacer clic fuera
window.onclick = (e) => {
    const m = document.getElementById('miModal');
    if (e.target == m) cerrarModal();
};
