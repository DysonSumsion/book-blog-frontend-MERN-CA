import React from "react";
import IntroSection from "../components/IntroSection";
import CardAdmin from "../components/CardAdmin";
import axios from "axios";
import FormAdd from "../container/FormAdd";
import './AdminShowPage.css';
import {Link} from 'react-router-dom';

class AdminShowPage extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null,
    id: ""
  }

  async componentDidMount() {

    try {
    const token = localStorage.getItem("token");
    const headers = {token: token}
    const response1 = await axios.get(`${process.env.REACT_APP_API_URL}/protected/reviews`, {headers})
    const data1 = response1.data
    
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`)
    // console.log(response);
    // const data = await response.json()

    this.setState({
      data: data1
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
          reviewObject={review}
          />
        </div>
      )
    })
  }

  handleEditClick=(review) => {
    console.log(review);
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

  handleDeleteClick= async (title) => { 
    const data = {data: {title}}
    const token = localStorage.getItem("token");
    console.log(token);
    const headers = {token: token}
    // const headers = {headers: {token: token}}

    await axios.delete(`${process.env.REACT_APP_API_URL}/protected/deleteReview`, {data, headers})
          .then((res)=>{
            console.log(res);
            alert("Review Deleted")
            window.location.reload()
          })
          .catch((err) => {
            console.log(err.response)
          })
  }

  deleteToken= (e) => {
    // e.preventDefault();
    window.localStorage.removeItem("token");
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

          {/* {result} */}
          <Link to = '/adminjaclyn' onClick={this.deleteToken}> Logout </Link>
          <Link to = '/auth/adminaddreview'> add review </Link>

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
