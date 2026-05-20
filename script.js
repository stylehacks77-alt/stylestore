// Base de datos de pagos para los 14 países
const bancos = {
    ven: "<b>🇻🇪 VENEZUELA:</b><br>Pago Móvil: 0102 (Venezuela)<br>Cédula: 31.376.662<br>Tlf: 0412-8240604",
    col: "<b>🇨🇴 COLOMBIA:</b><br>Nequi: 3016043120<br>Bancolombia: 76900007797",
    per: "<b>🇵🇪 PERÚ:</b><br>Yape / Plin: 954302258",
    par: "<b>🇵🇾 PARAGUAY:</b><br>Itaú: 300406285 (D. Leiva)<br>Billetera: 0993363424",
    nic: "<b>🇳🇮 NICARAGUA:</b><br>BAC: 371674409",
    dom: "<b>🇩🇴 REP. DOMINICANA:</b><br>Popular: 837147719<br>BHD: 34478720012",
    mex: "<b>🇲🇽 MÉXICO:</b><br>Solicitar datos actuales por Instagram o TikTok.",
    chi: "<b>🇨🇱 CHILE:</b><br>Solicitar datos actuales por Instagram o TikTok.",
    ecu: "<b>🇪🇨 ECUADOR:</b><br>Solicitar datos actuales por Instagram o TikTok.",
    pan: "<b>🇵🇦 PANAMÁ:</b><br>Solicitar datos actuales por Instagram o TikTok.",
    gua: "<b>🇬🇹 GUATEMALA:</b><br>Solicitar datos actuales por Instagram o TikTok.",
    hon: "<b>🇭🇳 HONDURAS:</b><br>Solicitar datos actuales por Instagram o TikTok.",
    sal: "<b>🇸🇻 EL SALVADOR:</b><br>Solicitar datos actuales por Instagram o TikTok.",
    bol: "<b>🇧🇴 BOLIVIA:</b><br>Solicitar datos actuales por Instagram o TikTok.",
    otr: "<b>🌐 OTROS MÉTODOS:</b><br>Wally: +584128975265<br>Zinli: chauran2001@gmail.com<br>Binance: Solicitar Pay ID"
};

// Función para actualizar el texto del banco al seleccionar país
function actualizarMetodo() {
    const seleccion = document.getElementById('country-select').value;
    const visualizador = document.getElementById('method-text');
    
    if (seleccion) {
        visualizador.innerHTML = bancos[seleccion];
    } else {
        visualizador.innerHTML = "Selecciona un país para ver los datos bancarios.";
    }
}

// Función para generar el pedido y abrir el modal
function solicitar(producto, idSelect) {
    const plan = document.getElementById(idSelect).value;
    const paisSeleccionado = document.getElementById('country-select').value || "MÉTODO NO SELECCIONADO";
    
    // Crear el resumen
    const resumen = `
        🚀 <b>PRODUCTO:</b> ${producto}<br>
        ⏳ <b>PLAN:</b> ${plan}<br>
        🌎 <b>ORIGEN:</b> ${paisSeleccionado.toUpperCase()}
    `;
    
    document.getElementById('summary-text').innerHTML = resumen;
    document.getElementById('modal-confirm').style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal-confirm').style.display = 'none';
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('modal-confirm');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
