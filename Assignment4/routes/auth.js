const express = require("express")
const Route = express.Router();
const bcrypt = require("bcrypt");
//const { Router } = require("express");
const JWT = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");
const { users } = require("../db");

Route.get("/users", (req, res) => {
    res.send("Displaying user details")
    res.json((users));
  });

Route.post(
  "/signup",
  [
    check("email", "Please provide an valid email").isEmail(),
    check(
      "password",
      "Please provide password greater than 4 and less than 12 characters"
    ).isLength({
      
      min: 4,
      max:12
    }),
  ],
  async (req, res) => {
   
    const { email, password } = req.body;

    const err = validationResult(req); 

    if (!err.isEmpty()) {
      return res.status(400).json({
        err: err.array(),
      });
    }

    let user = users.find((user) => {
      return user.email === email;
    });
    if (user) {
      return res.status(400).json({
        err: [
          {
            msg: "This user is already existed",
          },
        ],
      });
    }

    let hashpassword = await bcrypt.hash(password, 10); 
    users.push({ email, password: hashpassword });

    const token = await JWT.sign(
      {
        email,
      },
      "a#cgSd56K",
      {
        expiresIn: 36000,
      }
    );
    res.json({ token });
    res.send("Checking page is working");
  }
);


module.exports = Route;