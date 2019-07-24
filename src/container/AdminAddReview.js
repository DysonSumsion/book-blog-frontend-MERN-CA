import React from "react";
import IntroSectionFlexi from "../components/IntroSectionFlexi";
import FormAdd from "../container/FormAdd";

class AdminAddReview extends React.Component {

  render() {

    return (
      <div className="containerSecondary" style={{ backgroundColor: '#E7FBAD' }}>
        <IntroSectionFlexi
          headingOne="Time to create a new review..." />
        <FormAdd {...this.props}/>
      </div>
    );
  }
}

export default AdminAddReview;