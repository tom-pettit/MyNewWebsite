import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{height: '100%', margin: 0, backgroundColor: 'black'}}>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/portfolio' component={Portfolio}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
