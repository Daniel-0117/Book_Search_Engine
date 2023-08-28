import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<SearchBooks />} 
          />
          <Route 
            path='/saved' 
            element={<SavedBooks />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>You have taken the wrong path Ashen One</h1>}
          />
        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
