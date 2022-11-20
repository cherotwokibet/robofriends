import './App.css';
import Card from './Card';
import 'tachyons'
import {robots} from './robots'
import CardList from './CardList';
import SearchBox from './SearchBox';
import { useState } from 'react';

function App() {
  // const state = {
  //   robots: robots,
  //   searchField : ''
  // }
  const [robos,setRobots] = useState(robots);
  const [searchfield,setSearchField] = useState('');

  const onSearchChange = (e) => {
    // console.log(e.target.value)
    
    setSearchField(e.target.value)
    // console.log(filteredRobots)
  }
  const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchfield.toLowerCase())
  })


  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <CardList robots={filteredRobots}/>
    </div>
  );
}

export default App;
