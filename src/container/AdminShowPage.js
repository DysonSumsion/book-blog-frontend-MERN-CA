import React from "react";
import IntroSection from "../components/IntroSection";
import CardAdmin from "../components/CardAdmin";
import axios from "axios";
import FormAdd from "../container/FormAdd";

class AdminShowPage extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null,
  }

  async componentDidMount() {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`)
        // console.log(response)
        const data = await response.json()
        // console.log(data);
        this.setState({
          data: data
        })
        // console.log(data)
      } catch(err) {
        console.log(err)
      }
    }

  renderReviews = reviewList => {
    console.log("in render reviews");
    console.log(reviewList);
    return reviewList.map((review, index) => {
      return (
        < div className="reviewList" key={index}>
          <CardAdmin 
          title={review.title}
          author={review.author.name}
          review={review} 
          handleDeleteClick={this.handleDeleteClick}
          handleEditClick={this.handleEditClick}
          />
        </div>
      )
    })
  }

  handleEditClick=(review) => {
    console.log(review)
    
    this.setState({ adding: true })
    this.setState({ selectedReview: review })
    
    
    // const updatedReview = {
    //   title: this.state.title,
    //   author: this.state.author,
    //   review: this.state.review,
    //   publisher: this.state.publisher,
    //   yearPublished: this.state.yearPublished,
    //   genre: this.state.genre,
    //   isbn: this.state.isbn,
    //   linkToBuy: this.state.linkToBuy,
    //   topPick: this.state.topPick,
    //   seoKeyword: this.state.seoKeyword
    // };
    // console.log(updatedReview);


  }

  handleDeleteClick=(title) => { 
    const data = {data: {title}}

    try {
    axios.delete(`${process.env.REACT_APP_API_URL}/deleteReview`, data)
          .then((res)=>{
            console.log(res);
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
          <IntroSection headingOne="Admin Show Page" />
          {/* {result} */}
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
