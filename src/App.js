import React, { Component } from "react";
import {SearchBox} from './Components/SearchBox/Searchbox.component';
import {CardList} from "./Components/Card-List/Card-List.component";
import "./App.css";



class App extends Component{
  state={
    monsters : [],
    searchField: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
    .catch(err => console.log('error'))
  }

  render(){
    const {monsters,searchField} = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
      
      <div className='App'>
        <h1>Monsters</h1>
        <SearchBox 
          placeholder="search monsters"
          handeleChange= {e =>
            this.setState({searchField: e.target.value})
           
          }
            
        />
        <CardList monsters={filterMonsters} /> 
           
      </div>
    );
  }
}


export default App;