const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Sujet: ${body.subject}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'matthieubrenne2103@gmail.com',
    from: 'matthieubrenne2103@gmail.com',
    subject: `Nouveau message de ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });
};
