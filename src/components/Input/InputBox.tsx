import React from 'react';

interface InputBoxProps {
  title: string;
  placeholder: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

function InputBox({
  title,
  placeholder,
  type = 'text',
  onChange,
  value,
  className,
  required = false,
  disabled = false,
}: InputBoxProps) {
  return (
    <div>
      <div className="title text-sm font-bold py-1 text-bene-dark-blue">
        {title}
      </div>
      <div className="input-box">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`input-${title} h-10 px-3 py-4 ${className}`}
          required={required}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default InputBox;
