// =============================================
// 1. MÉTODOS DE PAGO POR PAÍS (17 PAÍSES)
// =============================================
function actualizarMetodo() {
    const country = document.getElementById('country-select').value;
    const methodText = document.getElementById('method-text');
    
    let texto = "";

    switch(country) {
        case "arg": texto = "🇦🇷 ARGENTINA: Transferencia CBU / Mercado Pago."; break;
        case "bol": texto = "🇧🇴 BOLIVIA: Transferencia QR / Banco Unión."; break;
        case "bra": texto = "🇧🇷 BRASIL: Pago por PIX."; break;
        case "chi": texto = "🇨🇱 CHILE: Banco Estado / Mach / Cuenta Rut."; break;
        case "col": texto = "🇨🇴 COLOMBIA: Nequi / Daviplata / Bancolombia."; break;
        case "cos": texto = "🇨🇷 COSTA RICA: SINPE Móvil."; break;
        case "ecu": texto = "🇪🇨 ECUADOR: Banco Pichincha / Guayaquil."; break;
        case "esp": texto = "🇪🇸 ESPAÑA: Bizum / Transferencia Bancaria."; break;
        case "usa": texto = "🇺🇸 ESTADOS UNIDOS: Zelle / PayPal / Binance."; break;
        case "gua": texto = "🇬🇹 GUATEMALA: Transferencia / Depósito."; break;
        case "hon": texto = "🇭🇳 HONDURAS: Transferencia Bancaria."; break;
        case "mex": texto = "🇲🇽 MÉXICO: OXXO / Transferencia SPEI."; break;
        case "nic": texto = "🇳🇮 NICARAGUA: Transferencia Bancaria."; break;
        case "per": texto = "🇵🇪 PERÚ: Yape / Plin / BCP / Interbank."; break;
        case "dom": texto = "🇩🇴 REP. DOMINICANA: Banreservas / Popular."; break;
        case "ven": texto = "🇻🇪 VENEZUELA: Pago Móvil / Banesco / BCV."; break;
        default: texto = "Selecciona un país para ver los datos bancarios.";
    }

    methodText.innerText = texto;
}

// =============================================
// 2. SISTEMA DE COMPRA (MODAL)
// =============================================
function solicitar(producto, selectId) {
    const select = document.getElementById(selectId);
    const opcion = select.value;
    const infoPedido = document.getElementById('infoPedido');
    
    // Mostramos qué producto eligió en el cuadrito negro
    infoPedido.innerHTML = `
        <p style="margin: 5px 0;"><strong>📦 PRODUCTO:</strong> ${producto}</p>
        <p style="margin: 5px 0;"><strong>⏳ TIEMPO:</strong> ${opcion}</p>
        <p style="margin: 5px 0; color: #00f2ff;"><strong>ESTADO:</strong> Esperando confirmación...</p>
    `;

    // Abrimos la ventanita (Modal)
    document.getElementById('miModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

// =============================================
// 3. ENLACE AL GRUPO DE WHATSAPP
// =============================================
function irAlGrupo() {
    // Aquí está el link de tu grupo que me pasaste
    window.open('https://chat.whatsapp.com/KLuPMgqv96S9XOcbHwindC', '_blank');
    cerrarModal();
}

// Cerrar el modal si tocan fuera de la caja
window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target == modal) {
        cerrarModal();
    }
}
