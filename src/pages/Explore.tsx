import React, { useEffect } from 'react';
import DonationCard from '../components/Cards/DonationCard';
import joinhand from '../assets/join-hand.svg';
import StartCampBox from '../components/StartCampBox';
import { mpCampaigns } from '../test/data';
import useLoading from '../hooks/useLoading';
import LoadingPage from '../components/LoadingPage';
import { LoadingCtxType } from '../context/LoadingApp';

function Explore() {
  const { isLoading, setIsLoading } = useLoading() as LoadingCtxType;
  useEffect(() => {
    document.title = 'Explore fundraisers | Beneficence';
    setTimeout(() => {
      setIsLoading(false);
    }, 100000);
  }, []);
  return (
    <div>
      {!isLoading ? (
        <div className="w-full max-w-per-98 mx-auto overflow-hidden">
          <div>
            <div className="text-7xl text-bene-dark-blue font-bold text-center">
              <div className="m-auto0 py-14">Explore campaigns</div>
            </div>
          </div>

          <div className="explore-join-now text-3xl text-bene-dark-blue font-bold text-left p-8">
            <div className="bg-bene-green-blue justify-between flex rounded-tl-bene-c-2 rounded-br-bene-c-2 px-6 py-12">
              <div className="m-auto0">
                Ongoing efforts to help save lives.
                <div className="text-bene-light-blue">Join now!</div>
              </div>
              <div className="m-auto0 md:my-ne-2 md:ml-ne-2">
                <img src={joinhand} alt="hands" className="max-h-12rem" />
              </div>
            </div>
          </div>

          <div className="p-8 grid gap-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-5 lg:grid-cols-3 text-left">
            {mpCampaigns.map((campaign) => {
              return (
                <DonationCard
                  imgSrc={campaign.imgSrc}
                  title={campaign.title}
                  description={campaign.description}
                  link={campaign.link}
                  angelsCount={campaign.angelsCount}
                  campaignId={campaign.campaignId}
                />
              );
            })}
          </div>
          <div>
            <StartCampBox />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default Explore;
