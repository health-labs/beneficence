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
    <button
      className="btn p-cust-btn px-cust-xx bg-bene-dark-blue text-white font-semibold rounded-bene-1 animation-pulse"
      type="button"
      onClick={() => onBtnClick()}>
      {text}
    </button>
  );
}
