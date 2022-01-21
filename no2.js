// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// setting agar bisa membaca data request dg format json
app.use(express.json())

// first endpoint: celcius
app.get("/convert/celcius/:suhu", (request, response) => {
    let suhu = request.params.suhu

    let r = 4 * suhu / 5
    let f = (9 * suhu / 5) + 32
    let k = parseInt(suhu) + 273

    return response.json({
        celcius: suhu,
        result: {
            reamur: r,
            fahrenheit: f,
            kelvin: k
        }
    })
})

// second enpoint: reamur
app.get("/convert/reamur/:suhu", (request, response) => {
    let suhu = request.params.suhu

    let c = 5 * suhu / 4
    let f = (9 * suhu / 4) + 32
    let k = (5 * suhu / 4) + 273

    return response.json({
        reamur: suhu,
        result: {
            celcius: c,
            fahrenheit: f,
            kelvin: k
        }
    })
})

// third endpoint: fahrenheit
app.get("/convert/fahrenheit/:suhu", (request, response) => {
    let suhu = request.params.suhu

    let c = 5 * (suhu - 32) / 9 
    let r = 4 * (suhu - 32) / 9
    let k = 5 * (suhu - 32) / 9 + 273

    return response.json({
        fahrenheit: suhu,
        result: {
            celcius: c,
            reamur: r,
            kelvin: k
        }
    })
})

// fourth endpoint: kelvin
app.get("/convert/kelvin/:suhu", (request, response) => {
    let suhu = request.params.suhu

    let c = suhu - 273
    let r = 4 * (suhu - 273) / 5
    let f = 9 * (suhu - 273) / 5 + 32

    return response.json({
        kelvin: suhu,
        result: {
            celcius: c,
            fahrenheit: f,
            reamur: r
        }
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})