import React from 'react';
import { calcProgressPercent } from '../../utils/campaign';
import { amountWithCommas } from '../../utils/util';
import ProgressBar from './ProgressBar';
import angelIco from '../../assets/angel-black.svg';

interface ProgressProps {
  color: string;
  raised: number;
  goal: number;
  angels: number;
}

function Progress({ color, raised, goal, angels }: ProgressProps) {
  return (
    <div className="campaign-progress-raised py-2 pt-0">
      <div className="flex justify-between">
        <div className="w-per-70 text-left pb-2 pr-2">
          <div className="campaign-raised font-semibold text-2xl">
            ${amountWithCommas(raised)}
          </div>
          <div className="flex">
            raised of
            <div className="font-semibold ml-1">${amountWithCommas(goal)}</div>
          </div>
        </div>
        <div className="w-per-30 text-right pb-2 pl-2">
          <div className="flex justify-end items-center">
            <img src={angelIco} alt="angels" />
            <div className="font-semibold ml-2 text-2xl">
              {amountWithCommas(angels)}
            </div>
          </div>
          angels
        </div>
      </div>
      <ProgressBar color={color} percent={calcProgressPercent(raised, goal)} />
    </div>
  );
}

export default Progress;
