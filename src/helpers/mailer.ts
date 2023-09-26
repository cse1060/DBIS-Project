import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export const sendEmail = async ({email , emailType , userId} : any)=>{
    try {
        const hashedToken = await bcryptjs.hash(userId.toString() + process.env.TOKEN_SECRET! , 10  );
        console.log(hashedToken);
        if(emailType === "VERIFY"){
            const updateUser = await prisma.user.update({
                where: {
                  id : userId,
                },
                data: {
                    verifyToken : hashedToken,
                    verifyTokenExpiry : new Date((new Date).getTime() + 60*60000)
                },
            }) 
        }else if(emailType === "RESET"){
            const updateUser = await prisma.user.update({
                where: {
                  id : userId,
                },
                data: {
                    forgotPasswordToken : hashedToken,
                    forgotPasswordTokenExpiry : new Date((new Date).getTime() + 60*60000)
                },
            }) 
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.MAIL_TRAP_USER,
              pass: process.env.MAIL_TRAP_PASS
            }
        });

        const mailOptions = {
            from : "HousingApp@gmail.com",
            to:email,
            subject : emailType === "VERIFY" ? "Verify your email" : "Reset your Password",
            html : `<p>
                Click <a href = "${process.env.DOMAIN}${emailType === "VERIFY" ? "verifyemail" : "resetPassword"}?token=${userId}=${hashedToken}">here</a> 
                to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            </p>`
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
           
    } catch (error:any) {
        console.log(error.message);
    }
}

