import React from 'react';
import IntroSection from '../components/IntroSection';
import SubheadSection from '../components/SubheadSection';
import CardDisplay from '../components/CardDisplay';

function TopPicks() {

  return (
    <>
    <div>
    <IntroSection 
      headingOne="Wahoo, here are my Top Picks!" 
      headingTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duislectus quam, vestibulum nec cursus non, sagittis nec tortor. Fusce lacinia mi nisi, vestibulum congue diam."
    />
    </div>
    <div>
      <SubheadSection 
        heading="The wait is over, here they are..." 
      />
    </div>
    <div>
      <CardDisplay />
    </div>
    </>
  );
}

export default TopPicks;