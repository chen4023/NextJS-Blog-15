import React from 'react';
type Props = {
  label: string
  type?: string
  className: string
  value: string
  name: string
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({ label, type, className, value, name, id, onChange }: Props) {
  return (
    <div className='w-full'>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} onChange={onChange} className={className} value={value} required />
    </div>
  );
}

