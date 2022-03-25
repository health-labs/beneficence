import React from 'react';

interface TextAreaProps {
  title: string;
  placeholder: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

function TextArea({
  title,
  placeholder,
  type = 'text',
  onChange,
  value,
  className,
  required = false,
  disabled = false,
}: TextAreaProps) {
  return (
    <div>
      <div className="donate-title text-sm font-bold py-1 text-bene-dark-blue">
        {title}
      </div>
      <div className="txt-area-box">
        <textarea
          className={`input-${title} p-2 ${className}`}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          value={value}
        />
      </div>
    </div>
  );
}

export default TextArea;
