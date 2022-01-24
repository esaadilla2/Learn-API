// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// setting agar bisa membaca data request dg format json
app.use(express.json())

// first endpoint: decimal to hexadecimal
app.post("/dectoano", (request, response) => {
    let angka = request.body.angka

    let hasilhex = angka.toString(16);
    let hasilbin = angka.toString(2);
    let hasiloc = angka.toString(8);

    return response.json({
        decimal: angka,
        result: {
            hexadecimal: hasilhex,
            binary: hasilbin,
            octal: hasiloc
        }
    })
})

// second endpoint: binary
app.get("/bintoano/:angka", (request, response) => {
    let angka = request.params.angka

    let hasilhex = parseInt(angka, 2).toString(16);
    let hasildec = parseInt(angka, 2);
    let hasiloc = parseInt(angka, 2).toString(8);

    return response.json({
        binary: angka,
        result: {
            hexadecimal: hasilhex,
            decimal: hasildec,
            octal: hasiloc
        }
    })
})

// third endpoint: octal
app.get("/octoano/:angka", (request, response) => {
    let angka = request.params.angka

    let hasildec = parseInt(angka, 8);
    let hasilbin = hasildec.toString(2);
    let hasilhex = hasildec.toString(16);

    return response.json({
        binary: angka,
        result: {
            hexadecimal: hasilhex,
            decimal: hasildec,
            binary: hasilbin
        }
    })
})

// fourth endpoint: hexadecimal
app.get("/hextoano/:angka", (request, response) => {
    let angka = request.params.angka

    let hasildec = parseInt(angka, 16);
    let hasilbin = hasildec.toString(2);
    let hasiloc = hasildec.toString(8);

    return response.json({
        hexadecimal: angka,
        result: {
            binary: hasilbin,
            decimal: hasildec,
            octal: hasiloc
        }
    })
})
app.listen(7000, () => {
    console.log(`Server run on port 7000`);
})