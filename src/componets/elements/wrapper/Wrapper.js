import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './styles.css'
import Header from '../header/Header'
import MainPage from "../../pages/main-page/MainPage"
import EmployerPage from "../../pages/employers-page/EmployerPage"
import WorkersPage from "../../pages/workers-page/WorkersPage"

const  Wrapper  = () => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="content">
                <Switch>
                    <Route exact path='/'><MainPage/></Route>
                    <Route path='/employers'><EmployerPage/></Route>
                    <Route path='/workers'><WorkersPage/></Route>
                </Switch>
            </main>
        </div>
    )
}

export default Wrapper
