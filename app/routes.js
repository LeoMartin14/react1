import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddCharacter from './components/AddCharacter';
import Character from './components/Character';
import AddPerson from './components/AddPerson';
import CharacterList from './components/CharacterList';
import PersonList from './components/PersonList';
import Stats from './components/Stats';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/add' component={AddCharacter} />
    <Route path='/addperson' component={AddPerson} />
    <Route path='/listpeople' component={PersonList} />
    <Route path='/characters/:id' component={Character} />
    <Route path='/shame' component={CharacterList} />
    <Route path='/stats' component={Stats} />
    <Route path=':category' component={CharacterList}>
      <Route path=':race' component={CharacterList}>
        <Route path=':bloodline' component={CharacterList} />
      </Route>
    </Route>
  </Route>
);
