import './App.css';
import Card from './Card';
import 'tachyons'
import {robots} from './robots'
import CardList from './CardList';

function App() {
  return (
    <div>
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
