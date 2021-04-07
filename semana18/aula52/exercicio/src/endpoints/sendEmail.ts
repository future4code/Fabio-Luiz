import { Request, Response } from "express";

export default async function sendEmail(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const email = req.body.email;

    if (!email) {
      res.statusCode = 409;
      throw new Error("E-mail field is not filled!");
    }

    //enviar para o email do usuário
    const mailOptions = {
      from: `Fabio dos Santos <${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "Desafio - Aula 52",
      html: `
            <h2>Desafio da aula 52</h2>
            <h4><b>ENVIO AUTOMÁRICO DE E-MAILS</b></h4>
            <p>Sunt fugiat dolore tempor nostrud voluptate do. Consectetur cupidatat non officia velit ea enim. Ut laboris laboris non incididunt do nulla laboris aliqua duis. Lorem laborum pariatur est magna in laborum et.</p>
         `,
    };

    res.send(`An e-mail was sent to ${email}`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
}
