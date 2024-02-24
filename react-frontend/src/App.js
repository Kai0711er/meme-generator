import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/NavHeader';
import Home from './components/Home';
import Editor from './components/Editor';
import MemeDetail from './components/MemeDetail';

function App() {
  return (
    <Router>
        <div className="App">
          {/* <header className="App-header">
          </header> */}
          <NavHeader />
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/editor" element={<Editor></Editor>} />
          <Route path="/detail" element={<MemeDetail></MemeDetail>} />
       </Routes>
    </Router>
  );
}

export default App;