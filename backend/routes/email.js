const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();


//generating an otp
var generatedOtp = (Math.floor(Math.random() * 10000) + 10000)
  .toString()
  .substring(1);



router.get("/", (req, res) => {
  res.send("I am inside email");
});

router.get("/otp", (req, res) => {
  res.status(200).json({"OTP": generatedOtp})
});

router.get("/otp/:num", (req, res) => {
  let otpp = req.params.num;
  if (otpp == generatedOtp) {
    generatedOtp = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    res.status(200).send("Login successful");
  } else {
    res.status(500).send("Please enter a valid otp")
  }
});

router.post("/sendotp", async (req, res) => {
  let html2 = `<h1>${generatedOtp}</h1>`
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
    //   user: "postmaster@sandboxc5666842901c4d45a76c65a29c35e809.mailgun.org",
    //   pass: "770a7828ab8a4fc872f83e718f8d5ce6-5d2b1caa-31f8f214",
    user:"thugmeems@gmail.com",
    pass:"tnlzapkwdxcthufi"
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Ultimate Code Vizard" <Ultimatecodevizard@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "Ultimate Code Vizard OTP 🤩😇", // Subject line
      text: "Hello world?", // plain text body
      html: html2, // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router