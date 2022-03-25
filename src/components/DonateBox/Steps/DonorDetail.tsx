import React from 'react';
import InputBox from '../../Input/InputBox';
import TextArea from '../../Input/TextArea';

function DonorDetail() {
  const organiser = 'Vink';
  return (
    <div className="bg-white w-md max-w-xl mx-auto">
      <h1 className="text-bene-dark-blue text-2xl font-bold text-center">
        Enter your details
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="bg-bene-very-light-blue px-3 py-2 rounded-bene-c-2 mt-6">
          <div className="name text-left mb-2">
            <InputBox
              placeholder="Donating as?"
              title="From"
              className="w-full rounded-lg"
            />
          </div>
          <div className="email-input my-2">
            <InputBox
              placeholder="Email"
              title="Email"
              type="email"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="bg-bene-very-light-blue px-3 py-2 rounded-bene-c-2 mt-6">
          <TextArea
            placeholder={`Say something in support of ${organiser}`}
            title="Supporting message"
            className="w-full rounded-lg resize-none"
          />
        </div>
      </div>
      <div className="text-xs font-semibold py-2 text-gray-500">
        These fields are optional
      </div>
    </div>
  );
}

export default DonorDetail;
