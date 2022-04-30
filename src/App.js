import { Component, PureComponent } from 'react'
import ChildOne from './Child1'

// function App() {
//   return (
//     <div className="m-10">
//       <Todo />
//     </div>
//   );
// }

let interval

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  componentDidMount(){
    console.log('Component Mounted')
    interval = setInterval(() => {
      this.setState((prevState) => {
        return { value: 1 }
      })
    }, 5000)
  }

  componentDidUpdate() {
    console.log('Component Updated')
  }

  componentWillUnmount(){
    clearInterval(interval) 
  }

  handleClick = () => {
    console.log('parent clicked')
  }
  
  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log('Next Prop', nextProp)
  //   console.log('Next State' , nextState)

  //   return this.state.value === nextState.value ? false : true
  // }

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }))
  }

  render() {
    console.log('rendering app')
    return (
      <div className='flex pl-10 '>
        <div>{this.state.value}</div>
      </div>
    )
  }
}


export default App