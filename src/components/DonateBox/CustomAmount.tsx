import React, { useEffect, useState } from 'react';

interface AmtProps {
  active: boolean;
  color: string;
  setActiveVal: (val: number) => void;
}

function CustomAmount({ active, color, setActiveVal }: AmtProps) {
  const activeColor = `text-white ${color}`;
  const ifActive = active ? activeColor : 'bg-white';
  const [custAmt, setCustAmt] = useState<number>();

  useEffect(() => {
    if (typeof custAmt !== 'undefined') {
      setActiveVal(Number(custAmt));
    } else {
      setActiveVal(0);
    }
  }, [custAmt]);

  const onChangeCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const custAmount = e.target.value.replace(/\D/g, '');
    if (Number(custAmount) < 5000000) {
      setCustAmt(Number(custAmount));
    } else {
      setCustAmt(5000000);
    }
  };

  return (
    <div
      className={`flex flex-row group max-w-4 rounded-bene-c-2 p-4 items-center font-semibold text-xl hover:text-3xl hover:text-white hover:${color} transform group ${ifActive}`}>
      <span className={active ? color : ''}>$</span>
      <input
        className={`max-w-full text-center z-4 min-w-full pr-2 font-semibold focus:outline-none group-hover:${color} group-focus:${color} ${ifActive}`}
        type="text"
        placeholder="Other"
        value={custAmt}
        onChange={onChangeCustom}
      />
    </div>
  );
}

export default CustomAmount;
