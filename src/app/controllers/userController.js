import bcrypt from 'bcryptjs';
import jwt    from 'jsonwebtoken';
import User   from '../models/user.js';
import 'dotenv/config';

export default (() => {
    
    const clearUser = user   => user.map(e => {return {name:e.name,email:e.email}});
    
    const generateToken = params => jwt.sign({params}, process.env.TOKEN_AUTH,{expiresIn: 86480,});
    const authController  = {};   
    
    authController.register = async(req, res) => {
        try{
            const user = await User.create(req.body);
            return res.send({user: clearUser([user]), token:generateToken({id: user.id})});
        }catch(err){
            return res.status(400).send({error:err.message});
        }
    }
    
    authController.authenticate = async (req, res) => {
        try{
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user) return res.status(404).send({error:'User not Found'})
             
            if(!bcrypt.compareSync(password, user.password)) return res.status(404).send({error:'Password invalid'})
            return res.send({user: clearUser([user]), token: generateToken({ id: user.id })});    
        }catch(err){
            return res.status(404).send({error: err.message})
        }
    }

    return authController;

})()