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
import Footer from './components/footer';
import Faq from './components/faq';


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
      <Faq/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
