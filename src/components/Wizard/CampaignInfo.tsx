import React from 'react';
import useWizardContext from '../../hooks/useWizard';
import WizardInfo from './Layout/WizardInfo';
import { category, countriesList } from '../../const/onboard';
import Multiselect from 'multiselect-react-dropdown';

export default function Account() {
  const { campaignData, setCampaignData } = useWizardContext();

  const handleChange = (e: any, inp: string) => {
    const { name, value } = e.target;
    setCampaignData({ ...campaignData, name });
  };
  const handleMultiSelect = (e: any, inp: string) => {
    const { name, value } = e.target;
    setCampaignData({ ...campaignData, name });
  };

  const inputs = [
    {
      name: 'fname',
      label: 'First Name',
      type: 'text',
      value: campaignData.fname,
      col: 'sm:col-span-3',
    },
    {
      name: 'lname',
      label: 'Last Name',
      type: 'text',
      value: campaignData.lname,
      col: 'sm:col-span-3',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: campaignData.email,
      col: 'sm:col-span-3',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      value: campaignData.phone,
      col: 'sm:col-span-3',
    },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      value: campaignData.country,
      col: 'sm:col-span-3 lg:col-span-2',
      select: 'single',
    },
    {
      name: 'pin',
      label: 'Pin',
      type: 'text',
      value: campaignData.pin,
      col: 'sm:col-span-3 lg:col-span-2',
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      value: campaignData.category,
      col: 'sm:col-span-3 lg:col-span-2',
      select: 'multiple',
    },
  ];

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <WizardInfo
          text1={`Let's get your campaign set up`}
          text2={`Getting started with your campaign is easy. Just fill out the
              details asked and start fundraising.`}
        />
        <div className="mt-5 md:mt-0 md:col-span-2 text-left">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {inputs.map((input: any) =>
                    input.type === 'select' ? (
                      <div
                        key={input.name}
                        className={`col-span-6 ${input.col}`}>
                        <label
                          htmlFor={input.name}
                          className="block text-sm font-medium leading-5 text-gray-700">
                          {input.label}
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          {input.select === 'multiple' ? (
                            <select
                              id={input.name}
                              name={input.name}
                              value={input.value}
                              onChange={(e) => handleChange(e, input.name)}
                              className="block form-select w-full px-3 py-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                              {countriesList.map((country: string) => (
                                <option key={country} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <Multiselect options={category} />
                          )}
                          {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div> */}
                        </div>
                      </div>
                    ) : (
                      <div className={`col-span-6 ${input.col}`}>
                        <label
                          htmlFor={input.name}
                          className="block text-sm font-medium leading-5 text-gray-700">
                          {input.label}
                          <input
                            id={input.name}
                            name={input.name}
                            type={input.type}
                            value={input.value}
                            onChange={(e) => handleChange(e, input.name)}
                            className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
