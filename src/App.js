import './App.scss';
import Registration from './views/Registration/Registration';
import {Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Registration/>}  />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
