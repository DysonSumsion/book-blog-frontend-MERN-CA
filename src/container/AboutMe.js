import React from 'react';
import IntroSectionFlexi from '../components/IntroSectionFlexi';
import Jaclyn from '../Jaclyn.jpg';
import './AboutMe.css'; 

function AboutMe() {

  return (
    <>
    <div className="containerSecondary" style={{ backgroundColor: '#FFFCAF' }}>
      <IntroSectionFlexi 
        headingOne="A little bit about me..." 
        headingTwo="I'm Jaclyn and I love to read new releases from all genres. "
      />
      <div className="bioSection">
      <img src={Jaclyn} alt="Jaclyn" />
        <p>Lorem ipsum dolor amet hell of readymade affogato raclette stumptown, scenester messenger bag church-key austin gastropub occupy. Affogato everyday carry locavore selvage tote bag cold-pressed venmo wayfarers pork belly. Flannel celiac chia, palo santo bicycle rights air plant leggings succulents crucifix. 90's DIY kinfolk, organic farm-to-table mixtape adaptogen fingerstache. Drinking vinegar adaptogen vice literally. Woke pinterest franzen asymmetrical marfa, art party kale chips paleo beard farm-to-table cronut food truck.</p>
        <p>90's unicorn bespoke tote bag retro hot chicken viral jean shorts. Echo park unicorn occupy, 90's aesthetic normcore gastropub skateboard kogi lyft lo-fi marfa. Listicle literally drinking vinegar banjo. Keytar affogato gluten-free authentic lumbersexual bespoke wolf.</p>
      </div>
    </div>
    </>
  );
}

export default AboutMe;