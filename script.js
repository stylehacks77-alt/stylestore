// Variable global para almacenar los datos del pedido actual
let pedido = { prod: "", t: "", pais: "" };

/**
 * Sincroniza la selección de país y muestra los datos bancarios correspondientes.
 * Actualiza tanto el selector de la página principal como el del modal.
 */
function sincronizar(v) {
    pedido.pais = v;
    const mS = document.getElementById('main-country');
    const modS = document.getElementById('modal-country');
    
    // Sincronizar los selectores visualmente
    if (mS) mS.value = v;
    if (modS) modS.value = v;
    
    let info = "";
    switch(v) {
        case "Argentina": 
            info = "🇦🇷 Uala: CVU 0000007900203350273548 | Alias: C.CORREA1315.UALA"; 
            break;
        case "Bolivia": 
            info = "🇧🇴 Yape: N° Cuenta 52656932 | Yape QR: Código disponible en imagen"; 
            break;
        case "Brasil": 
            info = "🇧🇷 PIX: Chave 91991076791"; 
            break;
        case "Chile": 
            info = "🇨🇱 Banco Estado (CuentaRUT): 23710151 | Titular: XAVIER FUENZALIDA | RUT: 23.710.151-0 | (Depósito o Transferencia)"; 
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
            info = "🇺🇸 Zelle: +1 (754) 317-1482 (Tickets DAVID)"; 
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
            info = "🇻🇪 Banesco (0102) | 31.376.662 | 0412-8240604 | Pago Móvil"; 
            break;
        default: 
            info = "Selecciona un país para ver los datos bancarios.";
    }

    // Mostrar la información en los contenedores correspondientes
    const mainD = document.getElementById('main-data');
    const modalD = document.getElementById('modal-data');
    if (mainD) mainD.innerText = info;
    if (modalD) modalD.innerText = info;
}

/**
 * Configura el modal con la información del producto seleccionado y lo muestra.
 */
function solicitar(prod, id, vid) {
    const selectorPrecio = document.getElementById(id);
    pedido.prod = prod;
    pedido.t = selectorPrecio ? selectorPrecio.value : "";
    
    const infoP = document.getElementById('infoPedido');
    if (infoP) {
        infoP.innerHTML = `📦 <b>PRODUCTO:</b> ${pedido.prod}<br>⏳ <b>TIEMPO:</b> ${pedido.t}`;
    }
    
    // Configurar el botón de video dentro del modal
    const btnV = document.getElementById('btnVideo');
    if (btnV) {
        btnV.onclick = () => {
            const r = document.getElementById('reproductor');
            const vT = document.getElementById('vid');
            if (r && vT) { 
                vT.src = vid; 
                r.style.display = 'flex'; 
                vT.play(); 
            }
        };
    }
    
    // Mostrar el modal
    const modal = document.getElementById('miModal');
    if (modal) modal.style.display = 'flex';
}

/**
 * Redirige al WhatsApp del administrador con el mensaje del pedido.
 */
function enviarWhatsApp() {
    if (!pedido.pais || pedido.pais === "") { 
        alert("Por favor, selecciona primero tu país."); 
        return; 
    }
    const tel = "584243132113";
    const msg = `Hola STYLEHACKS! 🚀 Ya realicé mi pago.%0A%0A📦 *Producto:* ${pedido.prod}%0A⏳ *Tiempo:* ${pedido.t}%0A🌎 *País:* ${pedido.pais}%0A%0AAdjunto el comprobante.`;
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}

/**
 * Abre el Canal de Referencias oficial.
 */
function irAlCanal() {
    window.open('https://whatsapp.com/channel/0029VbBnYK9CHDydoBe7st2U', '_blank');
}

/**
 * Cierra el modal de compra.
 */
function cerrarModal() {
    const modal = document.getElementById('miModal');
    if (modal) modal.style.display = 'none';
}

/**
 * Cierra el reproductor de video y detiene la reproducción.
 */
function cerrarVid() { 
    const r = document.getElementById('reproductor'); 
    const v = document.getElementById('vid');
    if (v) { 
        v.pause(); 
        v.src = ""; 
    }
    if (r) r.style.display = 'none'; 
}

/**
 * Permite cerrar el modal haciendo clic fuera del contenido principal.
 */
window.onclick = (e) => {
    const m = document.getElementById('miModal');
    if (e.target == m) cerrarModal();
};
