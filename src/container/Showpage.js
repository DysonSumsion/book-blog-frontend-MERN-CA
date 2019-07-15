import React from 'react';
import IntroSection from '../components/IntroSection';
import SubheadSection from '../components/SubheadSection';
import CardDisplay from '../components/CardDisplay';

function ShowPage() {

  return (
    <>
    <div>
      <IntroSection 
        headingOne="Show Page"
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

export default ShowPage;