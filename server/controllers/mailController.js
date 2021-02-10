const nodemailer = require ('nodemailer')

module.exports = {
    email: async(req, res) => {
        const {firstName, lastName, email, subject, message} = req.body;
        try {
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            });
            let info = await transporter.sendMail({
                from: `${firstName} ${lastName}, ${email}`,
                to: process.env.EMAIL,
                subject: subject,
                text: message,
                html: `<div>
                        <p>New Message from ${firstName} ${lastName}</p>
                        <p>${message}<p>
                        <p>Return email: ${email}</p>
                       </div>`,
                attachments: [{
                    filename: 'blush.png',
                    path: __dirname + '/assets/blush.png',
                    cid: 'banner'
                }]
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }

        res.sendStatus(200);
    }
}

// for gmail password issues: 'Log in to your Google account Go to My Account > Sign-in & Security > App Passwords (Sign in again to confirm it's you) Scroll down to Select App (in the Password & sign-in method box) and choose Other (custom name) Give this app password a name, e.g. "nodemailer" Choose Generate Copy the long generated password and paste the password it generates  in  .env, not node.js