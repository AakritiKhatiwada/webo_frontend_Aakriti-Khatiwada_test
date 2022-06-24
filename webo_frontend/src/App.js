import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className='top-content'>
      <Navbar/>
      <Content/>
      <Portfolio/>
    </div>
  );
}

export default App;
