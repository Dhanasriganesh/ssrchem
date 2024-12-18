import React, { Fragment } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../routers/Routers'
function Layout() {
    return (
        <Router>
            <Fragment>
                <Header />
                <div>
                    <Routers />
                </div>
                <Footer/>
            </Fragment>
        </Router>
    )
}

export default Layout
