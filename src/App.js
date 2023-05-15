import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import './App.css'
import AllComponent from './components/allComponent/AllComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  >
          <Route index element={<AllComponent />} />
          <Route path='/signin' exact element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
