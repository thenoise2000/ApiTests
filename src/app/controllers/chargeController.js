import charges from '../models/charges.js'
import connectApis from '../connectApis.js';

const clearCarg = (charge) =>{

    return charge.map(e => {
        return {
            id_charge:  e.id_charge,
            id_user: e.id_user,
            desc:     e.desc,
            date:       e.date,
            worth:      e.worth
        }
    });
}

export default (() => {
    const charge = {}
    
    charge.inf = async (req, res) => {
        try{
            const id_user = req.params.id
            const user = await connectApis.apiCliente(id_user);
            if(!user) return res.status(400).send({error: 'User not Found'});
            const charge = await charges.find({id_user})
            return res.send(clearCarg(charge));
        }catch(err){
            return res.status(400).send({error:err.message});
        }
    
    }
    
    charge.add = async (req, res) => {
        try {
            const id_user = req.params.id
            const {desc, date, worth} = req.body;
            const user = await connectApis.apiCliente(id_user);
            if(!user) return res.status(400).send({error:'User not Found'})
            const charge = await charges.create({id_user, desc, date, worth});
            res.send(clearCarg([charge]));
        }catch(err){
            return res.status(400).send({error:err.message});
        }
        
    }
    
    charge.editar = async (req,res) => {
        try{
            const query = await charges.findOneAndUpdate({id_charge:req.params.id} , req.body, {new: true});
            res.send(JSON.stringify(clearCarg([query])));
        }catch(err){
            return res.status(400).send({error:err.message});
        }  
    }
    
    charge.deleting = (req, res) => {
        console.log(req)
        try{
            const id_charge = req.params.id;
            if(isNaN(id_charge))  return res.status(400).send({error: 'Id Invalid'});
            charges.deleteOne({id_charge}, err => {
                if(err) return console.log(err);
            });
            res.send(true)
        }catch(err){
            return res.status(400).send({error:err.message});
        }
    }

    return charge;

})()