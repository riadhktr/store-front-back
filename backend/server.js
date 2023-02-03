const express = require('express');
const connectDb = require('./config/ConnexionDb');
const ProductRouter = require('./routes/prduct');

const app = express();

const PORT = 5005;

connectDb();
app.use(express.json()) // najem nesta3mel les fichiers de format json
app.use('/api/produit',ProductRouter)



app.listen(PORT,()=>{
    console.log('server started with sucess')
})