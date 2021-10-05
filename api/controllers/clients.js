const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Client = require("../models/clientschema");

module.exports = {
  signup: (req, res) => {
    const { email, password } = req.body;

    /** Check if email exists. */
    Client.find({ email }).then((clients) => {
      if (clients.length >= 1) {
        return res.status(409).json({
          message: "Client exists",
        });
      }
      /** Encrypt the client password. */
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          return res.status(500).json({
            error,
          });
        }
        const client = new Client({
          _id: new mongoose.Types.ObjectId(),
          email,
          password: hash,
        });

        client
          .save()
          .then((result) => {
            console.log(result);

            res.status(200).json({
              message: "Client created",
            });
          })
          .catch((error) => {
            res.status(500).json({
              error,
            });
          });
      });
    });
  },
  login: (req, res) => {
    const { email, password } = req.body;

    /** Check if email exists. */
    Client.find({ email }).then((clients) => {
      if (clients.length === 0) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }

      const [client] = clients;

      /** Auth the password. */
      bcrypt.compare(password, client.password, (error, result) => {
        if (error) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }

        if (result) {
          const token = jwt.sign(
            {
              id: client._id,
              email: client.email,
            },
            "env.jwt_key",
            { 
              expiresIn: "1H" 
            }
          );

          return res.status(200).json({
            message: "Auth successful",
            token,
          });
        }

        res.status(401).json({
          message: "Auth failed",
        });
      });
    });
  },
  getAllClient: (req, res) => {
    Client.find().then((client)=>{
        res.status(200).json({
          client
        })
      }).catch( error => {
        console.log('error: ', error);
        res.status(500).json({
          error
        })
      });
  },

};
