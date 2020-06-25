import React, { useState } from 'react';
import DraftSurveyItems from './DraftsurveyItems';

const DraftSurveys = ({ forms }) => {
  return (
    <div>
      <DraftSurveyItems survey={forms} />
    </div>
  );
};

export default DraftSurveys;
