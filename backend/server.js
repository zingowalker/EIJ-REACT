const express = require("express")
const router = express.Router()
const path = require('path');
let nodemailer = require('nodemailer');
const json = require('json')

const cors = require('cors')
const createTransport = require("nodemailer")
// import { createTransport } from "nodemailer";

const app = express();
// app.use(cors());
// app.use(json());

app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = createTransport({
    service: 'gmail',
    auth: {
        user: "nathancode24@gmail.com",
        pass: "jszfvtuthxfhttoi",
    },
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = `name: ${name} \n email: ${email}  subject: ${subject} \n message: ${message} `
    const mail = {
        from: name,
        to: "tsetangrace@gmail.com",
        subject: `New email ${subject}`,
        html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Subject: ${subject}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});