import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'

import Home from './components/pages/Home';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
    return (
        <>
            <Router>
             <Navbar/>
            
          
                    <Switch>
                         <Route exact path="/" component={Home}/>
                         <div className="container p-4">
                        <Route path="/VideoList" component={VideoList}/>  
                        <Route path="/VideoForm" component={VideoForm}/>  
                        <Route path="/update/:id" component={VideoForm}/>  
                        </div>
                    </Switch>
                <ToastContainer/>
            </Router>
           
        </>
    )
}
