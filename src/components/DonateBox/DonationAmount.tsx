import React from 'react';

interface AmtProps {
  amount: { label: string; value: number };
  active: boolean;
  color: string;
  setActiveVal: (val: number) => void;
}

function DonationAmount({ amount, active, color, setActiveVal }: AmtProps) {
  const activeColor = `text-white ${color}`;
  const ifActive = active ? activeColor : 'bg-white';
  const setActive = (val: number) => {
    setActiveVal(val);
  };
  return (
    <button
      className={`rounded-bene-c-2 p-4 font-semibold text-2xl hover:text-3xl hover:text-white hover:${color} transform group ${ifActive}`}
      type="button"
      onClick={() => setActive(amount.value)}
      value={amount.value}>
      <div className="transform group-hover:scale-110 hover:text-bold transition duration-450 ease-in">
        {amount.label}
      </div>
    </button>
  );
}

export default DonationAmount;
