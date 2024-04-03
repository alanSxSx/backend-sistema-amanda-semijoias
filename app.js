const express = require('express');
const app = express();
const uploadProducts = require('./middleware/uploadImage')

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