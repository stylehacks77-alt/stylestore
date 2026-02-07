// Base de datos de pagos actualizada
const bancos = {
    "arg": "<b>🇦🇷 ARGENTINA</b><br>Uala: CVU 0000007900203350273548<br>Alias: C.CORREA1315.UALA",
    "bol": "<b>🇧🇴 BOLIVIA</b><br>Yape: N° Cuenta 52656932<br>Yape QR: Código disponible en imagen",
    "bra": "<b>🇧🇷 BRASIL</b><br>PIX: Chave 91991076791",
    "col": "<b>🇨🇴 COLOMBIA</b><br>Nequi: 3233438983",
    "ecu": "<b>🇪🇨 ECUADOR</b><br>Banco Pichincha: N° Cuenta 2207195565",
    "esp": "<b>🇪🇸 ESPAÑA</b><br>Bizum: 637 07 09 26 (Xiomari Moreno)",
    "usa": "<b>🇺🇸 ESTADOS UNIDOS</b><br>Zelle: +1 (754) 317-1482 (Tickets DAVID)",
    "gua": "<b>🇬🇹 GUATEMALA</b><br>Banrural: N° Cuenta 4431164091",
    "hon": "<b>🇭🇳 HONDURAS</b><br>Bampais: N° Cuenta 216400100524",
    "mex": "<b>🇲🇽 MÉXICO</b><br>Albo: N° Cuenta 721180100042683432<br>Nu México (OXXO): 5101 2506 8691 9389",
    "nic": "<b>🇳🇮 NICARAGUA</b><br>BAC Nicaragua: N° Cuenta 371674409<br>IBAN: NI37BAMC0000000000371674409",
    "per": "<b>🇵🇪 PERÚ</b><br>Yape / Plin: 954302258",
    "dom": "<b>🇩🇴 REP. DOMINICANA</b><br>Banco Popular: 837147719<br>BHD León: 34478720012<br>Qik: 1002173707"
};

// Función para mostrar el banco al elegir país
function actualizarMetodo() {
    const seleccion = document.getElementById('country-select').value;
    const visualizador = document.getElementById('method-text');
    const contenedor = document.getElementById('method-display');

    if (seleccion && bancos[seleccion]) {
        visualizador.innerHTML = bancos[seleccion];
        contenedor.style.display = "block";
    } else {
        visualizador.innerHTML = "Selecciona un país para ver los datos bancarios.";
        contenedor.style.display = "none";
    }
}

// Función para el botón Comprar (Modal)
function solicitar(producto, idSelect) {
    const plan = document.getElementById(idSelect).value;
    const paisSel = document.getElementById('country-select').value || "MÉTODO NO SELECCIONADO";
    
    const resumen = `
        🚀 <b>PRODUCTO:</b> ${producto}<br>
        ⏳ <b>PLAN:</b> ${plan}<br>
        🌎 <b>ORIGEN:</b> ${paisSel.toUpperCase()}
    `;

    document.getElementById('infoPedido').innerHTML = resumen;
    document.getElementById('miModal').style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

// Función para el grupo de ventas
function irAlGrupo() {
    window.open('https://chat.whatsapp.com/Di3u88DJjAg3vNQpFDmgkS', '_blank');
    cerrarModal();
}
