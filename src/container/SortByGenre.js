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

    let description;
    let genre;

    switch (e.target.value){
      case "Australian Fiction":
        genre = "Australian Fiction genre"
        description = "Australian Fiction description"
        break;
      case "Contemporary Fiction":
        genre = "Contemporary Fiction"
        description = "Contemporary Fiction description"
        break;
      case "Crime":
        genre = "Crime"
        description = "Crime description"
        break;
      case "Essays":
        genre = "Essays"
        description = "Essays description"
        break;
      case "Graphic Novels":
        genre = "Graphic Novels"
        description = "Graphic Novels description"
        break;
      case "In Translation":
        genre = "In Translation"
        description = "In Translation description"
        break;
      case "Memoir":
        description = "Memoir"
        genre = "Memoir"
        break;
      case "Narrative Non-Fiction":
        genre = "Narrative Non-Fiction"
        description = "Narrative Non-Fiction description"
        break;
      case "Short stories":
        genre = "Short stories"
        description = "Short stories description"
        break;
      case "Young Adult (YA)":
        genre = "Young Adult (YA)"
        description = "Young Adult (YA) description"
        break;
      default:
          description = ""
          genre = ""

    }
    

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
