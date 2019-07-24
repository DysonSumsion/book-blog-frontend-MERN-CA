import React from "react";
import IntroSectionFlexi from "../components/IntroSectionFlexi";
import SubheadSection from "../components/SubheadSection";
import CardDisplay from "../components/CardDisplay";
import Card from "../components/Card";
import Footer from '../components/Footer';
import './SortByGenre.css';

class SortByGenre extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null,
    description: "Select from the list below to see my reviews by genre.",
    genre: "By Genre! You've come to the right place..."
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
            url={review.url}
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
        genre = "My Australian Fiction reviews..."
        // description = "Lorem ipsum dolor sit amet, sed semper eros varius natoque penatibus magnis dis parturient montes, nascetur ridiculus."
        break;
      case "Contemporary Fiction":
        genre = "My Contemporary Fiction reviews..."
        // description = "Lorem ipsum dolor sit amet, sed semper eros varius natoque penatibus magnis dis parturient montes, nascetur ridiculus."
        break;
      case "Crime":
        genre = "My Crime reviews..."
        // description = "Lorem ipsum dolor sit amet, sed semper eros varius natoque penatibus magnis dis parturient montes, nascetur ridiculus."
        break;
      case "Essays":
        genre = "My Essay reviews..."
        // description = "Lorem ipsum dolor sit amet, sed semper eros varius natoque penatibus magnis dis parturient montes, nascetur ridiculus."
        break;
      case "Graphic Novels":
        genre = "My Graphic Novel reviews..."
        // description = "Graphic Novels description"
        break;
      case "In Translation":
        genre = "My In Translation reviews..."
        // description = "In Translation description"
        break;
      case "Memoir":
        description = "Memoir"
        genre = "My Memoir reviews..."
        break;
      case "Narrative Non-Fiction":
        genre = "My Narrative Non-Fiction reviews..."
        // description = "Narrative Non-Fiction description"
        break;
      case "Short stories":
        genre = "My Short Story reviews..."
        // description = "Short stories description"
        break;
      case "Young Adult (YA)":
        genre = "My Young Adult (YA) reviews..."
        // description = "Young Adult (YA) description"
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
        <div className="containerGenre" >
          <IntroSectionFlexi
            headingOne={this.state.genre}
            headingTwo={this.state.description}
          />
        </div>
        <div className="genreButtonContainer">
          <div className="genreButtonContainerLeft">
            <button onClick={this.sortByGenre} className="genreButton" value="Australian Fiction" textStyle={{ fontSize: 15, textAlign: 'center', paddingLeft:35, fontWeight:'500', fontFamily:'Lato' }}>
              {" "}
              Australian Fiction
            </button>
            <button onClick={this.sortByGenre} className="genreButton" value="Contemporary Fiction">
              {" "}
              Contemporary Fiction
            </button>
            <button onClick={this.sortByGenre} className="genreButton" value="Crime">
              {" "}
              Crime
            </button>
            <button onClick={this.sortByGenre} className="genreButton" value="Essays">
              {" "}
              Essays
            </button>
            <button onClick={this.sortByGenre} className="genreButton" value="Graphic Novels">
              {" "}
              Graphic Novels
            </button>
          </div>
          <div className="genreButtonContainerRight">
            <button onClick={this.sortByGenre} className="genreButton" value="In Translation">
              {" "}
              In Translation
            </button>
            <button onClick={this.sortByGenre} className="genreButton" value="Memoir">
              {" "}
              Memoir
            </button>
            <button onClick={this.sortByGenre} className="genreButton" value="Narrative Non-Fiction">
              {" "}
              Narrative Non-Fiction
            </button>
            <button onClick={this.sortByGenre} className="genreButton" value="Short stories">
              {" "}
              Short stories
            </button>
            <button onClick={this.sortByGenre} className="genreButton" value="Young Adult (YA)">
              {" "}
              Young Adult (YA)
            </button>
          </div>
        </div>
          <SubheadSection />
          <CardDisplay result={result} />
          <Footer />
      </>
    );
  }
}

export default SortByGenre;
