import * as nodemailer from 'nodemailer'

export async function contactForm(firstName: string, lastName: string, email: string, phoneNumber: number, message: string) {

	const output = `
		<p style="font-size: 16px;">I would like to request a Quote.</p>
		<h3>Contact details:<h3>
		<ul>
			<li>First Name: ${ firstName }</li>
			<li>Last Name: ${ lastName }</li>
			<li>Email Address: ${ email }</li>
			<li>Phone Number: ${ phoneNumber }</li>
		</ul>
		<h3>Message:</h3>
		<p style="font-size: 16px;">${ message }</p>
	`;

	const transporter = nodemailer.createTransport({
		host: process.env.MAILER_HOST,
		port: 465,
		// port: 587,
		secure: true,
		auth: {
			user: process.env.MAILER_USER,
			pass: process.env.MAILER_PASS
		}
	});

	const mailOptions = {
		from: `"Crescent client" <${ process.env.MAILER_USER }>`,
		to: process.env.RECIPIENT,
		subject: 'Crescent Contact Form.',
		text: 'Kindly get back as soon as you can.',
		html: output
	};

	const info = await transporter.sendMail(mailOptions);

	console.log('Message sent: %s', info.messageId);

	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}