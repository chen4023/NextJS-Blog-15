import { Form } from "./../../components/ContactForm";

// 서버로 요청을 보내는 로직 (client에서 실행 됨)
export async function sendContactEmail(email: Form) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "서버에서 오류 빌생!");
  }
  return data;
}
