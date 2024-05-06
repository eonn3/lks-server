const nodemailer = require("nodemailer");
require("dotenv").config();


module.exports.sendEmail = async (req, res) => {
    const { name, donationType ,email, number, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.myEmail,
            pass: process.env.myAppPassword,
        },
    });

    recipient = process.env.testRecipient; //change this to process.env.emailRecipient when deploying frfr

    try {
        //Send email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: `${recipient}`, 
            subject: `New Donation: ${donationType}`,
            text: `Contact Number: ${number}\n\nEmail: ${email}\n\nMessage: ${message}`,
        });

        res.status(200).send('Email sent sucessfully');
    }catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).send('Error sending email');
    }

};
