// =============================================
// 1. MÉTODOS DE PAGO ACTUALIZADOS (FEBRERO 2026)
// =============================================
function actualizarMetodo() {
    const country = document.getElementById('country-select').value;
    const methodText = document.getElementById('method-text');
    
    let texto = "";

    switch(country) {
        case "ven": 
            // ACTUALIZADO: BANCO DE VENEZUELA
            texto = "🇻🇪 VENEZUELA: Pago Móvil BDV (0102) - Telf: 04128240604 - CI: 31.376.662"; 
            break;
        case "col": 
            // ACTUALIZADO: NUEVO NEQUI
            texto = "🇨🇴 COLOMBIA: Nequi (3233438983) o Daviplata."; 
            break;
        case "usa": 
            // ACTUALIZADO: ZINLI AGREGADO
            texto = "🇺🇸 GLOBAL: Zinli (jesusth234@gmail.com), Binance (USDT) o PayPal."; 
            break;
        case "arg": texto = "🇦🇷 ARGENTINA: CBU / Mercado Pago."; break;
        case "bol": texto = "🇧🇴 BOLIVIA: QR / Banco Unión."; break;
        case "bra": texto = "🇧🇷 BRASIL: Pago por PIX."; break;
        case "chi": texto = "🇨🇱 CHILE: Banco Estado / Cuenta Rut / Mach."; break;
        case "cos": texto = "🇨🇷 COSTA RICA: SINPE Móvil."; break;
        case "ecu": texto = "🇪🇨 ECUADOR: Banco Pichincha / Guayaquil."; break;
        case "esp": texto = "🇪🇸 ESPAÑA: Bizum."; break;
        case "mex": texto = "🇲🇽 MÉXICO: OXXO / SPEI."; break;
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
    
    infoPedido.innerHTML = `
        <div style="border-left: 4px solid #00f2ff; padding-left: 10px;">
            <p style="margin: 5px 0;"><strong>📦 PRODUCTO:</strong> ${producto}</p>
            <p style="margin: 5px 0;"><strong>⏳ TIEMPO:</strong> ${opcion}</p>
            <p style="margin: 5px 0; color: #00f2ff;"><strong>ESTADO:</strong> Esperando pago...</p>
        </div>
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
