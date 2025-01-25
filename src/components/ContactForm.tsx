'use client'
import { useState } from "react";

const INPUT_CLASS = 'w-full px-2 py-1 rounded-md border border-gray-300'

export default function ContactForm() {
  const [form, setForm] = useState({ from: '', subject: '', message: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  console.log(form)
  return (
    <div className=" bg-main shadow-md rounded-md md:w-1/2 w-4/5 px-5 py-10 font-extrabold text-lg">
      <form className="flex flex-col justify-center items-start gap-3">
        <label htmlFor='from' className="font-bold">Your Email</label>
        <input id='from' name="from" type='email' onChange={handleChange} className={INPUT_CLASS} value={form.from} />
        <label htmlFor='subject'>Subject</label>
        <input id='subject' name="subject" type='text' onChange={handleChange} className={INPUT_CLASS} value={form.subject} />
        <label htmlFor='message'>Message </label>
        <textarea id='message' name="message" onChange={handleChange} className={`${INPUT_CLASS} h-56`} value={form.message} />
      </form>
      <button type="submit" className="w-full text-gray-500 text-2xl text-center bg-yellow-200 mt-5 h-10 rounded-md">Submit</button>
    </div>
  );
}

