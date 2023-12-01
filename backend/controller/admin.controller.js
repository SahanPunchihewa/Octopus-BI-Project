const db = require("../database/index");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const adminController = {
  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const sql = "insert into admin(name,email,password) values(?,?,?)";
      const [rows, fields] = await db.query(sql, [name, email, password]);
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

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const sql = `select * from admin where email = ? and password = ?`
      const [rows, fields] = await db.query(sql, [email, password]);
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
};

module.exports = adminController;
