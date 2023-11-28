const sgMail = require("@sendgrid/mail");
const sgClient = require("@sendgrid/client");

sgClient.setApiKey(process.env.SENDGRID_KEY);
sgMail.setApiKey(process.env.SENDGRID_KEY);

export default function handler(req, res) {
  const { email } = req.body;
  res.send(200);
  try {
    const msg = {
      to: email,
      // Change to your recipient | change to information@mcmillanfarms.ca
      from: process.env.SENDGRID_FROM, // Change to your verified sender
      // subject: `${subject} - ${fullName}`,
      // text: `EMAIL: ${email}, PHONE: ${phone}, MESSAGE: ${message}`,
      email: email,
      Sender_Name: "McMillan Farms",
      Sender_Address: "3690 Berard Roard",
      Sender_City: "Kelowna",
      Sender_State: "BC",
      Sender_Zip: "V1W 4A9",
      template_id: "d-a76f3f0491d343839ccb9cc54d074b81",
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
