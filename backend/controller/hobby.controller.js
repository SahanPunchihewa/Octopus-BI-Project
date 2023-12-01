const db = require("../database/index");

const hobbyController = {

    create: async (req,res) =>{
        try{
            const {title, content} =req.body
            const sql = "insert into posts(title,content) values(?,?)"
            const[rows, fields] = await db.query(sql,[title,content])
            res.json({
                data:rows
            })

        } catch(error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },


}

module.exports = hobbyController;