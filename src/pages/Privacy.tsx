import React, { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy | Beneficence';
  }, []);
  return (
    <div className="p-122 flex-grow">
      <div>
        <div className="text-lg font-bold py-5">Privacy</div>
      </div>
      <p>
        <br />
      </p>
    </div>
  );
}
