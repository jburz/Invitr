const nodemailer = require("nodemailer");


//set up transporter, default settings for account
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "invitr.do.not.reply@gmail.com",
        pass: "cLoUd9t3am!"
    }
});

function sendEmail(user) {
    //function to send email
    //create email template
    const mailOptions = {
        from: "invitr.do.not.reply@gmail.com",
        to: user,
        subject: "Welcome to Invitr",
        text: "Thank you for choosing invitr!  Use our website to manage the guests for your wedding!  You can add guests and update their details.  See a summary of the guests on our simple summary page or details about each guest on the details page.  -Invitr Team"
    };

    //mail and log result
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
            res.json("Error sending email");
        } else {
            console.log("Email Sent!", data);
            res.json("Email sent!");
        }
    });
}

module.exports = sendEmail;