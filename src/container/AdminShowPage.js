import React from "react";
import IntroSection from "../components/IntroSection";
import CardAdmin from "../components/CardAdmin";
import axios from "axios";
import FormAdd from "../container/FormAdd";
import './AdminShowPage.css';

class AdminShowPage extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null,
    id: ""
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
    console.log("in render reviews");
    // console.log(reviewList);
    return reviewList.map((review, index) => {
      return (
        < div className="reviewList" key={index}>
          <CardAdmin 
          title={review.title}
          author={review.author.name}
          review={review.review}
          publisher={review.publisher.name}
          yearPublished={review.yearPublished}
          isbn={review.isbn}
          linkToBuy={review.linkToBuy}
          genre={review.genre.name}
          topPick={review.topPick}
          url={review.url}
          handleDeleteClick={this.handleDeleteClick}
          handleEditClick={this.handleEditClick}
          />
        </div>
      )
    })
  }

  handleEditClick=(review) => {
    const id = review._id
    this.setState({ adding: true, selectedReview: review, id: id })
  }

  refresh = (reviewsData)  => {
    console.log(reviewsData);
    const reviews = reviewsData.data
    console.log(reviews);
    this.setState({
      data: reviews,
      adding: false
    })
  }

  handleDeleteClick=(title) => { 
    const data = {data: {title}}
    try {
    axios.delete(`${process.env.REACT_APP_API_URL}/deleteReview`, data)
          .then((res)=>{
            console.log(res);
            alert("Review Deleted")
            window.location.reload()
          })
    } catch(err){
      console.log(`Error deleting with error: ${err}`);
    }
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
          <IntroSection headingOne="Hi Jaclyn!" 
          headingTwo="Welcome to your dashboard, here are all of your reviews..." />
          <div className="showreviews">
          {this.state.adding ? 
          <FormAdd
            title={this.state.selectedReview.title} 
            author={this.state.selectedReview.author.name}
            review={this.state.selectedReview.review}
            publisher={this.state.selectedReview.publisher.name}
            yearPublished={this.state.selectedReview.yearPublished}
            isbn={this.state.selectedReview.isbn}
            linkToBuy={this.state.selectedReview.linkToBuy}
            genre={this.state.selectedReview.genre.name}
            topPick={this.state.selectedReview.topPick}
            seoKeyword={this.state.selectedReview.seoKeyword}
            url={this.state.selectedReview.url}
            id={this.state.id}
            refresh={this.refresh}
            adding={this.state.adding}
            /> 
            : <div>{result}</div>
            }
          </div>
        </div>
      </>
    );
  }
}

export default AdminShowPage;
