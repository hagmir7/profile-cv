import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

import Counter from './components/Counter'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services  />
      <Counter />
      <Portfolio />
      {/* <Testimonial /> */}
      <Blog />
      <Footer />


    </div>
  );
}

export default App;
