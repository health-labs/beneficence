import React, { useEffect } from 'react';

type ButtonProps = {
  linkto: string;
  text: string;
};
export default function Button(props: ButtonProps) {
  const { text, linkto } = props;
  const onBtnClick = () => {
    window.location.href = linkto;
  };

  return (
    <div className="btn-outer tracking-wider transform hover:-translate-y-0.5 transition duration-200 ease-in-out">
      <button
        className="btn p-cust-btn px-cust-xx hover:translate-y-1 bg-bene-dark-blue text-white font-semibold rounded-bene-1 animation-pulse"
        type="button"
        onClick={() => onBtnClick()}>
        {text}
      </button>
    </div>
  );
}
