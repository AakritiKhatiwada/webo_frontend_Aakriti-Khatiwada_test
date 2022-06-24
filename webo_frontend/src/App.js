import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import Portfolio from './components/portfolio';
import Whychooseus from './components/whychooseus';
import Features from './components/features';

function App() {
  return (
    <div className='top-content'>
      <Navbar/>
      <Content/>
      <Portfolio/>
      <Whychooseus/>
      <Features/>
    </div>
  );
}

export default App;
