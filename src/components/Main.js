import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import LibraryForm from './LibraryForm';

const Main = () => (
    <main className='container'>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/libraryForm' component={LibraryForm} />
        </Switch>
        </main>
)

export default Main