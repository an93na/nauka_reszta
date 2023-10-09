import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Form } from './components/Form';
import { List } from './components/List';
import { NotFound } from './components/NotFound';
import { Users } from './components/Users';

function ExerciseApp() {
    const style = {
        margin: 20,
        padding: 20,
        border: "2px solid blue",
        display: "flex",
        borderRadius: 5,
        gap: 40,
      };

    return <div className="container">
        <article>
            <div style={style}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/form'}>Form</Link>
            <Link to={'/list'}>List</Link>
            <Link to={'/users'}>Users</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/list' element={<List/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </article>
    </div>;
    
  }
  
  export default ExerciseApp;
