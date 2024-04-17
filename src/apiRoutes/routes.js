import express from 'express';
import charge from '../app/controllers/chargeController.js';
import userController from '../app/controllers/userController.js';

export default (() => {

    const apis = express.Router();

    apis.get('/', (req,res) =>{
        return res.send('Api for jsonplaceholder tests')
    })
    
    apis.post('/register', userController.register);
    
    apis.post('/authenticate', userController.authenticate);    
    
    apis.get('/charge/:id', charge.inf);
    
    apis.post('/charge/:id', charge.add);
    
    apis.put('/charge/:id', charge.editar);
    
    apis.delete('/charge/:id', charge.deleting);

    return apis;
})()