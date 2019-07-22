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
    matchReviews: [],
    displayHeader:""
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
    console.log(reviewList)
    let mp = reviewList.map((review, index,reviewList) => {
      return (
        <div key={index}>
        <h2>{review.title}</h2>
        </div>
      )
    });
    console.log(mp)
    return mp;

  }
  
  

  componentDidMount() {
    this.getReviews();
 }

 replaceSpecialCharsInURL(str) {
  str = str.replace("%20", " ");
  return str;
 }
 
 getReviews = async () => {
   let res = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
   let reviewsAll = res.data.reviews
   this.setState({ allReviews: reviewsAll});
   //console.log(reviewsAll)
   let found = [];
   let searchTerm = window.location.href.split('/').pop();
   searchTerm = this.replaceSpecialCharsInURL(searchTerm);
   searchTerm = searchTerm.toLowerCase();
   console.log(searchTerm)
   if (searchTerm.length > 0) {
    found = reviewsAll.filter(function(item) {
      return item.title.toLowerCase().match( searchTerm );
    });
    }
    console.log(found);

  this.setState({matchReviews: found });
  if(found.length > 0)
      this.setState({displayHeader:<IntroSection 
      headingOne="Found" value={found}
      />});
  else         this.setState({displayHeader:<IntroSection 
    headingOne="No matching books found"
    />});

  console.log(this.state.matchReviews)
  console.log(reviewsAll.length)
 }

 displayHeader(matchReviews) {


 }

 render() {
    console.log('display reviews')
    //console.log(this.state.allReviews)
    const reviews = this.state.allReviews 
    console.log(reviews)
    console.log(reviews.length)
    if (!reviews || reviews.length === 0) {
      return <h2>Loading.......</h2>
    } else {
      const result = this.renderResult(reviews)
      console.log(result)
      return (
        <>
          <div> 
            {this.state.displayHeader}            
            <div>
              {this.renderResult(this.state.matchReviews)}
              </div>
          </div>
          <div>
            <SubheadSection heading="You might also like..." />
          </div>
          <div>
            <CardDisplay result={this.renderResult(this.state.matchReviews)} /> 
          </div>
        </> 
      );
      }
  }
}

export default ShowPage;