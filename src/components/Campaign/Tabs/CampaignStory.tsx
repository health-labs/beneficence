import React from 'react';

interface StoryProps {
  story: string;
}

function CampaignStory({ story }: StoryProps): JSX.Element {
  return (
    <div className="text-left mt-2">
      <div className="text-lg font-semibold py-2">Campaign Story</div>
      <p>{story}</p>
    </div>
  );
}

export default CampaignStory;
