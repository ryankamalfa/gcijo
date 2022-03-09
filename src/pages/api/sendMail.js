const nodemailer = require("nodemailer");

export default (req, res) => {

    const { customerName, customerEmail, emailSubject, emailMessage } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gcijordan2020@gmail.com",
            pass: "Lovejordan@@1",
        },
    });

    const mailOption = {
        from: `${customerEmail}`,
        from: customerEmail,
        to: ['gcijordan2020@gmail.com'],
        subject: `GCI WEBSITE - ${emailSubject}`,
        html: `<b>From: ${customerName}</b>
<br />    
<b>Email: ${customerEmail}</b>
<br />
<br />
<b>Message: ${emailMessage}</b>`
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            console.log(err);
            res.send("error" + JSON.stringify(err));
        } else {
            console.log("mail send");
            res.send("success");
        }
    });
};