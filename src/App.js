// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }


  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.includes(searchField)
    )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeHolder='seach a monster'
          HandleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    )
  };
}

export default App; 
