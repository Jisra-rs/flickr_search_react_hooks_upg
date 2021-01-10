import HomeHeader from './components/HomeHeader';
// import SearchTool from './components/SearchTool';
// import PicturesResultsContext from './context/PicturesResultsContext';
// import PaginationResults from './components/PaginationResults';
import HomeContainer from './components/HomeContainer';
// import PictureModalView from './components/PictureModalView';

import './App.css';

function App() {
  return (
    // <PicturesResultsContext>
      <div className="App">
        <HomeContainer/>
{/*         <SearchTool/>
        <PaginationResults/>
      <PicturesResult/> 
        <HomeContainer/> */}
      </div>
    // </PicturesResultsContext>
  );
}

export default App;
