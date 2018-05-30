import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import FetchCustomer1 from './components/FetchCustomer1';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/FetchCustomer1' component={FetchCustomer1} />

</Layout>;
