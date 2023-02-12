import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addUser' element={<AddUser/>} />
          <Route path='/editUser/:id' element={<EditUser/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
