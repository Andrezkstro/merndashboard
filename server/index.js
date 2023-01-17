import express, { application } from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

import clienteRutas from "./rutas/clientes.js"
import generalRutas from "./rutas/general.js"
import administracionRutas from "./rutas/administracion.js"
import ventasRutas from "./rutas/ventas.js"

// Configuracion 
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));

app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

//Rutas
app.use("/cliente", clienteRutas);
app.use("/general", generalRutas);
app.use("/administracion", administracionRutas);
app.use("/ventas", ventasRutas);

//Mongoose Setup

const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, () => console.log( `Server Port: ${PORT}`))
}).catch((error) => console.log(`${error} no esta conectado`))