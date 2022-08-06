import React from 'react';
import ProgressBar from '../../../Progress/ProgressBar';

interface CVoteProgressProps {
  className?: string;
  text: string;
  num: number;
  total: number;
  innerColor?: string;
  bgColor?: string;
}

function CVoteProgress({
  className = '',
  text,
  num,
  total,
  innerColor = 'blue-700',
  bgColor = 'gray-200',
}: CVoteProgressProps) {
  return (
    <div className={`rounded-md w-full p-3 ${className} ${bgColor}`}>
      <div className="flex flex-row justify-between my-1">
        <div className={`text-${innerColor} font-bold`}>{text}</div>
        <div className="font-bold"> {num} </div>
      </div>
      <ProgressBar color={`bg-${innerColor}`} percent={(num / total) * 100} />
    </div>
  );
}

export default CVoteProgress;
