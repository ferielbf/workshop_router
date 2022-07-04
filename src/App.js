import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom';
import Details from './components/Details';
import Error from './components/Error';
import Date from './components/Date';
function App() {
  const [search,setSearch] = useState('')
  return (
    <div className="App">
      <NavBar setSearch={setSearch}/>

      <Routes>
        <Route index element={<Movie search={search} />} />
        <Route path='/movie/:id' element={<Details  />} />
        <Route path='/Date/:date' element={<Date />} />
        <Route path='/*' element={<Error />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
