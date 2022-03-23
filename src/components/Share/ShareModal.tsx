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
      url: `https://api.whatsapp.com/send?text=Hey there, Check out this campaign on Beneficence. Donate to ${organiser}'s campaign to help their medical needs. Every donation counts. &url=https://${url}/campaign/${id}`,
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

  return (
    <div
      className={`flex flex-col absolute filter-bene-2 bg-white rounded-bene-c-2 ${className}`}>
      <div> Help {organiser} </div>
      Share and spread the word to encourage donations from people in your
      contacts or socials.
      <div className="flex w-em27">
        <div className="flex flex-col justify-center items-center w-em27">
          <div className=" p-4 pb-1">
            <h3 className="text-center text-xl font-semibold text-gray-900">
              Social:
            </h3>
          </div>
          {shareArr.map((share, index) =>
            share.category === 'social' ? (
              <div className={`share-${share.img} p-4 pb-1`}>
                <a
                  href={share.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:transform transition-all duration-200 hover:opacity-80 hover:-translate-y-2 hover:pb-2">
                  <img
                    src={share.img}
                    alt={share.alt}
                    className="h-14 w-14 share-hover"
                  />
                </a>
              </div>
            ) : (
              {}
            )
          )}
        </div>
        <div className="flex flex-col justify-center items-center w-em27">
          <div className=" p-4 pb-1">
            <h3 className="text-center text-xl font-semibold text-gray-900">
              Personal:
            </h3>
          </div>

          {shareArr.map((share, index) =>
            share.category === 'personal' ? (
              <div className={`share-${share.img} p-4 pb-1`}>
                <a
                  href={share.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:transform transition-all duration-200 hover:opacity-80 hover:-translate-y-2 hover:pb-2">
                  <img
                    src={share.img}
                    alt={share.alt}
                    className="h-14 w-14 share-hover"
                  />
                </a>
              </div>
            ) : (
              {}
            )
          )}
        </div>
      </div>
      <div>Get a shareable link to the campaign: </div>
      <div className="copy-link p-4 pt-1 flex flex-row items-center">
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
    </div>
  );
}

export default ShareModal;
