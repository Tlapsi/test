const{Router} = require('express');
const router = Router();

const modelDatos = require('../models/contacto');

router.get('/', async (require,res)=>{
    const datos = await modelDatos.find();
    res.json(datos);
    //res.send("consulta realizada");
});

router.post('/', async (require,res)=>{
    const {nombre, email, telefono, puesto, empresa, mnesaje} = require.body;
    const newDato = new modelDatos({nombre, email, telefono, puesto, empresa, mnesaje});
    console.log(newDato);

    await newDato.save(); //guardar en la db async y await hacen que las cosas se hagan al mismo tiempo
    //console.log(require.body);
    res.json(newDato);
   
   // res.send("datos agregados");
});

module.exports = router;