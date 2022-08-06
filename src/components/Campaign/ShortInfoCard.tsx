import React from 'react';
import { Link } from 'react-router-dom';
import { campColorRgb } from '../../const/campColors';
import { Campaign } from '../../types/Campaign';
import { nameIcon, rgbaToHex } from '../../utils/campaign';
import { calcDaysFromToday } from '../../utils/util';
import DonateButton from '../Button/DonateButton';
import beneTime from '../../assets/bene-time.svg';
import Progress from '../Progress/Progress';
import useWindowResize from '../../hooks/useWindowResize';

function ShortInfoCard({ data, ctheme }: any) {
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
  const winDim = useWindowResize();

  return (
    <div
      className={`organiser ogninf grid gap-4 p-4 rounded-bene-c-2 bg-bene-cmp-${ctheme}`}>
      <div className="progress">
        <Progress
          color={formattedHex}
          raised={fundCollected}
          goal={fundToCollect}
          angels={angelsCount}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="organised-by text-left flex items-center mr-2 truncate">
          <img
            src={nameIcon(createdBy.name, campThemeColor)}
            alt={`${createdBy.name[0]}`}
            className="rounded-full mr-2"
          />
          {(winDim.width > 780 && winDim.width < 1150) || winDim.width < 470
            ? 'by'
            : 'organised by'}
          <a
            href={`https://explorer.solana.com/account/${createdBy.pubKey}`}
            className="ml-1">
            <strong>{createdBy.name}</strong>
          </a>
        </div>
        <div className="started-day flex ml-2 truncate">
          <img src={beneTime} alt="started" className="mr-2" />
          {calcDaysFromToday(startDate)}
        </div>
      </div>
    </div>
  );
}

export default ShortInfoCard;
