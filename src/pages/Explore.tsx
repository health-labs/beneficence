import React, { useEffect } from 'react';
import { Connection } from '@solana/web3.js';
import { deserialize } from 'borsh';
import axios from 'axios';
import DonationCard from '../components/Cards/DonationCard';
import joinhand from '../assets/join-hand.svg';
import StartCampBox from '../components/StartCampBox';
import { mpCampaigns } from '../test/data';
import useLoading from '../hooks/useLoading';
import LoadingPage from '../components/LoadingPage';
import { LoadingCtxType } from '../context/LoadingApp';
import { CampaignInfo, pgid } from '../components/Wizard/SubmitCampaign';

const rpc = 'https://api.devnet.solana.com';
const conn = new Connection(rpc, 'confirmed');
function Explore() {
  const { isLoading, setIsLoading } = useLoading() as LoadingCtxType;
  const [campaigns, setCampaigns] = React.useState<any[]>([]);
  const [loadingCmp, setLoadingCmp] = React.useState<boolean>(true);

  async function getAllCampaigns() {
    const accs = await conn.getProgramAccounts(pgid);
    const x: any[] = [];
    accs.forEach((e) => {
      try {
        const cmpData = deserialize(
          CampaignInfo.schema,
          CampaignInfo,
          e.account.data
        );
        const s: any = cmpData;
        const soSplt = s.id.split(',');
        if (soSplt.length > 2) {
          if (soSplt[2] === 't1') {
            window.localStorage.setItem('accid', e.pubkey.toBase58());
            console.log('id: ', e.pubkey.toBase58());
            axios.get(`http://localhost:1984/${soSplt[1]}`).then((res) => {
              x.push({
                pubId: e.pubkey.toBase58(),
                data: res.data,
                collected_fund: s.collected_fund.toString(),
              });
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
    setCampaigns(x);
    return x;
  }
  const waitLoading = () => {
    setLoadingCmp(true);
    const wait = setTimeout(() => {
      setLoadingCmp(false);
    }, 1000);
    return () => clearTimeout(wait);
  };
  useEffect(() => {
    getAllCampaigns();
    waitLoading();
    document.title = 'Explore fundraisers | Beneficence';
  }, []);
  useEffect(() => {
    setIsLoading(false);
    setCampaigns(campaigns);
    console.log('campaigns1 ', campaigns);
  }, [campaigns]);

  return (
    <div>
      {!isLoading && !loadingCmp ? (
        <div className="w-full max-w-per-98 mx-auto overflow-hidden">
          <div>
            <div className="text-7xl text-bene-dark-blue font-bold text-center">
              <div className="m-auto0 py-14">Explore campaigns</div>
            </div>
          </div>

          <div className="explore-join-now text-3xl text-bene-dark-blue font-bold text-left p-8">
            <div className="bg-bene-green-blue justify-between flex rounded-tl-bene-c-2 rounded-br-bene-c-2 px-6 py-4 sm:py-8 md:py-12">
              <div className="m-auto0 w-full sm:w-max">
                Ongoing efforts to help save lives.
                <div className="text-bene-light-blue">Join now!</div>
              </div>
              <div className="m-auto0 md:my-ne-2 md:ml-ne-2">
                <img src={joinhand} alt="hands" className="max-h-12rem" />
              </div>
            </div>
          </div>

          <div className="p-8 grid gap-8 grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-5 lg:grid-cols-3 text-left">
            {mpCampaigns.map((campaign) => {
              return (
                <DonationCard
                  imgSrc={campaign.imgSrc}
                  title={campaign.title}
                  description={campaign.description}
                  link="https://www.google.com"
                  angelsCount={campaign.angelsCount}
                  campaignId={campaign.campaignId}
                />
              );
            })}
            {campaigns.map((campaign) => {
              return (
                <DonationCard
                  imgSrc={campaign.data?.campaign.cover}
                  title={campaign.data?.campaign.title}
                  description={campaign.data?.campaign.description}
                  link="https://www.google.com"
                  angelsCount={3}
                  campaignId={campaign.data?.campaign.id}
                  collectedFund={campaign.collected_fund}
                  id={campaign.pubId}
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
