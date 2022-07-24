import React from 'react';
import orgIco from '../../../assets/org-ico.svg';
import locIco from '../../../assets/loc-ico.svg';

interface OrgDetailsTypes {
  orgName: string;
  orgLocation: string;
  className?: string;
}

function OrgDetails({ orgName, orgLocation, className }: OrgDetailsTypes) {
  return (
    <div
      className={`flex justify-between p-2 bg-no-repeat bg-center bg-contain ${className}`}>
      <div className="bg-img-ovrlay justify-center flex text-white font-semibold text-center p-1 rounded-xl items-center max-h-11">
        <img src={orgIco} alt="organiser" className="m-auto max-h-6 ml-1" />
        <span className="rounded-lg ml-1 px-1 py-0a whitespace-nowrap">
          {orgName}
        </span>{' '}
      </div>
      <div className="bg-img-ovrlay justify-center flex text-white font-semibold text-cente p-1 rounded-xl items-center max-h-11">
        <img src={locIco} alt="location" className="m-auto max-h-6 ml-1" />
        <span className="rounded-lg px-1 py-0a whitespace-nowrap">
          {orgLocation}
        </span>
      </div>
    </div>
  );
}

export default OrgDetails;
