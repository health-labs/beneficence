import React from 'react';
import beneDiscord from '../../assets/bene-discord.svg';
import beneGithub from '../../assets/bene-github.svg';
import beneMedium from '../../assets/bene-medium.svg';
import beneExtLogo from '../../assets/bene-ext-logo.svg';

function SocialStrip() {
  return (
    <div className="mp-bene-social-strip max-h-sm p-4 flex justify-between">
      <div className="mp-social flex my-auto mx-0">
        <div className="bene-discord mx-2">
          <button
            type="button"
            className="soclnk transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 hover:text-indigo-500 duration-200 hover:opacity-95">
            <img src={beneDiscord} alt="discord" />
          </button>
        </div>
        <div className="bene-github mx-2">
          <button
            type="button"
            className="soclnk transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 hover:text-indigo-500 duration-200 hover:opacity-95">
            <img src={beneGithub} alt="github" />
          </button>
        </div>
        <div className="bene-medium mx-2">
          <button
            type="button"
            className="soclnk transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 hover:text-indigo-500 duration-200 hover:opacity-95">
            <img src={beneMedium} alt="medium" />
          </button>
        </div>
      </div>
      <div className="bene-extended-logo max-h-xs">
        <img src={beneExtLogo} alt="beneficence" />
      </div>
    </div>
  );
}

export default SocialStrip;
