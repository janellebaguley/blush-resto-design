const nodemailer = require ('nodemailer'),
        {EMAIL, PASSWORD} = process.env

module.exports = {
    email: async(req, res) => {
        try {
            let transporter = nodemailer.createTransport({
                host: 'smtp.mail.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            })
            let info = await transporter.sendMail({
                from: 'Christina Johnson <${EMAIL}>',
                to: 'receiver email',
                subject: 'NodeMailer Test',
                text: 'This is a NodeMailer Test',
                html: `<div>This is NodeMailer Test</div>
                <img src="cid:unique@nodemailer.com"/>`,
            attachments: [{
                filename: 'lincense.txt',
                path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            },
            {
                cid: 'unique@nodemailer.com',
                path: 'https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg'
            }
        ]
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info)
                }
            })
        }catch (err) {
            res.status(500).send(err)
        }
    }
}