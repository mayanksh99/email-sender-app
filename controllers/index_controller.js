const nodemailer = require("nodemailer");
const Nexmo = require("nexmo");
require("dotenv").config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require("twilio")(accountSid, authToken);

module.exports.sendEmail = async (req, res) => {
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
		from: '"Test" <devsdsckiet@gmail.com>', // sender address
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

module.exports.sendSMS = async (req, res) => {
	client.messages
		.create({
			body: "Hello, this is a test message.",
			from: process.env.FROM,
			to: process.env.TO
		})
		.then(message => console.log(message.sid));
};
