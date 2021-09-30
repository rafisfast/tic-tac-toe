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

function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i = 0; i<lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}

class App extends Component {

  state = {
    squares: Array(9).fill(null),
    XIsNext: false
  }

  clicked = (value) => {
    console.log("clicked inside");
    const sq = this.state.squares.slice();
    if (calculateWinner(sq) && sq[value]) {
      return;
    }
    sq[value] = this.state.XIsNext ? "X" : "O";
    this.setState({squares: sq, XIsNext: !this.state.XIsNext});
  }

  renderSquare = (value) => {
    return <Square value={this.state.squares[value]} onClick={() => this.clicked(value)}/>
  } 

  render() {

    let status;
    const winner = calculateWinner(this.state.squares.slice())

    if (winner) {
      status = "Winner is " + winner
    } else {
      status = "Next player:" + (this.state.XIsNext ? "X" : "O")
    }

    return (

      <div className="app-container">
        <tr>{status}</tr>
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