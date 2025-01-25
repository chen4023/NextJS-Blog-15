import { Form } from "./../../components/ContactForm";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail({ from, subject, message }: Form) {
  const mailData = {
    to: process.env.AUTH_USER,
    from,
    subject: `[BLOG] ${subject}`,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p> 보낸 사람 : ${from} </p>
    `,
  };
  return transporter.sendMail(mailData);
}
