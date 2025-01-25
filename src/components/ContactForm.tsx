'use client'
import Input from "@/common/Input";
import { useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/app/api/contact";
export type Form = {
  from: string
  subject: string
  message: string
}
const INPUT_CLASS = 'w-full px-2 py-1 rounded-md border border-gray-300 my-1'
const DEFAULT_FORM = { from: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_FORM)
  const [banner, setBanner] = useState<BannerData | null>(null)
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({ message: '이메일이 성공적으로 전송되었습니다.', status: 'success' })
        setForm(DEFAULT_FORM)
      })
      .catch(() => setBanner({ message: '이메일 전송에 실패했습니다.', status: 'fail' }))
      .finally(() => setTimeout(() => {
        setBanner(null)
      }, 3000))
  }
  return (
    <>
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit} className="bg-main shadow-md rounded-md md:w-1/2 w-4/5 px-5 py-10 font-extrabold text-lg">
        <Input label='보내는 이' id='from' name="from" type='email' onChange={onChange} className={INPUT_CLASS} value={form.from} />
        <Input label='제목' id='subject' name="subject" type='text' onChange={onChange} className={INPUT_CLASS} value={form.subject} />
        <label htmlFor='message'>본문</label>
        <textarea rows={10} id='message' name="message" onChange={onChange} className={INPUT_CLASS} value={form.message} required />
        <button type="submit" className="w-full text-2xl text-center bg-yellow-200 mt-5 h-10 rounded-md">전송하기</button>
      </form>
    </>
  );
}

