import React from 'react';

class Homepage extends React.Component {
  state = { data: null }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5500/')
      console.log(response)
      const data = await response.json()
      
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
      return <h1>No data</h1>
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