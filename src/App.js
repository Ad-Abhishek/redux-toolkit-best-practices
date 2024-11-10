import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Employee from './components/Employee';
// import Counter from './components/Counter';
// import UserList from './components/UserList';
import CounterRedux from './components/CounterRedux';
import UserListRedux from './components/UserListRedux';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/employees'} element={<Employee />} />
        <Route path={'/counter'} element={<CounterRedux />} />
        <Route path={'/users'} element={<UserListRedux />} />
      </Routes>
    </React.Fragment>      
  );
}

export default App;
