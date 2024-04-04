import './App.css';
import Header from './shared/components/Header/Header'
import Sidebar from './shared/components/Sidebar/Sidebar'
import Home from './Home/Home'

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid page-body-wrapper rebase-class">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
