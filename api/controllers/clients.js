const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Client = require("../models/clientschema");

module.exports = {
  signup: (req, res) => {
    const { client_name, phone, email, password, regularCustomer, credits} = req.body;

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
          client_name,
          phone,
          email,
          password: hash,
          credits,
          regularCustomer
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
   console.log('req.body: ', req.body);
    /** Check if email exists. */
    Client.find({ email }).then((clients) => {
      if (clients.length === 0) {
        console.log('email not found');
        return res.status(401).json({
          message: "Auth failed",
        });
      }
            
      /** Auth the password. */
      const [client] = clients;
      bcrypt.compare(password, client.password, (error, result) => {
        if (error) {
          console.log('password worng');
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        console.log('password: ', password);
        console.log('client.password: ', client.password);
        console.log('result: ', result);
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
  getAllClients: (req, res) => {
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
