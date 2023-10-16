const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

export default function handler(req, res) {
  const { fullName, email, phone, subject, message } = req.body;
  res.send(200);
  try {
    const msg = {
      to: process.env.SENDGRID_FROM,
      // Change to your recipient | change to information@mcmillanfarms.ca
      from: process.env.SENDGRID_FROM, // Change to your verified sender
      subject: `${subject} - ${fullName}`,
      text: `EMAIL: ${email}, PHONE: ${phone}, MESSAGE: ${message}`,
    };
    sgMail
      .send(msg)
      .then((data) => {
        return data[0];
      })
      .then((data) => {
        console.log("email sent");
        res.status(200).end();
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log("email not sent");
    res.status(500).end();
  }
}
