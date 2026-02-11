// Sistema de Pedidos Inteligente STYLEHACKS
let pedido = { prod: "", t: "", pais: "" };

/**
 * Sincroniza los selectores y muestra la base de datos bancaria de los 17 países.
 */
function sincronizar(v) {
    pedido.pais = v;
    
    // Sincronizar selectores (Main y Modal)
    const mainSel = document.getElementById('main-country');
    const modalSel = document.getElementById('modal-country');
    if (mainSel) mainSel.value = v;
    if (modalSel) modalSel.value = v;
    
    let info = "";
    
    // BASE DE DATOS BANCARIA ACTUALIZADA
    switch(v) {
        case "Argentina": 
            info = "Uala: CVU 0000007900203350273548 | Alias: C.CORREA1315.UALA"; break;
        case "Bolivia": 
            info = "Yape: N° Cuenta 52656932 | QR Disponible en Chat"; break;
        case "Brasil": 
            info = "PIX: Chave 91991076791"; break;
        case "Colombia": 
            info = "NEQUI: 3233438983"; break;
        case "Ecuador": 
            info = "Banco Pichincha: N° Cuenta 2207195565"; break;
        case "España": 
            info = "Bizum: 637 07 09 26 (Xiomari Moreno)"; break;
        case "USA": 
            info = "Zelle: +1 (754) 317-1482 (Tickets DAVID)"; break;
        case "Guatemala": 
            info = "Banrural: N° Cuenta 4431164091"; break;
        case "Honduras": 
            info = "Bampais: N° Cuenta 216400100524"; break;
        case "Mexico": 
            info = "Albo: 721180100042683432 | Nu (OXXO): 5101 2506 8691 9389"; break;
        case "Nicaragua": 
            info = "BAC: 371674409 | IBAN: NI37BAMC0000000000371674409"; break;
        case "Panama": 
            info = "Consultar datos de transferencia al WhatsApp."; break;
        case "Paraguay": 
            info = "Consultar datos locales al WhatsApp."; break;
        case "Peru": 
            info = "Yape / Plin: 954302258"; break;
        case "Republica Dominicana": 
            info = "Popular: 837147719 | BHD: 34478720012 | Qik: 1002173707"; break;
        case "Uruguay": 
            info = "Consultar datos locales al WhatsApp."; break;
        case "Venezuela": 
            info = "Banesco (0102) | 31.376.662 | 0412-8240604 | Pago Móvil"; break;
        default: 
            info = "Selecciona un país para ver los datos bancarios.";
    }
    
    // Mostrar información en pantalla
    const mainData = document.getElementById('main-data');
    const modalData = document.getElementById('modal-data');
    if (mainData) mainData.innerText = info;
    if (modalData) modalData.innerText = info;
}

/**
 * Abre el modal y captura los detalles del pedido.
 */
function solicitar(prod, id, vid) {
    const selectorPrecio = document.getElementById(id);
    pedido.prod = prod;
    pedido.t = selectorPrecio ? selectorPrecio.value : "No especificado";
    
    const infoPedido = document.getElementById('infoPedido');
    if (infoPedido) {
        infoPedido.innerHTML = `📦 <b>PRODUCTO:</b> ${pedido.prod}<br>⏳ <b>TIEMPO:</b> ${pedido.t}`;
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
 * Envía el mensaje de compra al número actualizado: +58 424 313 2113
 */
function enviarWhatsApp() {
    if (!pedido.pais) {
        alert("Por favor, selecciona primero tu país.");
        return;
    }
    const tel = "584243132113";
    const msg = `Hola STYLEHACKS! 🚀 Ya realicé mi pago.%0A%0A📦 *Producto:* ${pedido.prod}%0A⏳ *Tiempo:* ${pedido.t}%0A🌎 *País:* ${pedido.pais}%0A%0AAdjunto el comprobante para activación.`;
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}

function irAlGrupo() {
    window.open('https://whatsapp.com/channel/0029VbBnYK9CHDydoBe7st2U', '_blank');
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
    const modal = document.getElementById('miModal');
    if (event.target == modal) { cerrarModal(); }
            }
