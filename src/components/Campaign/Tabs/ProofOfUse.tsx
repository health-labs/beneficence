import React from 'react';
import { PoUTypes } from '../../../types/CampaignDesc';

interface POUProps {
  pou: PoUTypes;
  title: string;
}

function ProofOfUse({ pou, title }: POUProps): JSX.Element {
  return (
    <div className="py-3 text-left mt-2">
      <div className="text-lg font-semibold py-2">Proof of use</div>
      <p>{pou?.hasContent ? pou?.text : 'No proof of use yet'}</p>
      {pou?.imgSrc.map((imgSrc, index) => (
        <img
          src={imgSrc}
          alt={`${title} PoU ${index}`}
          className="w-beat-2 rounded-bene-c-2"
        />
      ))}
    </div>
  );
}

export default ProofOfUse;
