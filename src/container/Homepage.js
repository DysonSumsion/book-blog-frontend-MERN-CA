import React from 'react';

class Homepage extends React.Component {
  state = { data: null }

  async componentDidMount() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`)
      console.log(response)
      const data = await response.json()
      console.log(data)
      this.setState({
        data: data
      })
      // console.log(data)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { data } = this.state
    console.log(data)
    if (!data) {
      return <h1>I am the homepage, there is no data</h1>
    } else {
      // console.log(data)
      return (
        <div>
          <h1>Home page!</h1>
        </div>
      )
    }
  }
}

export default Homepage;