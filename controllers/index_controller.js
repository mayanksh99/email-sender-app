const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports.index = async (req, res) => {
	let transporter = nodemailer.createTransport({
		service: "gmail", // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL, // generated ethereal user
			pass: process.env.PASS // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Mayank" <mynkmak@gmail.com>', // sender address
		to: "mynkmakk@gmail.com", // list of receivers
		subject: "Test mail", // Subject line
		text: "Hello world", // plain text body
		html: "<b>Hello world?</b>" // html body
	});
	if (info) {
		console.log(info);
	} else {
		console.log(err);
	}
	console.log("Message sent: %s", info.messageId);
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
