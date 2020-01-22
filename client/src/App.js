import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';


class App extends React.Component {

  // exact wymusza renderowanie tylko gdy scieżka jest identyczna z podaną w linku
  // Switch zapewnia, że tylko jeden route zostanie zwrócony
  render() {
    return (
     <MainLayout>
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/posts' exact component={Posts} />
         <Route path='/contact' exact component={Contact} />
         <Route component={NotFound} />
       </Switch>
     </MainLayout>
    );
  }
};

export default App;
