import React from 'react';

interface CloseTypes {
  className?: string;
  onClick?: () => void;
}

function Close({ onClick, className = '' }: CloseTypes) {
  return (
    <button
      type="button"
      className={`w-fit hover:opacity-75 transition ease-in-out duration-250 transform hover:rotate-90 ${className}`}
      onClick={onClick}>
      <svg className="w-5 h-5" role="button" viewBox="0 0 20 20">
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

export default Close;
