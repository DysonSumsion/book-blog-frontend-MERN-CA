import React from 'react';
import IntroSectionShow from '../components/IntroSectionShow';
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

// Show one book in intro header 
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

    this.setState({matchReviews: found });
    if(found.length > 0)
      this.setState({displayHeader:<IntroSectionShow 
      headingTitle={found[0].title} 
      headingAuthor={found[0].author.name}
      headingReview={found[0].review} 
      bookImage={found[0].url} 
      headingPublisher={found[0].publisher.name} 
      value={found[0]}
      />});
    else         
      this.setState({displayHeader:<IntroSectionShow 
      headingOne="No matching books found"
      />});
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
          </div>
          <div>
            <SubheadSection heading="You might also like..." />
          </div>
          <div>
            <CardDisplay result={this.renderResult(this.state.allReviews)} /> 
          </div>
        </> 
      );
      }
  }
}

export default ShowPage;