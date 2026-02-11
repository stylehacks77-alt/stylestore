let pedido = { prod: "", t: "", pais: "" };

function sincronizar(v) {
    pedido.pais = v;
    document.getElementById('main-country').value = v;
    document.getElementById('modal-country').value = v;
    
    let info = "";
    switch(v) {
        case "Argentina": info = "CVU Uala: 0000007900203350273548"; break;
        case "Bolivia": info = "BNB: 2501332938 | Tigo Money: Consultar al WhatsApp"; break;
        case "Brasil": info = "Pix: Consultar llave al WhatsApp."; break;
        case "Chile": info = "Banco Estado: XAVIER FUENZALIDA - CuentaRUT: 23710151"; break;
        case "Colombia": info = "Nequi: 3233438983"; break; // ELIMINADO BANCOLOMBIA
        case "Costa Rica": info = "Sinpe Móvil: Consultar al WhatsApp."; break;
        case "Ecuador": info = "Banco Pichincha: 2206141381 (Ahorros)"; break;
        case "El Salvador": info = "Banco Agrícola: Consultar al WhatsApp."; break;
        case "España": info = "Bizum / Transferencia: Consultar al WhatsApp."; break;
        case "Guatemala": info = "Banco Industrial: Consultar al WhatsApp."; break;
        case "Honduras": info = "Banco Atlántida: Consultar al WhatsApp."; break;
        case "Mexico": info = "Albo: 721180100042683432"; break;
        case "Nicaragua": info = "Consultar datos de pago al WhatsApp."; break;
        case "Panama": info = "Banco General (Yappy): Consultar WhatsApp."; break;
        case "Peru": info = "Yape o Plin N°: 954302258"; break;
        case "Global": info = "Zelle: +1 (754) 317-1482 | Zinli: jesusth234@gmail.com"; break;
        case "Venezuela": info = "Pago Móvil: 0102 (BDV) - 31.376.662 - 04128240604"; break; // DATOS ACTUALIZADOS
        default: info = "Selecciona un país para ver los datos bancarios.";
    }
    document.getElementById('main-data').innerText = info;
    document.getElementById('modal-data').innerText = info;
}

function solicitar(prod, id, vid) {
    const selectorPrecio = document.getElementById(id);
    const tiempo = selectorPrecio ? selectorPrecio.value : "No especificado";
    pedido.prod = prod;
    pedido.t = tiempo;
    
    document.getElementById('infoPedido').innerHTML = `📦 <b>PRODUCTO:</b> ${prod}<br>⏳ <b>TIEMPO:</b> ${tiempo}`;
    
    document.getElementById('btnVideo').onclick = () => {
        const r = document.getElementById('reproductor');
        const v = document.getElementById('vid');
        v.src = vid; r.style.display = 'flex'; v.play();
    };
    
    document.getElementById('miModal').style.display = 'flex';
}

function enviarWhatsApp() {
    if(!pedido.pais) { alert("Por favor, selecciona primero tu país."); return; }
    const tel = "584242313212";
    const msg = `Hola STYLEHACKS! 🚀 Ya realicé mi pago.%0A%0A📦 *Producto:* ${pedido.prod}%0A⏳ *Tiempo:* ${pedido.t}%0A🌎 *País:* ${pedido.pais}%0A%0AAdjunto el comprobante para activar mi acceso VIP.`;
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}

function irAlGrupo() { window.open('https://chat.whatsapp.com/E5NwCYOZs5eIrHR0JSeBVH', '_blank'); }
function cerrarModal() { document.getElementById('miModal').style.display = 'none'; }
function cerrarVid() { 
    const r = document.getElementById('reproductor'); 
    const v = document.getElementById('vid');
    v.pause(); v.src = ""; r.style.display = 'none'; 
}

window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target == modal) { cerrarModal(); }
}
