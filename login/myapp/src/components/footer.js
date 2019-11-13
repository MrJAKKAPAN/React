import React from 'react'

class Footer extends React.Component {
    constructor() {
      super()
      this.state = {
        count: 0,
      }
    }
  
    handleClick = e => {
      this.setState({
        count: this.state.count + 1,
      })
    }
  
    render() {
      return (
        <div>
          <h1>Current Count: {this.state.count}</h1>
          <a href="#" onClick={this.handleClick}>
            Increment
          </a>;
        </div>
      )
    }
  }






// const Footer = () => {
//      return (
//          <h1>My Footer</h1>
//      )
// }
// // const Footer = ({ children }) => (
// //     <>
// //         {children}
// //         456
// //     </>
// // )

// export default Footer