import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import Portfolio from './components/portfolio';
import Whychooseus from './components/whychooseus';
import Features from './components/features';
import Testimonials from './components/testimonials';
import Statics from './components/statics';
import Blog from './components/blog';
import Discover from './components/discover';


function App() {
  return (
    <div className='top-content'>
      <Navbar/>
      <Content/>
      <Portfolio/>
      <Whychooseus/>
      <Features/>
      <Testimonials/>
      <Statics/>
      <Blog/>
      <Discover/>
    </div>
  );
}

export default App;
