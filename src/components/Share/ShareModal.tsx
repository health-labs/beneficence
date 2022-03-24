import React, { useRef } from 'react';
import twitterCamp from '../../assets/twitter-camp.svg';
import facebookCamp from '../../assets/facebook-camp.svg';
import whatsappCamp from '../../assets/whatsapp-camp.svg';
import mailCamp from '../../assets/mail-camp.svg';
import redditCamp from '../../assets/reddit-camp.svg';
import instagramCamp from '../../assets/instagram-camp.svg';
import linkedinCamp from '../../assets/linkedin-camp.svg';
import copyCamp from '../../assets/copy-camp.svg';
import useCopyText from '../../hooks/useCopyText';
import successCamp from '../../assets/success-camp.svg';
import failedCamp from '../../assets/failed-camp.svg';
import useSingleModal from '../../hooks/useSingleModal';

function ShareModal({
  id,
  organiser,
  title,
  className,
}: {
  id: string;
  organiser: string;
  title: string;
  className?: string;
}) {
  // {editable url}
  const url = `localhost:3000`;
  const shareArr = [
    {
      img: twitterCamp,
      alt: 'Share on Twitter',
      icoName: 'twitter',
      category: 'social',
      url: `https://twitter.com/intent/tweet?text=Check out this campaign on Beneficence. Donate to ${organiser}'s campaign to help their medical needs. Every donation counts. Find it here: https://${url}/campaign/${id}`,
    },
    {
      img: facebookCamp,
      alt: 'Share on Facebook',
      icoName: 'facebook',
      category: 'social',
      url: `https://www.facebook.com/sharer/sharer.php?u=https://${url}/campaign/${id}`,
    },
    {
      img: whatsappCamp,
      alt: 'Share on Whatsapp',
      icoName: 'whatsapp',
      category: 'personal',
      url: `https://api.whatsapp.com/send?text=Hey there, Check out this campaign on Beneficence. Donate to ${organiser}'s campaign to help their medical needs. Every donation counts. https://${url}/campaign/${id}`,
    },
    {
      img: mailCamp,
      alt: 'Share on Mail',
      icoName: 'mail',
      category: 'personal',
      url: `mailto:?subject=${title} &body=Hey there,%0D%0ACheck out this campaign on Beneficence. Donate to ${organiser}'s campaign to help their medical needs. Every donation counts. %0D%0ADonate here: https://${url}/campaign/${id}`,
    },
    {
      img: redditCamp,
      alt: 'Share on Reddit',
      icoName: 'reddit',
      category: 'social',

      url: `https://www.reddit.com/submit?url=https://${url}/campaign/${id}&title=Check out this campaign on Beneficence. Donate to ${organiser}'s campaign to help their medical needs. Every donation counts. &resubmit=true&selftext=true`,
    },
    {
      img: instagramCamp,
      alt: 'Share on Instagram',
      icoName: 'instagram',
      category: 'social',
      url: 'https://www.instagram.com/',
    },
    {
      img: linkedinCamp,
      alt: 'Share on Linkedin',
      icoName: 'linkedin',
      category: 'social',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=https://${url}/campaign/${id}&title=Check out this campaign on Beneficence. Donate to ${organiser}'s campaign to help their medical needs. Every donation counts. &summary=&source=`,
    },
  ];
  const showCopiedRef = useRef<HTMLImageElement>(null);
  const showCopiedRef2 = useRef<HTMLImageElement>(null);
  const { copiedText, onCopyToClipboard, copySuccess } = useCopyText({
    text: `https://${url}/campaign/${id}`,
    showCopiedRef,
    showCopiedRef2,
  });
  const { handleModalAction } = useSingleModal();

  return (
    <div
      className={`flex flex-col p-6 absolute inset-0 m-auto max-w-md max-h-33rem h-33rem min-w-min w-per-70 filter-bene-2 bg-white rounded-bene-c-2 ${className}`}>
      <button
        type="button"
        className="z-7 w-fit flex justify-end absolute right-5 hover:opacity-75 transition ease-in-out duration-250 transform hover:rotate-90"
        onClick={handleModalAction}>
        <svg className="w-5 h-5" role="button" viewBox="0 0 20 20">
          <path
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div className="font-bold text-bene-dark-blue text-3xl">
        Help {organiser}
      </div>

      <div className="font-semibold text-left py-3">
        Share and spread the word to encourage donations from people in your
        contacts or socials.
      </div>
      <div className="flex flex-col w-em27">
        <div className="flex flex-col sm:flex-row justify-start sm:items-center w-em27">
          <div className=" p-4 pl-0 pb-1">
            <h3 className="text-left text-xl font-semibold text-gray-900">
              Social:
            </h3>
          </div>
          <div className="flex flex-row flex-wrap sm:flex-nowrap">
            {shareArr.map((share, index) =>
              share.category === 'social' ? (
                <div className={`share-${share.icoName} p-4 pb-1`}>
                  <a
                    href={share.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:transform transition-all duration-200 hover:opacity-80 hover:-translate-y-2 hover:pb-2">
                    <img
                      src={share.img}
                      alt={share.alt}
                      className="h-14 w-14 max-w-img-sm share-hover"
                    />
                  </a>
                </div>
              ) : undefined
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-start sm:items-center w-em27">
          <div className=" p-4 pl-0 pb-1">
            <h3 className="text-left text-xl font-semibold text-gray-900">
              Personal:
            </h3>
          </div>
          <div className="flex flex-row flex-wrap sm:flex-nowrap">
            {shareArr.map((share, index) =>
              share.category === 'personal' ? (
                <div className={`share-${share.icoName} p-4 pb-1`}>
                  <a
                    href={share.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:transform transition-all duration-200 hover:opacity-80 hover:-translate-y-2 hover:pb-2">
                    <img
                      src={share.img}
                      alt={share.alt}
                      className="h-14 w-14 max-w-img-sm share-hover"
                    />
                  </a>
                </div>
              ) : undefined
            )}
          </div>
        </div>
      </div>
      <div className="text-left text-lg font-semibold mt-2 pt-2">
        Get a shareable link to the campaign:
      </div>
      <div className="copy-link p-4 pl-0 pt-1 flex flex-row items-center">
        <input
          type="text"
          value={`https://${url}/campaign/${id}`}
          readOnly
          className="rounded-lg p-1 h-10 mr-2 flex-grow focus:outline-none focus:shadow-outline border-2 border-gray-300"
        />
        <button
          type="button"
          className=" cursor-pointer hover:scale-95 transform transition-all duration-200 show"
          onClick={onCopyToClipboard}>
          <div ref={showCopiedRef2}>
            <img className="h-7 w-7" src={copyCamp} alt="Copy link" />
          </div>
          <div ref={showCopiedRef} className="hide">
            {copySuccess === 'success' ? (
              <img className="h-7 w-7" src={successCamp} alt="Copied" />
            ) : (
              <img className="h-7 w-7" src={failedCamp} alt="Copy failed" />
            )}
          </div>
        </button>
      </div>
      <div className="text-xs text-left p-4 mt-2 bg-bene-very-light-blue rounded-bene-c-2 mb-1">
        <span className="font-semibold">Note: </span>Clicking on links will only
        open respective sharing option with a pre loaded template. You will have
        to click share for the action to complete successfully.
      </div>
      <div className="text-center">{title} on Beneficence.</div>
    </div>
  );
}

export default ShareModal;
