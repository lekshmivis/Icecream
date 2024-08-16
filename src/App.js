import logo from './logo.svg';
import './App.css';
import AddIcecream from './Components/AddIcecream';
import SearchIcecream from './Components/SearchIcecream';
import DeleteIcecream from './Components/DeleteIcecream';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Router>
    <Route path='/' element={<AddIcecream/>}/>
    <Route path='/search' element={<SearchIcecream/>}/>
    <Route path='/delete' element={<DeleteIcecream/>}/>
   </Router>
   </BrowserRouter>
  );
}

export default App;
