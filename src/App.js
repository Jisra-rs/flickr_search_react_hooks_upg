import HomeHeader from './components/HomeHeader';
import SearchTool from './components/SearchTool';
import PicturesResult from './components/PicturesResults';
import PaginationResults from './components/PaginationResults';
import HomeContainer from './components/HomeContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <HomeHeader/>
      <SearchTool/>
      <PaginationResults/>
      <PicturesResult/>
      <HomeContainer/>
    </div>
  );
}

export default App;
