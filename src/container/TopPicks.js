import React from 'react';
import IntroSection from '../components/IntroSection';
import SubheadSection from '../components/SubheadSection';
import CardDisplay from '../components/CardDisplay';
import Card from "../components/Card";

class TopPicks extends React.Component {
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

  //   filterReviews = reviewList => {
  //   const topPicks = reviewList.filter((review) => {
  //   if (review.topPick === true) {
  //     return (
  //       < div className="reviewList">
  //       title={review.title}
  //       author={review.author.name}
  //       review={review.review}
  //       publisher={review.publisher.name}
  //       yearPublished={review.yearPublished}
  //       isbn={review.isbn}
  //       linkToBuy={review.linkToBuy}
  //       genre={review.genre.name}
  //       topPick={review.topPick}
  //     </div>
  //     )
  //   }
  //   })
  //   console.log(topPicks)
  // }

  render() {
  const { reviews } = this.state.data
  console.log(reviews)
  if (!reviews) {
    return <h2>Loading.......</h2>
  } 
  const result = this.renderReviews(reviews)
  

    return (
      <>
        <div>
          <IntroSection 
          headingOne="Wahoo, here are my Top Picks!" 
          headingTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duislectus quam, vestibulum nec cursus non, sagittis nec tortor. Fusce lacinia mi nisi."
          />
        </div>
        <div>
          <SubheadSection heading="The wait is over, here they are..." />
        </div>
        <div>
          <CardDisplay result={result} /> 
        </div>
      </> 
    );
  }
}

export default TopPicks;

