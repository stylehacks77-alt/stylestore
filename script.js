// Variable global para almacenar los datos del pedido actual
let pedido = { prod: "", t: "", pais: "", metodo: "" };

// ENLACE DEL GRUPO ACTUALIZADO
const LINK_GRUPO = "https://chat.whatsapp.com/GgLGErIQynBDXKKiFFrE4d?mode=gi_t";

/**
 * LÓGICA DE MEMORIA Y DIFUMINADO
 * Se ejecuta apenas carga la página para verificar si el usuario ya entró antes.
 */
document.addEventListener("DOMContentLoaded", function() {
    const yaSeUnio = localStorage.getItem("usuario_unido_sh");
    const bloqueo = document.getElementById("bloqueo-inicial");
    
    if (!yaSeUnio && bloqueo) {
        // Si es la primera vez, mostramos el bloqueo con difuminado
        bloqueo.style.display = "flex";
    }
});

/**
 * Función para unirse al grupo y desbloquear la página para siempre.
 */
function unirseYEntrar() {
    // 1. Abrimos el grupo
    window.open(LINK_GRUPO, "_blank");
    
    // 2. Guardamos la marca en el navegador
    localStorage.setItem("usuario_unido_sh", "true");
    
    // 3. Quitamos el bloqueo
    const bloqueo = document.getElementById("bloqueo-inicial");
    if (bloqueo) {
        bloqueo.style.display = "none";
    }
}

/**
 * Función para copiar los datos bancarios al portapapeles.
 */
function copiarDatos() {
    const texto = document.getElementById('modal-data').innerText;
    
    if (!pedido.pais || pedido.pais === "" || texto.includes("Selecciona")) {
        alert("⚠️ Por favor, selecciona un país primero.");
        return;
    }

    navigator.clipboard.writeText(texto).then(() => {
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
        alert("No se pudo copiar automáticamente. Por favor, selecciona el texto manualmente.");
    });
}

/**
 * Sincroniza la selección de país y muestra los datos bancarios actualizados.
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
            info = "🇦🇷 Ualá | Nombre: César Correa | CVU: 0000184305010007732302 | Alias: cescorrea1"; 
            break;
        case "Bolivia": 
            info = "🇧🇴 Yape: N° Cuenta 52656932 | Yape QR: Código disponible en imagen"; 
            break;
        case "Brasil": 
            info = "🇧🇷 PIX: Chave 91991076791"; 
            break;
        case "Chile": 
            info = "🇨🇱 Banco Estado (CuentaRUT): 23710151 | Titular: XAVIER FUENZALIDA | RUT: 23.710.151-0"; 
            break; 
        case "Colombia": 
            info = "🇨🇴 NEQUI: 3233438983"; 
            break;
        case "Costa Rica": 
            info = "🇨🇷 SINPE Móvil: 72805302"; 
            break;
        case "Ecuador": 
            info = "🇪🇨 Banco Pichincha: N° Cuenta 2207195565"; 
            break;
        case "España": 
            info = "🇪🇸 Bizum: 637 07 09 26 (Xiomari Moreno)"; 
            break;
        case "USA": 
            info = "🇺🇸 Zelle: elbateresa26@gmail.com (Mínimo $20.00 USD)"; 
            break;
        case "Guatemala": 
            info = "🇬🇹 Banrural: N° Cuenta 4431164091"; 
            break;
        case "Honduras": 
            info = "🇭🇳 Bampais: N° Cuenta 216400100524"; 
            break;
        case "Mexico": 
            info = "🇲🇽 Albo: 721180100042683432 | Nu México (OXXO): 5101 2506 8691 9389"; 
            break;
        case "Nicaragua": 
            info = "🇳🇮 BAC: 371674409 | IBAN: NI37BAMC0000000000371674409"; 
            break;
        case "Panama": 
            info = "🇵🇦 Consultar datos de transferencia al privado."; 
            break;
        case "Paraguay": 
            info = "🇵🇾 Itaú: 300406285 (Diego Leiva) | Billetera Personal: 0993363424"; 
            break;
        case "Peru": 
            info = "🇵🇪 Yape / Plin: 954302258"; 
            break;
        case "Republica Dominicana": 
            info = "🇩🇴 Popular: 837147719 | BHD: 34478720012 | Qik: 1002173707"; 
            break;
        case "Uruguay": 
            info = "🇺🇾 Consultar datos locales al WhatsApp."; 
            break;
        case "Venezuela": 
            info = "🇻🇪 Venezuela (0102) | 31.376.662 | 0412-8240604 | Pago Móvil"; 
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
 * Función para productos con DESCUENTO.
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
 * Función estándar para compras.
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

function abrirInterfazPedido(vid) {
    const modal = document.getElementById('miModal');
    if (modal) modal.style.display = 'flex';
}

function enviarWhatsApp() {
    if (!pedido.pais || pedido.pais === "") { 
        alert("⚠️ Por favor, selecciona primero tu país."); 
        return; 
    }
    const tel = "584243132113";
    const infoMetodo = pedido.metodo && pedido.metodo !== "General / Otro" ? `%0A💳 *Método de Pago:* ${pedido.metodo}` : "";
    const msg = `Hola STYLEHACKS! 🚀 Ya realicé mi pago.%0A%0A📦 *Producto:* ${pedido.prod}%0A⏳ *Tiempo:* ${pedido.t}${infoMetodo}%0A🌎 *País:* ${pedido.pais}%0A%0AAdjunto el comprobante de transferencia.`;
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}

function irAlCanal() {
    window.open(LINK_GRUPO, '_blank');
}

function cerrarModal() {
    const modal = document.getElementById('miModal');
    if (modal) modal.style.display = 'none';
}

function cerrarVid() { 
    const r = document.getElementById('reproductor'); 
    const v = document.getElementById('vid');
    if (v) { v.pause(); v.src = ""; }
    if (r) r.style.display = 'none'; 
}

window.onclick = (e) => {
    const m = document.getElementById('miModal');
    if (e.target == m) cerrarModal();
};
