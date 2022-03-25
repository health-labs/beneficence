import React from 'react';
import { DonorTypes } from '../../../types/CampaignDesc';

interface DonorProps {
  donors: DonorTypes[];
  title: string;
  ctheme: string;
}

function Donors({ donors, title, ctheme }: DonorProps): JSX.Element {
  return (
    <div className="py-3 text-left mt-2">
      <div className="text-lg font-semibold py-2 text-center">Donors</div>
      <div className="flex flex-wrap flex-row justify-between">
        {donors.map((donor, index) => (
          <div className="w-1/2 py-2 flex justify-center">
            <div
              className={`flex max-w-full overflow-hidden items-center p-4 justify-center border-2 border-bg-bene-cmp-${ctheme} border-dashed rounded-lg`}>
              <img
                src={donor.imgSrc}
                alt={`${title} donor ${index}`}
                className="w-beat-2 rounded-bene-c-2 max-w-px-40"
              />
              <div className="text-lg font-semibold p-2">{donor.name}</div>
              contributed
              <div className="text-lg font-semibold p-2">${donor.amount}</div>
            </div>
          </div>
        ))}
        {donors.length === 0 && (
          <div className="w-full py-2 flex justify-center">
            <div
              className={`flex w-full items-center justify-center border-2 border-bg-bene-cmp-${ctheme} border-dashed rounded-lg`}>
              <div className="text-lg font-semibold p-2">No donors yet</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donors;
