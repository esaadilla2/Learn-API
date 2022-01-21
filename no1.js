// load library express
const { response, request } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// setting agar bisa membaca data request dg format json
app.use(express.json())

// first endpoint: kubus
app.post("/kubus", (request, response) => {
    let sisi = request.body.sisi

    let luas = 6 * (sisi * sisi)
    let volume = sisi * sisi * sisi

    return response.json({
        luas: luas,
        volume: volume
    })
})

// second endpoint: balok
app.get("/balok/:panjang/:lebar/:tinggi", (request, response) => {
    // tampung data yang dikirimkan
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi

    let luas =  2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)
    let volume = panjang * lebar * tinggi

    return response.json({
        message: `Luas permukaan balok adalah ${luas} dan volumenya adalah ${volume}`
    })
})

// third endpoint: limas segitiga (hanya untuk sama sisi)
app.get("/limas/:tl/:ts/:sa", (request, response) => {
    // tl = tinggi limas
    // ts = tinggi segitiga
    // sa = sisi alas
    // tampung data yang dikirimkan
    let tl = request.params.tl
    let ts = request.params.ts
    let sa = request.params.sa

    // la = luas alas limas
    let la = 1 * sa * ts /2 
    let luas =  la + la + la + la
    let volume = 1 * la * tl / 3

    return response.json({
        message: `Luas permukaan limas segitiga adalah ${luas} dan volumenya adalah ${volume}`
    })
})

// fourth endpoint: tabung
app.get("/tabung/:r/:t/", (request, response) => {
    // r = jari-jari
    // t = tinggi tabung
    // tampung data yang dikirimkan
    let r = request.params.r
    let t = request.params.t

    let phi = 3.14
    let luas =  2 * phi * r * (r + t)
    let volume = phi * r * r * t

    return response.json({
        message: `Luas permukaan tabung adalah ${luas} dan volumenya adalah ${volume}`
    })
})

app.listen(7000, () => {
    console.log(`Server run on port 7000`);
})