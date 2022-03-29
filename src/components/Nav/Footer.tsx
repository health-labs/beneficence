import React from 'react';
import footBeat from '../../assets/foot-beat.svg';
import beneMail from '../../assets/bene-mail.svg';
import beneMsg from '../../assets/bene-msg.svg';

const footerNav = [
  {
    title: 'For donors',
    options: [
      {
        link: '/categories',
        title: 'Categories',
      },
      {
        link: '/donate',
        title: 'Donate',
      },
      {
        link: '/find-a-cause',
        title: 'Find a cause',
      },
      {
        link: '/organization',
        title: 'Organization',
      },
    ],
  },
  {
    title: 'For help seekers',
    options: [
      {
        link: '/start-a-fund',
        title: 'Start a fund',
      },
      {
        link: '/emergency',
        title: 'Emergency',
      },
      {
        link: '/support',
        title: 'Support',
      },
    ],
  },
  {
    title: 'Resources',
    options: [
      {
        link: '/learn',
        title: 'Learn',
      },
      {
        link: '/blog',
        title: 'Blog',
      },
      {
        link: '/get-help',
        title: 'Get help',
      },
    ],
  },
];

function Footer() {
  return (
    <div className="footer-container bg-bene-dark-blue p-6">
      <div className="container text-right text-bene-nav-opt min-w-full -mt-2">
        <span>For it is in giving that we receive</span>
      </div>
      <div className="pulse-box-footer max-w-content right-0 absolute md:left-0 opacity-10 float-right md:float-left md:absolute sm:opacity-20 md:opacity-25 lg:opacity-100 md:-ml-6 ml-6">
        <img src={footBeat} alt="bene-beat" />
      </div>
      <div className="footer-mid">
        <div className="footer-mid-right absolute mt-0 mr-e-1 right-1">
          <div className="flex footer-nav-set-fund group group cursor-pointer max-w text-white text-left mb-cust-18 font-semibold text-left hover:text-bene-nav-hopt hover:justify-between transition duration-150 ease-out">
            <a href="/start-a-fund" className="footer-nav-set-fund-link">
              <span className="transform transition duration-200 ease-in-out mr-2">
                Set up a fund now
              </span>
              <a
                href="/start-a-fund"
                className="start-fund-creation footer-nav group-hover:animate-none tracking-wide animate-ping">
                {'>'}
              </a>
            </a>
          </div>
          <div className="footer-fiat text-white flex text-xs">
            For fiat donations:{' '}
            <a href="/redirect/sendmail" className="cursor-pointer">
              <img className="mx-1 max-w-em-1-hf" src={beneMail} alt="mail" />
            </a>
            <a href="/sendmsg" className="cursor-pointer">
              <img className="mx-1 max-w-em-1-hf" src={beneMsg} alt="msg" />
            </a>
          </div>
        </div>
        <div className="footer-container-inner self-center mt-8 m-auto w-per-100 pl-cust-r-2 md:pl-0 sm:pl-cust-r-5">
          <div className="footer-nav-container z-10 relative md:flex md:justify-between md:m-auto max-w-md ">
            {footerNav.map((nav, index) => {
              return (
                <div className="footer-nav-item mb-8">
                  <div className="footer-nav-title text-white text-left mb-cust-18 font-semibold">
                    <span>{nav.title}</span>
                  </div>
                  <div className="footer-nav-options text-left">
                    {nav.options.map((option, idx) => {
                      return (
                        <div className="footer-nav-option text-bene-nav-opt mb-1 hover:text-bene-nav-hopt tracking-wide transition duration-150 ease-in-out">
                          <a href={option.link}>{option.title}</a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-copyright text-xs mt-4">
        <span className="text-white">
          © 2022 Health Labs, Inc. All Rights Reserved.
        </span>
        <br />
        <span>
          <a
            href="/privacy"
            className="privacy mx-3 text-white mb-1 hover:text-bene-nav-hopt tracking-wide transition duration-150 ease-in-out">
            Privacy
          </a>
        </span>
        <span>
          <a
            href="/terms"
            className="terms mx-3 text-white mb-1 hover:text-bene-nav-hopt tracking-wide transition duration-150 ease-in-out">
            Terms
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
