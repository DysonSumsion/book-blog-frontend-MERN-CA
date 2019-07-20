import React from 'react';
import IntroSection from '../components/IntroSection';
import SubheadSection from '../components/SubheadSection';
import CardDisplay from '../components/CardDisplay';
import Card from "../components/Card";
import axios from 'axios'

class ShowPage extends React.Component {
  state = {
    allReviews: [],
    searchTerm: '',
    matchReviews: []
  }
// Books Grid
  renderReviews = reviewList => {
    return reviewList.map((review, index) => {
      return (
        < div className="reviewList" key={index}>
          <Card 
          title={review.title}
          author={review.author.name}
          review={review.review}
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

// Jumbotron 
  renderResult = reviewList => {
    return reviewList.map((review, index) => {
      return (
        <div key={index}>
        <h2>{review.title}</h2>
        </div>
      )
    })
  }


  componentDidMount() {
    console.log("showPage")
    this.getReviews();
 }

 getReviews = async () => {
   let res = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
   let { reviews } = res.data;
   let found = [];
   let searchTerm = window.location.href.split('/').pop();
   if (searchTerm.length > 0) {
    found = reviews.filter(function(item) {
      return item.title.toLowerCase().match( searchTerm );
    });
  }
  console.log(reviews.length)
   this.setState({ allReviews: reviews, matchReviews: found });
 }

 render() {
    console.log('display reviews')
    // console.log(this.state.allReviews)
    const reviews = this.state.allReviews
    console.log(reviews)
    if (!reviews || reviews.length === 0) {
      return <h2>Loading.......</h2>
    } 
    
    const result = this.renderResult(reviews)
    return (
      <>
        <div>
          <IntroSection 
          headingOne="Found" 
          />
          <div>
              {result}
            </div>
        </div>
        {this.state.matchReviews && this.state.matchReviews.length && 
          <>
            
          </>
        }
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

export default ShowPage;