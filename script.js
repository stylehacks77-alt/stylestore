let infoVenta = { producto: "", tiempo: "", pais: "" };

function solicitar(prod, id, video) {
    const tiempo = document.getElementById(id).value;
    infoVenta.producto = prod;
    infoVenta.tiempo = tiempo;
    document.getElementById('infoPedido').innerHTML = `<b>PRODUCTO:</b> ${prod}<br><b>TIEMPO:</b> ${tiempo}`;
    const btnVideo = document.getElementById('btnVideoModal');
    btnVideo.onclick = function() { verVideoLocal(video); };
    document.getElementById('miModal').style.display = 'flex';
}

function actualizarMetodoModal() {
    const p = document.getElementById('modal-country-select').value;
    infoVenta.pais = p;
    const d = document.getElementById('method-display-modal');
    let info = "";
    switch(p) {
        case "Argentina": info = "CVU Uala: 0000007900203350273548"; break;
        case "Bolivia": info = "BNB: 2501332938 | Tigo Money: Consultar WhatsApp"; break;
        case "Brasil": info = "Pix: Consultar llave al WhatsApp."; break;
        case "Chile": info = "Banco Estado: XAVIER FUENZALIDA - CuentaRUT: 23710151"; break;
        case "Colombia": info = "Bancolombia: 76900007797 | Nequi: 3016043120"; break;
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
        case "Venezuela": info = "Pago Móvil: BDV (0102) - 04128240604 - CI: 31.376.662"; break;
        default: info = "Selecciona un país para ver los datos.";
    }
    d.innerText = info;
}

function contactarSoportePagos() {
    if(!infoVenta.pais) { alert("Selecciona tu país primero."); return; }
    const tel = "584242313212"; 
    const msg = `Hola STYLEHACKS! 🚀 Ya realicé mi pago.%0A%0A📦 *Producto:* ${infoVenta.producto}%0A⏳ *Tiempo:* ${infoVenta.tiempo}%0A🌎 *País:* ${infoVenta.pais}%0A%0AAdjunto el comprobante.`;
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}

function irAlGrupo() { window.open('https://chat.whatsapp.com/E5NwCYOZs5eIrHR0JSeBVH', '_blank'); }

function verVideoLocal(archivo) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('meuVideo');
    video.src = archivo;
    modal.style.display = 'flex';
    video.play();
}

function cerrarVideoLocal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('meuVideo');
    video.pause(); video.src = "";
    modal.style.display = 'none';
}

function cerrarModal() { document.getElementById('miModal').style.display = 'none'; }
