import React from 'react';
import IntroSection from '../components/IntroSection';
import SubheadSection from '../components/SubheadSection';
import CardDisplay from '../components/CardDisplay';

function HomePage() {
  return (
    <>
    <div>
      <IntroSection 
        headingOne="Hi, I’m Jaclyn and I love to read... a lot." 
        headingTwo="My friends joke that I can read two books at the same time, one with each eye!  I promise I can’t. Join me here to something something, call to action."
      />
    </div>
    <div>
      <SubheadSection 
        heading="My most recent reviews..." 
      />
    </div>
    <div>
      <CardDisplay />
    </div>
    </>
  );
}

export default HomePage;

// class Homepage extends React.Component {
//   state = { data: null }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`)
  //     console.log(response)
  //     const data = await response.json()
  //     console.log(data)
  //     this.setState({
  //       data: data
  //     })
  //     // console.log(data)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  // render() {
  //   const { data } = this.state
  //   console.log(data)
  //   if (!data) {
  //     return <h1>I am the homepage, there is no data</h1>
  //   } else {
  //     // console.log(data)
  //     return (
  //       <div>
  //         <h1>Home page!</h1>
  //       </div>
  //     )
  //   }
  // }
  // }