function modDOM(){

    const pesoCamaraCria = document.getElementById("pesoCamaraCria").innerHTML = "test";
    const pesoCamaraAlmacenaje = document.getElementById("pesoCamaraAlmacenaje").innerHTML = "test";
    const aperturaTapa = document.getElementById("aperturaTapa").innerHTML = "test";
    const geolocalizacion = document.getElementById("geolocalizacion").innerHTML = "test";
    const statusBateria = document.getElementById("statusBateria").innerHTML = "test";
    const nivelFloraExterior = document.getElementById("nivelFloraExterior").innerHTML = "test";
    const lluviaExterior = document.getElementById("lluviaExterior").innerHTML = "test";
    const temperaturaExterior = document.getElementById("temperaturaExterior").innerHTML = "test";
    const humedadExterior = document.getElementById("humedadExterior").innerHTML = "test";
    const temperaturaInterior = document.getElementById("temperaturaInterior").innerHTML = "test";
    const humedadInterior = document.getElementById("humedadInterior").innerHTML = "test";
    const temperaturaMiel = document.getElementById("temperaturaMiel").innerHTML = "test";
    const kilosMiel = document.getElementById("kilosMiel").innerHTML = "test";
    // const pesoMielExtraida = document.getElementById("pesoMielExtraida").innerHTML = "test";
    // const pesoMielDecantada = document.getElementById("pesoMielDecantada").innerHTML = "test";
    // const filtroMiel = document.getElementById("filtroMiel").innerHTML = "test";
    // const kilosMielEnvasado = document.getElementById("kilosMielEnvasado").innerHTML = "test";
    // const geolocalizacionEnvasado = document.getElementById("geolocalizacionEnvasado").innerHTML = "test";
    // const pesoMaterialOperculadoRetirado = document.getElementById("pesoMaterialOperculadoRetirado").innerHTML = "test";
    // const temperaturaCuchillo = document.getElementById("temperaturaCuchillo").innerHTML = "test";
    // const hmf = document.getElementById("hmf").innerHTML = "test";
    // const kilosCera = document.getElementById("kilosCera").innerHTML = "test";
    const certificacion = document.getElementById("certificacion").innerHTML = "test";
}

document.getElementById("button").addEventListener("click", function() {
    const input = document.getElementById("input").value;

    if(input.length !== 0){
        modDOM();
    }
});
