import React from "react";
import IntroSection from "../components/IntroSection";
import SubheadSection from "../components/SubheadSection";
import CardDisplay from "../components/CardDisplay";
import Card from "../components/Card";
import Footer from "../components/Footer";

class TopPicks extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null
  };

  async componentDidMount() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`);
      const data = await response.json();
      const { reviews } = data;
      // eslint-disable-next-line
      const topPicks = reviews.filter(review => {
        if (review.topPick === true) {
          return review;
        }
      });
      this.setState({
        data: { reviews: topPicks }
      });
    } catch (err) {
      console.log(err.message);
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

  render() {
    const { reviews } = this.state.data;
    if (!reviews) {
      return <h2>Loading.......</h2>;
    }
    const result = this.renderReviews(reviews);

    return (
      <div>
        <IntroSection
          headingOne="Wahoo, here are my Top Picks!"
          headingTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duislectus quam, vestibulum nec cursus non, sagittis nec tortor. Fusce lacinia mi nisi."
        />
        <SubheadSection heading="The wait is over, here they are..." />
        <CardDisplay result={result} />
        <Footer />
      </div>
    );
  }
}

export default TopPicks;
