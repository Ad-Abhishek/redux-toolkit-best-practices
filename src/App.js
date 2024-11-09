import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Employee from './components/Employee';
import Counter from './components/Counter';
import UserList from './components/UserList';

function App() {
  return (
    <React.Fragment>
      {/* <h2>App Component</h2> */}
      <NavBar />

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/employees'} element={<Employee />} />
        <Route path={'/counter'} element={<Counter />} />
        <Route path={'/users'} element={<UserList />} />
      </Routes>
    </React.Fragment>      
  );
}

export default App;
