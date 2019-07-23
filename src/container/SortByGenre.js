import React from "react";
import IntroSection from "../components/IntroSection";
import SubheadSection from "../components/SubheadSection";
import CardDisplay from "../components/CardDisplay";
import Card from "../components/Card";

class SortByGenre extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null,
    description: "Lotus ipsm",
    genre: "Welocme to Genre Page"
  };

  async componentDidMount() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`);
      const data = await response.json();
      this.setState({
        data: data
      });
    } catch (err) {
      console.log(err);
    }
  }

  renderReviews = reviewList => {
    return reviewList.map((review, index) => {
      return (
        <div className="reviewList" key={index}>
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
      );
    });
  };

  sortByGenre= (e) => {
    const sortGenre = e.target.value
    console.log("In sort by memoir");
    const { reviews } = this.state.data;



//     switch (e.target.value){
//       case "Australian Fiction":
//       description = "Australian Fiction",
//       genre = "Australian Fiction";
//       break;





//     }
//     let color;
//   let message;
//   switch (props.status){
//   case 1:
//     color = "alert box1"
//     message = "This is a standard alert box"
//     break;
//   case 2:
//     color = "alert box2"
//     message = "This is an info box"
//     break;
//   case 3:
//     color = "alert box3";
//     message = "This is an error message box"
//     break;
//   case 4:
//     color = "alert box4"
//     message = "This is a success message box"
//     break;
//   default:
//     color = "alert box0";
//     message = "This is a status message box"
// }





    const description = "Memoir";
    const genre = "Memoir";
    

    const foundData = reviews.filter(item => {
      const review = item.genre;
      let reviewArray = [];
      reviewArray = review.filter(nope => {
        if (nope.name === sortGenre) {
          return true;
        } else {
          return false;
        }
      });
      if (reviewArray.length > 0) {
        return true;
      } else {
        return false;
      }
    });
    console.log(foundData);

    // this.setState({ description: description, genre: genre, data: {reviews: foundData}, foundData: {reviews: foundData}});
    this.setState({ description: description, genre: genre, foundData: {reviews: foundData}});
  };




  render() {
    // console.log(this.state.data);
    const { data, foundData } = this.state;
    let reviews;
    if (!data) {
      return <h2>Loading.......</h2>;
    }
    if (foundData) {
      reviews = foundData.reviews
    } else {
      reviews = data.reviews 
    }
    const result = this.renderReviews(reviews);

    return (
      <>
        <div>
          <IntroSection
            headingOne={this.state.genre}
            headingTwo={this.state.description}
          />
        </div>
        <div>
          <button onClick={this.sortByGenre} className="" value="Australian Fiction">
            {" "}
            Australian Fiction
          </button>
          <button onClick={this.sortByGenre} className="" value="Contemporary Fiction">
            {" "}
            Contemporary Fiction
          </button>
          <button onClick={this.sortByGenre} className="" value="Crime">
            {" "}
            Crime
          </button>
          <button onClick={this.sortByGenre} className="" value="Essays">
            {" "}
            Essays
          </button>
          <button onClick={this.sortByGenre} className="" value="Graphic Novels">
            {" "}
            Graphic Novels
          </button>
          <button onClick={this.sortByGenre} className="" value="In Translation">
            {" "}
            In Translation
          </button>
          <button onClick={this.sortByGenre} className="" value="Memoir">
            {" "}
            Memoir
          </button>
          <button onClick={this.sortByGenre} className="" value="Narrative Non-Fiction">
            {" "}
            Narrative Non-Fiction
          </button>
          <button onClick={this.sortByGenre} className="" value="Short stories">
            {" "}
            Short stories
          </button>
          <button onClick={this.sortByGenre} className="" value="Young Adult (YA)">
            {" "}
            Young Adult (YA)
          </button>

          {/* <SubheadSection heading="You might also like..."  /> */}
        </div>
        <div>
          <CardDisplay result={result} />
        </div>
      </>
    );
  }
}

export default SortByGenre;
