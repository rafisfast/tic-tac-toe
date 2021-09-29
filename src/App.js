import React, {Component} from 'react'

class Square extends Component {

  state = {value: null}

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}> 
        {this.props.value}
      </button>
    )
  }
}

class App extends Component {

  state = {
    squares: Array(9).fill(null)
  }

  clicked = (value) => {
    console.log("clicked inside");
    const sq = this.state.squares.slice();
    sq[value] = "X";
    this.setState({squares: sq});
  }

  renderSquare = (value) => {
    return <Square value={this.state.squares[value]} onClick={() => this.clicked(value)}/>
  } 

  render() {

    return (

      <div className="app-container">
        <tr>Next player: X</tr>
        <tr>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </tr>
        <tr>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </tr>
        <tr>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </tr>
      </div>

    )
  }
}

export default App