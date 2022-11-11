
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './pages/all/All';
import Images from './pages/images/Images';
import Videos from './pages/videos/Videos';
import Layout from './pages/layout/Layout';
import Counterpage from './pages/counter/counterpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
          <Route path="counter" element={<Counterpage/>} />
         </Route>
      </Routes>
      </BrowserRouter>
    </div>
     );
}

export default App;
