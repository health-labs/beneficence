import React from 'react';
import { PoNTypes } from '../../../types/CampaignDesc';

interface PONProps {
  pon: PoNTypes;
  title: string;
}

function ProofOfNeed({ pon, title }: PONProps): JSX.Element {
  return (
    <div className="py-3 text-left mt-2">
      <div className="text-lg font-semibold py-2">Proof of need</div>
      <p>{pon?.text}</p>
      {pon?.imgSrc.map((src, index) => (
        <img
          src={src}
          alt={`${title} PoN ${index}`}
          className="w-beat-2 rounded-bene-c-2"
        />
      ))}
    </div>
  );
}

export default ProofOfNeed;
