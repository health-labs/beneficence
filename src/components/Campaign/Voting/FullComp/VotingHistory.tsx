import React from 'react';
import { VotingSteps } from '../../../../types';
import cvdone from '../../../../assets/cvdone.svg';
import cvfailed from '../../../../assets/cvfailed.svg';
import cvpart from '../../../../assets/cvpart.svg';
import extLink from '../../../../assets/extLink.svg';

interface VotingHistoryTypes {
  className?: string;
  historyArr: VotingSteps;
  color?: string;
}

function VotingHistory({
  className,
  historyArr,
  color = 'sky-blue',
}: VotingHistoryTypes) {
  const stepCompleted = ['created', 'activated', 'passed', 'executed'];
  const stepCompleted2 = ['updated', 'executed_partially'];
  const stepFailed = ['failed', 'execution_failed', 'cancelled', 'deleted'];

  const showStatusIco = (step: string) => {
    if (stepCompleted.includes((historyArr as any)[step].status)) {
      return <img src={cvdone} alt="status" className="m-auto" />;
    }
    if (stepCompleted2.includes((historyArr as any)[step].status)) {
      return <img src={cvpart} alt="status" className="m-auto" />;
    }
    if (stepFailed.includes((historyArr as any)[step].status)) {
      return <img src={cvfailed} alt="status" className="m-auto" />;
    }
    return (
      <div className={`bg-bene-cmp-${color} rounded-full m-auto w-4 h-4`} />
    );
  };

  const getStatusColor = (step: string) => {
    if (stepCompleted.includes((historyArr as any)[step].status)) {
      return 'text-bene-dark-blue';
    }
    if (stepCompleted2.includes((historyArr as any)[step].status)) {
      return 'text-yellow-600';
    }
    if (stepFailed.includes((historyArr as any)[step].status)) {
      return 'text-red-700';
    }
    return 'text-black text-opacity-60';
  };

  return (
    <div className={`${className} rounded-lg p-4 flex flex-col gap-3`}>
      {Object.entries(historyArr).map((item, index) => {
        const [key, value] = item;
        return (
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                {showStatusIco(key)}
              </div>
              <div className="my-auto">
                <div
                  className={`font-semibold text-left ${getStatusColor(
                    key
                  )}`}>{`${key[0].toUpperCase()}${key.slice(1)}`}</div>
                {value.time && (
                  <div className="text-left text-black opacity-50 text-xs">
                    {value.time?.getDate} Mar 3rd, 2022 - 14:23
                  </div>
                )}
              </div>
            </div>
            {value?.txHash && (
              <input
                type="image"
                onClick={() =>
                  window.open(`https://explorer.solana.com/tx/${value.txHash}`)
                }
                src={extLink}
                alt="external-link"
                className="w-5 h-5 my-auto"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default VotingHistory;
