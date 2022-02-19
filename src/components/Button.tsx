import React from 'react';

interface ButtonProps {
  text?: string;
}
const Button = (props: ButtonProps) => {
  const { text } = props;
  return (
    <div>
      <button
        className="btn p-cust-btn bg-bene-dark-blue text-white font-semibold rounded-bene-1"
        type="button">
        {text}
      </button>
    </div>
  );
};

export default Button;
