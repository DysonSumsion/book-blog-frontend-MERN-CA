import React from 'react';
import IntroSection from '../components/IntroSection';
import SubheadSection from '../components/SubheadSection';
import CardDisplay from '../components/CardDisplay';
import Card from "../components/Card";

class SortByYear extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null,
  }

  async componentDidMount() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`)
      const data = await response.json()
      this.setState({
        data: data
      })
    } catch(err) {
      console.log(err)
    }
  }

  renderReviews = reviewList => {
    return reviewList.map((review, index) => {
      return (
        < div className="reviewList" key={index}>
          <Card 
          title={review.title}
          author={review.author.name}
          review={review.author.review}
          publisher={review.publisher.name}
          yearPublished={review.yearPublished}
          isbn={review.isbn}
          linkToBuy={review.linkToBuy}
          genre={review.genre.name}
          topPick={review.topPick}
          />
        </div>
      )
    })
  }

  render() {
    // console.log(this.state);
  const { reviews } = this.state.data
  if (!reviews) {
    return <h2>Loading.......</h2>
  } 
  const result = this.renderReviews(reviews)

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
          <CardDisplay result={result} /> 
        </div>
      </> 
    );
  }
}

export default SortByYear;