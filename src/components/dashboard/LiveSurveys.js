import React from 'react';
import LiveSurveyItems from './LivesurveyItems';

const LiveSurveys = ({ forms }) => {
  return (
    <div>
      <LiveSurveyItems survey={forms} />
    </div>
  );
};

export default LiveSurveys;
