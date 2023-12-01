const db = require("../database/index");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userController = {
  create: async (req, res) => {
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    let user = {
      name: req.body.name,
      email: req.body.email,
      personalContact: req.body.personalContact,
      homeContact: req.body.homeContact,
      password: encryptedPassword,
    };
    db.query(
      "INSERT INTO users SET ?",
      user,
      function (error, results, fields) {
        if (error) {
          res.json({
            status: 400,
            failed: "error occurred",
            error: error,
          });
        } else {
          res.json({
            status: 200,
            success: "User Created",
          });
        }
      }
    );
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

  login: async (res, req) => {
    
    const {email} = req.body
    const {password} = req.body

    const sql = "select from users where email = ? and password = ?";
    const [rows, fields] = await db.query(sql, [email, password]);

    const comparison = await bcrypt.compare(password, results[0].password);

    if (comparison) {
      res.json({
        status: 200,
        message: "login successful",
      });
    } else {
      res.json({
        status: 204,
        message: "Email and Password Not Match",
      });
    }
  },
};

module.exports = userController;
