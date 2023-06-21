import connectMongo from '../../src/app/database/conn'; 


export default function handler(req,res){
    connectMongo()
    res.status(200).json({name:"Jhon li"})
}
