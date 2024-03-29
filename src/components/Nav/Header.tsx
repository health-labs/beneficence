import { Disclosure } from '@headlessui/react';
import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../../assets/logo.svg';
import SignIn from '../Signin/SignIn';
import logoSm from '../../assets/bene-logo-solo.svg';
import logoWt from '../../assets/logo-white.svg';

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
};

const navOptions = [
  {
    item: 'Start fundraising',
    active: false,
    link: '/start-a-fund',
  },
  {
    item: 'Explore',
    active: false,
    link: '/explore',
  },
  {
    item: 'Learn',
    active: false,
    link: '/learn',
  },
  {
    item: 'About',
    active: false,
    link: '/about',
  },
];

function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-white navbr sticky top-0 left-0 w-full h-auto z-10">
      {({ open }) => (
        <div className={`${open ? 'bg-bene-dark-blue' : ''}`}>
          <div className="lg:max-w-90rem mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:to-bene-dark-blue hover:bg-bene-on-hvr focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <a
                    href="/"
                    className={`${open ? 'px-2 py-1 rounded-lg' : ''}`}>
                    <img
                      className={`block lg:hidden h-8 w-auto transform hover:rotate-360 transition duration-1000 ease-in ${
                        open ? 'rotate-360' : 'rotate-0'
                      }`}
                      src={open ? logoWt : logoSm}
                      alt="Beneficence"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={logo}
                      alt="Beneficence"
                    />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navOptions.map((opt) => (
                      <a
                        key={opt.item}
                        href={opt.link}
                        className={classNames(
                          opt.active
                            ? 'text-blue-900'
                            : 'text-bene-nav-blue hover:text-blue-900',
                          'px-3 py-2 rounded-md text-xl font-semibold transform hover:scale-105 transition duration-450 ease-in'
                        )}>
                        {opt.item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="sign-in-btn absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <SignIn />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col text-left">
              {navOptions.map((opt) => (
                <Disclosure.Button
                  key={opt.item}
                  as="a"
                  href={opt.link}
                  className={classNames(
                    opt.active
                      ? ' text-bene-nav-blue'
                      : ' text-white hover:opacity-95 hover:bg-bene-on-hvr',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}>
                  {opt.item}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default Header;
