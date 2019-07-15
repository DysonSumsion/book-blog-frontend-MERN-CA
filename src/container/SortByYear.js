import React from 'react';
import IntroSection from '../components/IntroSection';
import SubheadSection from '../components/SubheadSection';
import CardDisplay from '../components/CardDisplay';

function SortByYear() {

  return (
    <>
    <div>
      <IntroSection 
        headingOne="{Year}, what a year!" 
        headingTwo="Year {secondary paragraph}"
      />
    </div>
    <div>
      <SubheadSection heading="You might also like..." />
    </div>
    <div>
      <CardDisplay />
    </div>
    </>
  );
}

export default SortByYear;