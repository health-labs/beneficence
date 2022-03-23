import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';

function StartCampBox() {
  return (
    <div className="start-camp-box p-8">
      <div className="my-2 bg-bene-light-blue rounded-bene-c-2 p-4">
        <div className="text-bene-dark-blue my-4 font-semibold text-2xl">
          Start a fundraiser for yourself.
        </div>
        <div>
          <Link to="/start-a-fund" className="inline-block">
            <Button
              text="Start fundraising"
              className="w-vw-08 my-4"
              linkto="/start-a-fund"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StartCampBox;
