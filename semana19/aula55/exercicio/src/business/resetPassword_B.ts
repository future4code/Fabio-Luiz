import connection from "../connection";
import { hashPass } from "../services/hashManager";
import transporter from "../services/mailer";
import getUserByEmail from "../data/getUserByEmail";

export default async function resetPassword_B(email: string): Promise<void> {
  try {
    if (!email) {
      throw new Error("E-mail field is not filled!");
    }

    const user = getUserByEmail(email);
    if (!user) {
      throw new Error("E-mail not found!");
    }

    //gerar nova senha
    const length: number = 8;
    const charset: string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
    let newPassword: string = "";

    for (let i = 0, n = charset.length; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    //enviar para o email do usuário
    const mailOptions = {
      from: `ADMIN <${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "Alteração de senha",
      text: "Alteramos sua senha",
      html: `
            <h2>Sua nova senha é:</h2>
            <h4><b>${newPassword}</b></h4>
            <p>CUIDADO! NÃO COMPARTILHE SUA SENHA COM NINGUÉM</p>
         `,
    };

    await transporter.sendMail(mailOptions);

    //salvar no banco
    const cypherPassword: string = await hashPass(newPassword);

    await connection("User")
      .update({ password: cypherPassword })
      .where({ email });
  } catch (error) {throw new Error(error.message);
  }
}
