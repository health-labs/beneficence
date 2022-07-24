import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useState } from 'react';
import {
  PublicKey,
  Connection,
  Transaction,
  SystemProgram,
  TransactionInstruction,
  TransactionResponse,
} from '@solana/web3.js';
import { useLocation } from 'react-router-dom';
import { campColorRgb } from '../../const/campColors';
import useSingleModal from '../../hooks/useSingleModal';
import { rgbaToHex } from '../../utils/campaign';
import DonateButton from '../Button/DonateButton';
import CustomAmount from '../DonateBox/CustomAmount';
import DonationAmount from '../DonateBox/DonationAmount';
import DonateModal from '../DonateBox/Steps/DonateModal';
import { pgid } from '../Wizard/SubmitCampaign';

const rpc = 'https://api.devnet.solana.com';
const conn = new Connection(rpc, 'confirmed');
function DonateBox({ data, ctheme }: any) {
  const {
    id,
    image,
    title,
    description,
    startDate,
    endDate,
    createdBy,
    isApproved,
    fundToCollect,
    fundCollected,
    angelsCount,
  } = data;
  const campThemeColor = rgbaToHex(campColorRgb[ctheme]);
  const formattedHex = `bg-bene-f-${ctheme}`;

  const donationVal = [
    {
      label: '$5',
      value: 5,
    },
    {
      label: '$25',
      value: 25,
    },
    {
      label: '$100',
      value: 100,
    },
    {
      label: '$500',
      value: 500,
    },
    {
      label: '$1000',
      value: 1000,
    },
  ];
  const [selectedAmt, setselectedAmt] = useState(25);

  const chkActive = (val: number) => {
    return selectedAmt === val;
  };

  const setActiveVal = (val: number) => {
    setselectedAmt(val);
  };

  const chkActiveOther = () => {
    const constAmt = !donationVal.map((v) => v.value).includes(selectedAmt);
    return constAmt;
  };

  async function setPayerAndBlockhashTransaction(
    instructions: any,
    publicKey: PublicKey
  ) {
    const transaction = new Transaction();
    instructions.forEach((element: any) => {
      transaction.add(element);
    });
    transaction.feePayer = publicKey;
    const hash = await conn.getLatestBlockhash();
    transaction.recentBlockhash = hash.blockhash;
    return transaction;
  }

  async function signAndSendTransaction(
    transaction: Transaction,
    signTransaction: any
  ) {
    try {
      const signedTrans = await signTransaction(transaction);
      const signature = await conn.sendRawTransaction(signedTrans.serialize());
      return signature;
    } catch (err) {
      console.log('signAndSendTransaction error', err);
      throw err;
    }
  }
  const { publicKey, signTransaction, wallet, connected, connect } =
    useWallet();
  const loc = useLocation();
  const sid = loc.pathname.split('/')[1];
  async function donateToCampaign() {
    const SEED = `bene0${Math.random().toString()}`;
    const kk = window.localStorage.getItem('accid');
    if (publicKey && kk) {
      const newAccount = await PublicKey.createWithSeed(publicKey, SEED, pgid);

      const createProgramAccount = SystemProgram.createAccountWithSeed({
        fromPubkey: publicKey,
        basePubkey: publicKey,
        seed: SEED,
        newAccountPubkey: newAccount,
        lamports: selectedAmt,
        space: 1,
        programId: pgid,
      });
      const instructionTOOurProgram = new TransactionInstruction({
        keys: [
          { pubkey: new PublicKey(kk), isSigner: false, isWritable: true },
          { pubkey: newAccount, isSigner: false, isWritable: false },
          { pubkey: publicKey, isSigner: true, isWritable: false },
        ],
        programId: pgid,
        data: new Uint8Array([2]),
      });

      const trans = await setPayerAndBlockhashTransaction(
        [createProgramAccount, instructionTOOurProgram],
        publicKey
      );
      const signature = await signAndSendTransaction(trans, signTransaction);
      const result = await conn.confirmTransaction(signature);
      window.open(
        `https://explorer.solana.com/tx/${signature}?cluster=devnet`,
        '_blank'
      );
      console.log('end sendMessage', result);
    }
  }
  const onDonate = async (e: any) => {
    e.preventDefault();
    await donateToCampaign();
  };
  const { isOpen, handleModalAction } = useSingleModal();
  const onClickDonate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (Number(selectedAmt) < 1) {
      alert('Sorry! Minimum donation amount is $1');
      setselectedAmt(0);
    } else {
      handleModalAction(<DonateModal />);
    }
  };

  useEffect(() => {
    setselectedAmt(25);
  }, []);

  return (
    <div
      className={`organiser grid gap-4 p-4 rounded-bene-c-2 bg-bene-cmp-${ctheme}`}>
      <div className="donate-amount grid grid-cols-3 gap-4">
        {donationVal.map((amount: any) => (
          <DonationAmount
            amount={amount}
            active={chkActive(amount.value)}
            color={formattedHex}
            setActiveVal={setActiveVal}
          />
        ))}
        <CustomAmount
          active={chkActiveOther()}
          color={formattedHex}
          setActiveVal={setActiveVal}
        />
      </div>
      <div className="donate hover:scale-105 transform duration-400 transition ease-out">
        <DonateButton
          campaignid={id}
          className="w-full"
          amount={selectedAmt}
          onClick={(e) => onDonate(e)}
        />
      </div>
    </div>
  );
}

export default DonateBox;
