const mongoose = require('mongoose');
const contatoSchema = mongoose.Schema;

const contato = new contatoSchema({ 
    name: {
        type: String
    },  
    email: {
        type: String
    },  
    subject: {
        type: String
    },  
    content: {
        type: String
    }, 
},{
    timestamps: true,
});

mongoose.model('Contato', contato);
