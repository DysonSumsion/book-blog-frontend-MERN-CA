import React from 'react';
import IntroSection from '../components/IntroSection';
import SubheadSection from '../components/SubheadSection';
import CardDisplay from '../components/CardDisplay';

function SortByGenre() {

  return (
    <>
    <div>
      <IntroSection 
        headingOne="Genre {title}" 
        headingTwo="Genre {secondary paragraph}"
      />
    </div>
    <div>
      <SubheadSection 
        heading="You might also like..." 
      />
    </div>
    <div>
      <CardDisplay />
    </div>
    </>
  );
}

export default SortByGenre;