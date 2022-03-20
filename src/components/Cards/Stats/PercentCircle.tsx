import React from 'react';
import { calcProgressPercent } from '../../../utils/campaign';

function PercentCircle() {
  const raised = 30000;
  const goal = 50000;
  return (
    <div className="self-center">
      <div className="flex justify-center">
        <div className="w-full h-full flex justify-center items-center">
          <svg className="w-20 h-20">
            <circle
              className="text-gray-300"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"
              r="30"
              cx="40"
              cy="40"
            />
            <circle
              className="text-blue-600"
              strokeWidth="5"
              strokeDasharray="circumference"
              strokeDashoffset="circumference - percent / 100 * circumference"
              strokeLinecap="round"
              stroke="#003D84"
              fill="#003D84"
              r="30"
              cx="40"
              cy="40"
            />
          </svg>
          <span className="absolute text-xl text-bene-dark-blue font-semibold">
            {calcProgressPercent(raised, goal)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default PercentCircle;
