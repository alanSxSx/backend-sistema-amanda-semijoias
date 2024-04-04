const express = require('express');
const cors = require('cors')
const app = express();
const uploadProducts = require('./middleware/uploadImage')

app.use(cors());

app.use((req,res,next) => {
    res.header("Acess-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, PUT, POST,DELETE")
    res.header("Access-Control-Allow-Headers","X-PINGOTHER, Content-Type, Authorization")
    app.use(cors())
    next();
})

app.post("/upload-image", uploadProducts.single("image"), async (req,res) => {

    if(req.file){

        return res.json({
            erro:false,
            mensagem:"Upload realizado com sucesso!"
        })

    }

    return res.status(400).json({
        erro:true,
        mensagem:"Erro: Upload não realizado."
    })


   

});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})