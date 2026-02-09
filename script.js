function actualizarMetodo() {
    const country = document.getElementById('country-select').value;
    const methodText = document.getElementById('method-text');
    let texto = "";

    switch(country) {
        case "arg": texto = "🇦🇷 ARGENTINA: CBU / Mercado Pago."; break;
        case "bol": texto = "🇧🇴 BOLIVIA: QR / Banco Unión."; break;
        case "bra": texto = "🇧🇷 BRASIL: Pago por PIX."; break;
        case "chi": texto = "🇨🇱 CHILE: Banco Estado / Cuenta Rut."; break;
        case "col": texto = "🇨🇴 COLOMBIA: Nequi / Daviplata / Bancolombia."; break;
        case "cos": texto = "🇨🇷 COSTA RICA: SINPE Móvil."; break;
        case "ecu": texto = "🇪🇨 ECUADOR: Pichincha / Guayaquil."; break;
        case "esp": texto = "🇪🇸 ESPAÑA: Bizum."; break;
        case "usa": texto = "🇺🇸 USA: Zelle / PayPal / Binance."; break;
        case "mex": texto = "🇲🇽 MÉXICO: OXXO / SPEI."; break;
        case "ven": texto = "🇻🇪 VENEZUELA: Pago Móvil / Banesco."; break;
        default: texto = "Selecciona un país para ver los datos bancarios.";
    }
    methodText.innerText = texto;
}

function solicitar(producto, selectId) {
    const select = document.getElementById(selectId);
    const opcion = select.value;
    const infoPedido = document.getElementById('infoPedido');
    infoPedido.innerHTML = `
        <strong>PRODUCTO:</strong> ${producto}<br>
        <strong>TIEMPO:</strong> ${opcion}<br>
        <strong>ESTADO:</strong> Pendiente
    `;
    document.getElementById('miModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

function irAlGrupo() {
    window.open('https://chat.whatsapp.com/KLuPMgqv96S9XOcbHwindC', '_blank');
    cerrarModal();
}

window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target == modal) cerrarModal();
}
