import sequence from 'mongoose-sequence';
import mongoose from '../../db/connectDB.js';

export default (() => {
    const AutoIncrement = sequence(mongoose);
    const chargeSchema  = new mongoose.Schema({
        id_charge:{
            type: Number,
        },
        id_user:{
            type: Number,
            required: true
        },
        desc:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            required: true
        },
        worth:{
            type: Number,
            required: true
        },
    })    
    
    chargeSchema.plugin(AutoIncrement, {id:'order_charge',inc_field:'id_charge'});

    // Aqui passa o nome da tabela e os campos
    const charges = mongoose.model('charges', chargeSchema);

    return charges;

})()