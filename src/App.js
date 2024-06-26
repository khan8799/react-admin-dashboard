import './App.css';
import Home from './Home/Home'
import Layout from './shared/components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './shared/components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Home />}></Route>
          <Route path = "/dashboard" element = {<Dashboard />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
