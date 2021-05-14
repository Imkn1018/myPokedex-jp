import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Top } from './components/Pages/Top';
import { Pokemon } from './components/Pages/Pokemon';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/pokemon" component={Pokemon} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
