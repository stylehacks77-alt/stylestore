// =============================================
// 1. SISTEMA DE PAGOS ACTUALIZADO (TODOS LOS PAÍSES)
// =============================================
function actualizarMetodo() {
    const country = document.getElementById('country-select').value;
    const methodText = document.getElementById('method-text');
    
    let texto = "";

    switch(country) {
        case "ven": 
            // TUS DATOS NUEVOS MANTENIDOS
            texto = "🇻🇪 VENEZUELA: Pago Móvil BDV (0102) - Telf: 04128240604 - CI: 31.376.662"; 
            break;
        case "col": 
            // TU NEQUI NUEVO MANTENIDO + BANCOLOMBIA DE IMAGEN
            texto = "🇨🇴 COLOMBIA: Nequi (3233438983) | Bancolombia: 76900007797 (Ahorros)"; 
            break;
        case "arg": 
            texto = "🇦🇷 ARGENTINA: Uala CVU: 0000007900203350273548 | Alias: C.CORREA1315.UALA"; 
            break;
        case "bol": 
            texto = "🇧🇴 BOLIVIA: Yape N°: 62656932 | También disponible QR"; 
            break;
        case "bra": 
            texto = "🇧🇷 BRASIL: PIX Chave: 91991076791"; 
            break;
        case "chi": 
            // DATOS DE LA IMAGEN DE CHILE
            texto = "🇨🇱 CHILE: Banco Estado (Caja Vecina/Transf) - Xavier Fuenzalida - RUT: 23.710.151-0 - CuentaRUT: 23710151"; 
            break;
        case "ecu": 
            texto = "🇪🇨 ECUADOR: Banco Pichincha N°: 2207195565 (Ahorros)"; 
            break;
        case "esp": 
            texto = "🇪🇸 ESPAÑA: Bizum: 637 07 09 26 (Xiomari Moreno)"; 
            break;
        case "mex": 
            texto = "🇲🇽 MÉXICO: Albo: 721180100042683432 | OXXO (Nu): 5101 2506 8691 9389"; 
            break;
        case "usa": 
            texto = "🇺🇸 USA/GLOBAL: Zelle: +1 (754) 317-1482 | Zinli: jesusth234@gmail.com"; 
            break;
        case "per": 
            texto = "🇵🇪 PERÚ: Yape o Plin N°: 954302258"; 
            break;
        case "par": 
            texto = "🇵🇾 PARAGUAY: Banco Itau: 300406285 (Diego Leiva Roa) | Billetera Personal: 0993363424"; 
            break;
        case "pan": 
            texto = "🇵🇦 PANAMÁ: Punto Pago Wally: +584128975265 | Zinli: chauran2001@gmail.com"; 
            break;
        case "gua": 
            texto = "🇬🇹 GUATEMALA: Banrural N°: 4431164091"; 
            break;
        case "hon": 
            texto = "🇭🇳 HONDURAS: Bampais N°: 216400100524 (Ahorros)"; 
            break;
        case "dom": 
            texto = "🇩🇴 R. DOMINICANA: Popular: 837147719 | BHD León: 34478720012 | Qik: 1002173707"; 
            break;
        default: 
            texto = "Selecciona un país para ver los datos bancarios detallados.";
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
            <p style="margin: 5px 0; color: #00f2ff;"><strong>ESTADO:</strong> Esperando confirmación de pago...</p>
        </div>
    `;

    document.getElementById('miModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

function irAlGrupo() {
    window.open('https://chat.whatsapp.com/E5NwCYOZs5eIrHR0JSeBVH?mode=gi_t', '_blank');
    cerrarModal();
}

window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target == modal) cerrarModal();
}
