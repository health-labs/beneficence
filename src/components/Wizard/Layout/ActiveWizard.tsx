import React, { useState, useEffect, useRef } from 'react';

function ActiveWizard({ wizrdIdx, wizrdNum }: any) {
  const [newStep, setNewStep] = useState<any>([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber: number, stp: any) => {
    const newSteps = [...stp];
    console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count += 1;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count += 1;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count += 1;
      }
    }

    return newSteps;
  };

  const [ab, setAb] = useState({});

  useEffect(() => {
    const stepsState = wizrdIdx.map((step: any, index: number) =>
      setAb({
        ...ab,
        description: step,
        completed: false,
        highlighted: index === 0,
        selected: index === 0,
      })
    );

    stepsRef.current = stepsState;
    const current = updateStep(wizrdNum - 1, stepsRef.current);
    setNewStep(current);
  }, [wizrdIdx, wizrdNum]);

  const stepsDisplay = newStep.map((step: any, index: number) => {
    return (
      <div
        key={step}
        className={
          index !== newStep.length - 1
            ? 'w-full flex items-center'
            : 'flex items-center'
        }>
        <div className="relative flex flex-col items-center text-bene-dark-blue">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-white h-8 w-8 flex items-center justify-center py-3  ${
              step.selected
                ? 'bg-bene-dark-blue text-white font-bold border border-bene-dark-blue '
                : 'bg-white font-bold'
            }`}>
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0  text-center mt-16 w-8 text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}>
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? 'border-bene-dark-blue' : 'border-white '
          }  `}
        />
      </div>
    );
  });

  return (
    <div className="mx-auto mt-2 max-w-per-60 p-4 flex justify-between items-center">
      {stepsDisplay}
    </div>
  );
}
export default ActiveWizard;
