import React from 'react';
import { calcProgressPercent } from '../../../utils/campaign';

function PercentCircle() {
  const raised = 30000;
  const goal = 50000;
  const cf = 2 * Math.PI * 30;
  const per = calcProgressPercent(raised, goal);
  return (
    <div className="self-center">
      <div className="flex justify-center">
        <div className="w-full h-full flex justify-center items-center">
          <svg viewBox="-1 -1 34 34" className="h-16 w-16 tranform -rotate-90">
            <circle cx="16" cy="16" r="15.3155" fill="none" />
            <circle
              cx="16"
              cy="16"
              r="15.3155"
              strokeDasharray="100 100"
              strokeDashoffset={`${100 - per}`}
              stroke="#003D84"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              className="transition-stroke-dashoffset"
            />
          </svg>
          <span className="absolute text-xl text-bene-dark-blue font-semibold">
            {per}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default PercentCircle;
