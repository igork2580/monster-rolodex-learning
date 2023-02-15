import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { useState, useEffect } from 'react';

const App = () => {
  console.log("render")
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users)
  );

  const onSearchChange = (event)=>{
    console.log(event)
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  return (
    <div className="App">
        <h1 className="app-title"> Monsters Rolodex</h1>
        <SearchBox 
          className='monsters-search-box'
          onChangeHandler = {onSearchChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
  )
}

/* class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state)
      }
      ))
  }

  onSearchChange = (event)=>{
    console.log(event)
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchField}
    })
  }

  render() {
    console.log("render")
    const {monsters, searchField} = this.state
    const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex</h1>
        <SearchBox 
          className='monsters-search-box'
          onChangeHandler = {onSearchChange} 
        />
        <CardList  monsters={filteredMonsters} /> 
      </div>
    );
  }
} */
//osijek,15,10, 17:30 20:00
export default App;
