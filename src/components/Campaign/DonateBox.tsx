import React, { useEffect, useState } from 'react';
import { campColorRgb } from '../../const/campColors';
import { rgbaToHex } from '../../utils/campaign';
import DonateButton from '../Button/DonateButton';
import CustomAmount from '../DonateBox/CustomAmount';
import DonationAmount from '../DonateBox/DonationAmount';

function DonateBox({ data, ctheme }: any) {
  const {
    id,
    image,
    title,
    description,
    startDate,
    endDate,
    createdBy,
    isApproved,
    fundToCollect,
    fundCollected,
    angelsCount,
  } = data;
  const campThemeColor = rgbaToHex(campColorRgb[ctheme]);
  const formattedHex = `bg-bene-f-${ctheme}`;

  const donationVal = [
    {
      label: '$5',
      value: 5,
    },
    {
      label: '$25',
      value: 25,
    },
    {
      label: '$100',
      value: 100,
    },
    {
      label: '$500',
      value: 500,
    },
    {
      label: '$1000',
      value: 1000,
    },
  ];
  const [selectedAmt, setselectedAmt] = useState(25);

  const chkActive = (val: number) => {
    return selectedAmt === val;
  };

  const setActiveVal = (val: number) => {
    setselectedAmt(val);
  };

  const chkActiveOther = () => {
    const constAmt = !donationVal.map((v) => v.value).includes(selectedAmt);
    return constAmt;
  };

  const onClickDonate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (Number(selectedAmt) < 1) {
      alert('Err: Minimum donation amount is $1');
      setselectedAmt(0);
    }
  };

  useEffect(() => {
    setselectedAmt(25);
  }, []);

  return (
    <div
      className={`organiser grid gap-4 p-4 rounded-bene-c-2 bg-bene-cmp-${ctheme}`}>
      <div className="donate-amount grid grid-cols-3 gap-4">
        {donationVal.map((amount: any) => (
          <DonationAmount
            amount={amount}
            active={chkActive(amount.value)}
            color={formattedHex}
            setActiveVal={setActiveVal}
          />
        ))}
        <CustomAmount
          active={chkActiveOther()}
          color={formattedHex}
          setActiveVal={setActiveVal}
        />
      </div>
      <div className="donate hover:scale-105 transform duration-400 transition ease-out">
        <DonateButton
          campaignid={id}
          className="w-full"
          amount={selectedAmt}
          onClick={onClickDonate}
        />
      </div>
    </div>
  );
}

export default DonateBox;
