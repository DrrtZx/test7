const { appendFile } = require('fs');
const http = require('http');
const rp = require( 'rupiah-format')
const host = '127.0.0.1';
const port = 3001

const server = http.createServer(function(request,response){
    const nama="Darrell";
    let uang = 500;
    let jajan = 20;
    let sisa = uang-jajan;
    const sisaRp = rp.convert(sisa);

    fs.appendFile('sisa.txt',sisaRp,() =>{
        console.log('uang berhasil disimpan')
    });

    const hasil = `
    <head>
    <title> </title>
    </head>
    <body>


    <h1 style='background : gray;color:black;padding:20px;text-align: center'> HALO INI BODY SAYA</h1>
    <p> Saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, 
    sekarang tinggal ${sisaRp}</p>
    </body>`
    
    response.statusCode = 200;
    response.end(hasil)
    
})

server.listen(port, host,'' ,function()
    {
        console.log(`server nyala di ${host}:${port}`);
    }
);
