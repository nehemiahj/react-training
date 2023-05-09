import { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      nextPage:false
    }
  }

  btnClicked = (value) => {
    if (value === "Inreament") {
      this.setState({
        count: this.state.count + 1
      })
    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  componentWillMount(){
    console.log("componentWillMount")
  }

  componentDidMount(){
    console.log("component did mount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  nextPage = () => {
    this.setState({
      nextPage: !this.state.nextPage
    })
  }
  

  render() {
    console.log("render")
    return (
      <>
        {
          !this.state.nextPage ? 
          <div className="App" >
        {this.state.count > 5 ? <label>Count: {this.state.count}</label> : ""}
        <br />
        <Button name="Inreament" btnClick={this.btnClicked} />
        <Button name="Decreament" btnClick={this.btnClicked} />

        <Button name="Next Page" btnClick={this.nextPage} />
      </div > 
      : <div>THis is new screen</div>
        }
      </>
    )
  }
}

export default App;
