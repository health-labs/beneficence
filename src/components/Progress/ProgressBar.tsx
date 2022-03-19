import React from 'react';

interface ProgressBarProps {
  color: string;
  percent: number;
}

function ProgressBar({ color, percent }: ProgressBarProps) {
  return (
    <div className="campaign-progress-bar w-full bg-white rounded-full">
      <div
        style={{ width: `${percent}%` }}
        className={`campaign-progress-bar-inner text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2 ${color}`}>
        {' '}
      </div>
    </div>
  );
}

export default ProgressBar;
