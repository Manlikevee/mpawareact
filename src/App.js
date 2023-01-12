import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import Links from './pages/Links';
import Mynav from './pages/Mynav';
import Signup from './pages/Signup';
import Signin from './pages/signin';

function App() {
  return (
    <Router>
    
    
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
      {/* <Links /> */}
    </Router>
   
  );
}

export default App;
