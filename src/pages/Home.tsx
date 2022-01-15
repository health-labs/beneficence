import Header from "../components/Header";
import mainImg from "../assets/main-img.svg";

function Home() {
  return (
    <div className="main-outer">
      <div className="main-inner">
        <div className="main-inner-header row-2">
          <Header />
        </div>
        <div className="main-inner-body row">
          <div className="main-inner-heading row-2">
            <div className="main-inner-heading-text dark-blue">
              Medical Emergency?
            </div>
            <div className="main-inner-heading-text sky-blue">
              Get help now!
            </div>
          </div>
          <div className="main-inner-body-set row-2">
            <div className="main-inner-body-text row-2">
              <span>
                Start a fundraiser for yourself or your loved ones and get help
                for your medical emergency from a community that loves giving
                back.
              </span>
              <span className="get-started-txt mt-3">Get started now</span>
              <span className="buttons-main"></span>
            </div>
            <div className="main-inner-body-img row-2">
              <img src={mainImg}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
