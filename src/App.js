import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home'
import Profile from './Component/Profile'
import CardList from './Component/CardList/CardListComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchField from'./Component/SearchComponent/SearchField'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ monster: user }))
  }
  handleChange=(e)=>{
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div>
        <SearchField placeHolder="Search monster" handlerChange={this.handleChange}/>
        <br />
        <CardList monster={filteredMonster} />
        <Profile text="profile function component" />
      </div>
    );
  }
}
export default App;
