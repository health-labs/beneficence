const MpCampaignCard = (props) => {
  const { imgSrc, title, description, link } = props;
  return (
    <div className="campaign-outer-box">
      <div className="campaign-img">
        <img src={imgSrc}></img>
      </div>
      <div className="campaign-body">
        <div className="campaign-title">{title}</div>
        <div className="dashed-separator"></div>
        <div className="campaign-description">{description}</div>
        <div className="campaign-progress">
          <div className="campaign-progress-percent">
            <div className="campaign-total-val"></div>
            <div className="campaign-progress-bar">
              <div className="campaign-progress-bar-inner"></div>
            </div>
          </div>
          <div className="interaction-opt">
            <div className="campaign-share"></div>
            <div className="campaign-angels"></div>
            <div className="campaign-donate"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MpCampaignCard;
