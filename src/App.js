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

class Board extends Component {

  renderSquare = (value) => {
    return <Square value={this.props.squares[value]} onClick={() => this.props.clicked(value)}/>
  } 

  render() {

    return (

      <div className="board">
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

class App extends Component {
  
  state = {
    history : [{squares: Array(9).fill(null)}],
    XIsNext: false,
    stepNumber: 0
  }

  clicked = (value) => {
    console.log("clicked inside");
    const history = this.state.history.slice(0,this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) && squares[value]) {
      return;
    }
    squares[value] = this.state.XIsNext ? "X" : "O";
    this.setState(
      {history: history.concat([{squares: squares}]), XIsNext: !this.state.XIsNext, stepNumber: history.length});
  }

  jumpTo = (move) => {
    this.setState({stepNumber: move, XIsNext: (move % 2) === 0})
  }

  render() {

    let status;
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares.slice())

    if (winner) {
      status = "Winner is " + winner
    } else {
      status = "Next player:" + (this.state.XIsNext ? "X" : "O")
    }

    const moves = history.map((step,move) => {
      const desc = move ? 
      "Go to move" + move :
      "Go to game start";
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    })

    return(
      <div>
        <div>
          <Board squares={current.squares} clicked={this.clicked}/>
        </div>
        <div>{status}</div>
        <div>{moves}</div>
      </div>
    )
  }

}

export default App