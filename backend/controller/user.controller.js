const db = require("../database/index");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {
  create: async (req, res) => {
    try {
      const { name, email, personalContact, homeContact,password } = req.body;
      const sql = "insert into users(name,email,personalContact, homeContact,password) values(?,?,?,?,?)";
      const [rows, fields] = await db.query(sql, [name, email, personalContact, homeContact, password]);
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

  getAll: async (req, res) => {
    try {
      const [rows, fields] = await db.query("select * from users");
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
        "select * from users where id = ?",
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
      const { name, email, personalContact, homeContact } = req.body;
      const { id } = req.params;
      const sql =
        "update users set name = ?, email = ?, personalContact = ?, homeContact = ?, where id = ?";
      const [rows, fields] = await db.query(sql, [
        name,
        email,
        personalContact,
        homeContact,
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
      const [rows, fields] = await db.query("delete from users where id = ?", [
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

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const sql = "select * from admin where email = ? and password = ?"
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
}
};

module.exports = userController;
