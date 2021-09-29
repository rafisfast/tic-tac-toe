import React, {Component} from 'react'
import Table from './tables'

class App extends Component {

  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Accountant'
      },
      {
        name: 'John',
        job: 'Musician'
      }
    ]
  }

  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {

    /*const characters = [
      {
        name: 'Charlie',
        job:  'Accountant',
      },
      {
        name: 'John',
        job:  'Accountant'
      }
    ]*/

    const { characters } = this.state

    return (

      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      </div>

    )
  }
}

export default App