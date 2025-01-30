import * as yup from "yup";
import { sendEmail } from "../email";

const bodySchema = yup.object({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: "유효한 폼 형식이 아닙니다." }),
      { status: 400 }
    );
  }
  // 이메일 전송 처리 (nodemailer)
  return sendEmail(body)
    .then(
      () =>
        new Response(
          JSON.stringify({
            message: "메일이 성공적으로 전송되었습니다.",
          }),
          { status: 200 }
        )
    )
    .catch(
      () =>
        new Response(
          JSON.stringify({
            message: "메일 전송에 실패했습니다.",
          }),
          { status: 500 }
        )
    );
}
