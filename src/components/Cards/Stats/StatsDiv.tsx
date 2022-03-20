import React from 'react';
import angelsLg from '../../../assets/angels-lg.svg';
import dollarLg from '../../../assets/dollar-lg.svg';

interface StatsProps {
  value: string;
  text: string;
  bgtype: string;
}
function StatsDiv({ value, text, bgtype }: StatsProps) {
  return (
    <div
      className={`flex flex-col justify-between ${bgtype} p-6 bg-no-repeat bg-center bg-contain`}>
      <div className="justify-center font-semibold text-bene-dark-blue text-xl text-center ml-n100 mr-n100">
        {value}
      </div>
      <div className="justify-center text-bene-dark-blue-75 leading-3 text-center">
        {text}
      </div>
    </div>
  );
}

export default StatsDiv;
