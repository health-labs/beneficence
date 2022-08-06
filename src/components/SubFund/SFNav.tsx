import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavDetailsType {
  name: string;
  link: string;
}

function SFNav({ ctheme }: { ctheme: string }) {
  const [navDetails, setNavDetails] = React.useState<NavDetailsType[]>([]);
  const [selectedNav, setSelectedNav] = React.useState<string>('');
  const [showBox, setShowBox] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const findValueIndexInDict = (dict: NavDetailsType[], value: string) => {
    return dict.findIndex((item) => item.link === value);
  };

  useEffect(() => {
    const navD = [
      { name: 'Tests', link: 'tests' },
      { name: 'Medicines', link: 'medicines' },
      { name: 'Treatment', link: 'treatment' },
    ];
    setNavDetails(navD);
    setSelectedNav(navD[0].link);
  }, []);
  const goToSfTab = (link: string) => {
    navigate(`/campaign/${window.location.pathname.split('/')[2]}/${link}`);
    setSelectedNav(link);
  };
  useEffect(() => {
    const currSFundPathVal = window.location.pathname.split('/')[3];
    if (navDetails.length > 0) {
      if (findValueIndexInDict(navDetails, currSFundPathVal) === -1) {
        window.location.pathname = `campaign/${
          window.location.pathname.split('/')[2]
        }/${navDetails[0].link}`;
        setSelectedNav(navDetails[0].link);
      }
    }
  }, [selectedNav]);

  const showSf = (name: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    goToSfTab(name);
  };

  const hideNavOnBottom = () => {
    const docH = document.documentElement.scrollHeight;
    const footerH =
      document.getElementsByClassName('footer-container')[0].clientHeight;
    if (!docH || !footerH) {
      return;
    }
    const winScrollY = window.scrollY;
    const winH = window.innerHeight;
    const footerTop = docH - footerH;
    if (!winH || !winScrollY || !footerTop) {
      return;
    }
    const currScrollBtm = winScrollY + winH;

    if (currScrollBtm >= footerTop) {
      setShowBox(false);
    } else {
      setShowBox(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', hideNavOnBottom);
    return () => {
      window.removeEventListener('scroll', hideNavOnBottom);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      {navDetails && (
        <div
          className={`animate-${
            showBox ? 'entrfrmbtm' : 'exittobtm'
          } animate-exit p-2 h-14 rounded-2xl fixed bottom-12 z-30 flex shadow-c-sf justify-between min-w-320px bg-bene-f-${ctheme}`}>
          {navDetails.map((nav) => (
            <button
              type="button"
              key={nav.name}
              className={`p-2 py-1 text-white rounded-xl font-bold text-lg flex items-center justify-center ${
                nav.link === selectedNav
                  ? `text-bene-f-${ctheme} bg-white`
                  : 'hover:opacity-70 transition-all duration-200 ease-in-out'
              }
              
              `}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                showSf(nav.link, e)
              }>
              {nav.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SFNav;
