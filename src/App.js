
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './pages/all/All';
import Images from './pages/images/Images';
import Videos from './pages/videos/Videos';
import Layout from './pages/layout/Layout';
import Counterpage from './pages/counter/counterpage';
import Newpage from './pages/newpage/Newpage';
import ContactPage from './pages/contacto/contacto';
import TablePage from './pages/Table';

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
          <Route path="newpage" element={<Newpage/>} />
          <Route path="contacto" element={<ContactPage/>} />
          <Route path="Table" element={<TablePage/>} />

         </Route>
      </Routes>
      </BrowserRouter>
    </div>
     );
}

export default App;
