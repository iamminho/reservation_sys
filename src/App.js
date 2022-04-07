import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'

// COMPONENTS
import MyButton from './components/MyButton';
function App() {
  return (
    <Router>
      <div className="App">
        <h2>App.js</h2>
        {/* process.env.PUBLIC_URL는 public파일을 바로 가리키는 주소이다. */}

        <MyButton
          text={"버튼"}
          type={"success"}
          onClick={() => alert("버튼클릭")}
        />

        <MyButton
          text={"버튼"}
          type={"error"}
          onClick={() => alert("버튼클릭")}
        />

        <MyButton
          text={"버튼"}         
          onClick={() => alert("버튼클릭")}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </Router>
  );    
}

export default App;
