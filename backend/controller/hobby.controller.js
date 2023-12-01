const db = require("../database/index");

const hobbyController = {

    create: async (req,res) =>{
        try{
            const hobbyName =req.body
            const sql = "insert into hobby(hobbyName) values(?)"
            const[rows, fields] = await db.query(sql,hobbyName)
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

    getAll: async (req, res) => {
        try {
          const [rows, fields] = await db.query("select * from hobby");
          res.json({
            data: rows,
          });
        } catch (error) {
          console.log(error);
          res.json({
            status: "error",
          });
        }
      },

      getById: async (req, res) => {
        try {
          const { id } = req.params;
          const [rows, fields] = await db.query(
            "select * from hobby where id = ?",
            [id]
          );
          res.json({
            data: rows,
          });
        } catch (error) {
          console.log(error);
          res.json({
            status: "error",
          });
        }
      },

      update: async (req, res) => {
        try {
          const { hobbyName } = req.body;
          const { id } = req.params;
          const sql =
            "update users set hobbyName = ?, where id = ?";
          const [rows, fields] = await db.query(sql, [
            hobbyName,
            id,
          ]);
          res.json({
            data: rows,
          });
        } catch (error) {
          console.log(error);
          res.json({
            status: "error",
          });
        }
      },

      delete: async (req, res) => {
        try {
          const { id } = req.params;
          const [rows, fields] = await db.query("delete from hobby where id = ?", [
            id,
          ]);
          res.json({
            data: rows,
          });
        } catch (error) {
          console.log(error);
          res.json({
            status: "error",
          });
        }
      },


}

module.exports = hobbyController;