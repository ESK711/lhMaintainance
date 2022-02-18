import * as nodemailer from 'nodemailer'

export async function quoteForm(firstName: string, lastName: string, email: string, phoneNumber: number) {

	const output = `
		<p style="font-size: 16px;">I would like to request a Quote.</p>
		<h3>QUOTE REQUEST<h3>
		<ul>
			<li>First Name: ${ firstName }</li>
			<li>Last Name: ${ lastName }</li>
			<li>Email Address: ${ email }</li>
			<li>Phone Number: ${ phoneNumber }</li>
		</ul>
	`;

	const transporter = nodemailer.createTransport({
		host: process.env.MAILER_HOST,
		port: 587,
		secure: false,
		auth: {
			user: process.env.MAILER_USER,
			pass: process.env.MAILER_PASS
		}
	});

	const mailOptions = {
		from: `"Serenity Security Client" <${ process.env.MAILER_USER }>`,
		to: process.env.RECIPIENT_QUOTE,
		subject: 'Serenity Security Quote Form.',
		text: 'Kindly get back as soon as you can.',
		html: output
	};

	const info = await transporter.sendMail(mailOptions);

	console.log('Message sent: %s', info.messageId);

	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}