import React from "react";
import IntroSection from "../components/IntroSection";
import CardAdmin from "../components/CardAdmin"

class AdminShowPage extends React.Component {
  state = {
    data: ""
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
          />
          <button onClick={() => this.handleDeleteClick(review.title)} className="delete"> Delete</button>
        </div>
      )
    })


  }

  handleDeleteClick=(review) => {
    console.log(review)


    
    
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
          {result}
          <div className="showreviews">
          
          </div>
        </div>

        

      </>
    );
  }
}

export default AdminShowPage;