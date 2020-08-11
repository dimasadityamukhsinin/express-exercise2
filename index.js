const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let text = "Biodata";
    let biodata = {
        nama_lengkap : "Dimas Aditya Mukhsinin",
        nama_panggilan : "Dimas",
        umur : 18,
        alamat : "Jl. Purwodadi, Perumahan Primkopad Blok C No.38 Pekanbaru",
        hobi : [
            "bermain komputer",
            "desain grafis",
            "badminton"
        ]
    }

    res.render('layout/wrapper', {
        text : text,
        biodata : biodata,
        isi : '../home/list.ejs'
    })
})

app.listen(5000, () => {
    console.log('Server is running');
})