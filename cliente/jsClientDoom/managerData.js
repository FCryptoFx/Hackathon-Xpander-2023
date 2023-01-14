function modDOM(json) {

    console.log(json);
    const certificacion = document.getElementById("certificacion").innerHTML = json.id;

    json = json.data;

    const pesoCamaraCria = document.getElementById("pesoCamaraCria").innerHTML = json.peso_camara;
    const pesoCamaraAlmacenaje = document.getElementById("pesoCamaraAlmacenaje").innerHTML = json.peso_camara;
    const aperturaTapa = document.getElementById("aperturaTapa").innerHTML = "no";
    const geolocalizacion = document.getElementById("geolocalizacion").innerHTML = json.Geolocalizacion;
    const statusBateria = document.getElementById("statusBateria").innerHTML = json.bateria;
    const nivelFloraExterior = document.getElementById("nivelFloraExterior").innerHTML = json.nivel_flora_exterior;
    const lluviaExterior = document.getElementById("lluviaExterior").innerHTML = json.lluvia;
    const temperaturaExterior = document.getElementById("temperaturaExterior").innerHTML = json.temperatura_exterior;
    const humedadExterior = document.getElementById("humedadExterior").innerHTML = json.humedad_exterior;
    const temperaturaInterior = document.getElementById("temperaturaInterior").innerHTML = json.temperatura_interior;
    const humedadInterior = document.getElementById("humedadInterior").innerHTML = json.humedad_interior;
    const temperaturaMiel = document.getElementById("temperaturaMiel").innerHTML = json.temperatura_miel;
    const kilosMiel = document.getElementById("kilosMiel").innerHTML = json.kilos_miel;
    // const pesoMielExtraida = document.getElementById("pesoMielExtraida").innerHTML = "test";
    // const pesoMielDecantada = document.getElementById("pesoMielDecantada").innerHTML = "test";
    // const filtroMiel = document.getElementById("filtroMiel").innerHTML = "test";
    // const kilosMielEnvasado = document.getElementById("kilosMielEnvasado").innerHTML = "test";
    // const geolocalizacionEnvasado = document.getElementById("geolocalizacionEnvasado").innerHTML = "test";
    // const pesoMaterialOperculadoRetirado = document.getElementById("pesoMaterialOperculadoRetirado").innerHTML = "test";
    // const temperaturaCuchillo = document.getElementById("temperaturaCuchillo").innerHTML = "test";
    // const hmf = document.getElementById("hmf").innerHTML = "test";
    // const kilosCera = document.getElementById("kilosCera").innerHTML = "test";
}

async function getData() {

    let data = await fetch("/hola", {
        method: "GET",
    })

    let moreData = await data.json();
    return moreData;
}

document.getElementById("button").addEventListener("click", async function () {
    const input = document.getElementById("input").value;

    if (input.length !== 0) {
        let json = await getData();
        filtro(json.assets, input);
    }
});

function filtro(json, id) {

    for (let i = json.length - 1; i >= 0; i--) {

        if (json[i].data.idKit == id) {
            modDOM(json[i]);
            return null
        }
    }
    alert('No se ha encontrado ninguna coincidencia')
}


