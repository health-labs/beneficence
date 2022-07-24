import React, { useEffect } from 'react';

type ButtonProps = {
  linkto: string;
  text: string;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const { text, linkto, className } = props;
  const onBtnClick = () => {
    window.location.href = linkto;
  };

  return (
    <div className="btn-outer tracking-wider ">
      <button
        className={`btn p-cust-btn px-cust-xx transform hover:-translate-y-0.5 transition duration-200 ease-in-out bg-bene-dark-blue text-white font-semibold rounded-bene-1 animation-pulse ${className}`}
        type="button"
        onClick={() => onBtnClick()}>
        {text}
      </button>
    </div>
  );
}
