import React from 'react';

function Title({ title }: { title: string }) {
  return (
    <div>
      <div className="font-semibold text-3xl pb-6 text-left">{title}</div>
    </div>
  );
}

export default Title;
