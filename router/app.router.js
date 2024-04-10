module.exports = (app) => {
    const user = require("../controler/app.controler")
    const saved = require("../model/app.model")
    app.post("/create",async(req,res)=>{
        try{
            const dev= new saved(req.body);
            const mob=await dev.save();
            res.send(mob);
        }
        catch(err){
            console.log("this is an err0",err);
        }
    })

    app.get('/get-all',user.findAll);
    app.get("/user/:email", user.findOne);
}