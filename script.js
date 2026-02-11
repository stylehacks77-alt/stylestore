// Sistema de Pedidos STYLEHACKS VIP
let pedido = { prod: "", t: "", pais: "" };

/**
 * Sincroniza selectores y muestra datos bancarios de los 17 países.
 * He dejado los datos de las imágenes listos para que los confirmes.
 */
function sincronizar(v) {
    pedido.pais = v;
    
    const mainSel = document.getElementById('main-country');
    const modalSel = document.getElementById('modal-country');
    if (mainSel) mainSel.value = v;
    if (modalSel) modalSel.value = v;
    
    let info = "";
    
    switch(v) {
        // DATOS FIJOS (VENEZUELA Y COLOMBIA)
        case "Venezuela": 
            info = "BDV: 0102-0412-82-40604 | CI: 31.376.662 | Pago Móvil"; 
            break;
        case "Colombia": 
            info = "NEQUI: 3233438983"; 
            break;
        case "Global": 
            info = "Zelle: +1 (754) 317-1482 | Zinli: jesusth234@gmail.com"; 
            break;

        // DATOS DE LAS IMÁGENES (14 PAÍSES)
        // Nota: Si algún dato varía de tu imagen, cámbialo dentro de las comillas.
        case "Argentina": info = "CVU Uala: 0000007900203350273548"; break;
        case "Bolivia": info = "BNB: 2501332938 | Tigo Money: Consultar WhatsApp"; break;
        case "Brasil": info = "Pix: Consultar llave al WhatsApp."; break;
        case "Chile": info = "Banco Estado: CuentaRUT 23710151 (X. Fuenzalida)"; break;
        case "Ecuador": info = "Banco Pichincha: 2206141381 (Ahorros)"; break;
        case "Guatemala": info = "Consultar datos de depósito al WhatsApp."; break;
        case "Honduras": info = "Consultar datos de depósito al WhatsApp."; break;
        case "Mexico": info = "Albo: 721180100042683432"; break;
        case "Nicaragua": info = "Consultar datos locales al WhatsApp."; break;
        case "Panama": info = "Consultar datos de transferencia al WhatsApp."; break;
        case "Paraguay": info = "Consultar datos locales al WhatsApp."; break;
        case "Peru": info = "Yape o Plin: 954302258"; break;
        case "Republica Dominicana": info = "Consultar datos de depósito al WhatsApp."; break;
        case "Uruguay": info = "Consultar datos locales al WhatsApp."; break;
        
        default: 
            info = "Selecciona un país para ver los datos bancarios.";
    }
    
    const mainData = document.getElementById('main-data');
    const modalData = document.getElementById('modal-data');
    if (mainData) mainData.innerText = info;
    if (modalData) modalData.innerText = info;
}

/**
 * Abre el modal y captura el producto y precio seleccionado.
 */
function solicitar(prod, id, vid) {
    const selectorPrecio = document.getElementById(id);
    const tiempo = selectorPrecio ? selectorPrecio.value : "No especificado";
    
    pedido.prod = prod;
    pedido.t = tiempo;
    
    const infoPedido = document.getElementById('infoPedido');
    if (infoPedido) {
        infoPedido.innerHTML = `📦 <b>PRODUCTO:</b> ${prod}<br>⏳ <b>TIEMPO:</b> ${tiempo}`;
    }
    
    const btnVideo = document.getElementById('btnVideo');
    if (btnVideo) {
        btnVideo.onclick = () => {
            const r = document.getElementById('reproductor');
            const vTag = document.getElementById('vid');
            if (r && vTag) {
                vTag.src = vid;
                r.style.display = 'flex';
                vTag.play();
            }
        };
    }
    
    document.getElementById('miModal').style.display = 'flex';
}

/**
 * Envía el mensaje de compra al WhatsApp oficial.
 */
function enviarWhatsApp() {
    if (!pedido.pais) {
        alert("Por favor, selecciona primero tu país.");
        return;
    }
    const tel = "584242313212";
    const msg = `Hola STYLEHACKS! 🚀 Ya realicé mi pago.%0A%0A📦 *Producto:* ${pedido.prod}%0A⏳ *Tiempo:* ${pedido.t}%0A🌎 *País:* ${pedido.pais}%0A%0AAdjunto el comprobante para activación.`;
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}

/**
 * Utilidades de navegación y cierre.
 */
function irAlGrupo() {
    window.open('https://chat.whatsapp.com/E5NwCYOZs5eIrHR0JSeBVH', '_blank');
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

function cerrarVid() { 
    const r = document.getElementById('reproductor'); 
    const v = document.getElementById('vid');
    if (r && v) {
        v.pause();
        v.src = "";
        r.style.display = 'none'; 
    }
}

window.onclick = function(event) {
    const m = document.getElementById('miModal');
    if (event.target == m) { cerrarModal(); }
}
