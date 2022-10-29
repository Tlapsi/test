const mongoose = require('mongoose');
const cadena = 'mongodb+srv://tlaps:12345@cluster0.wyyaecd.mongodb.net/turing';

mongoose.connect(cadena, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(dato =>{
    console.log('conectado');
})
.catch(error =>{
    console.log(error);
})