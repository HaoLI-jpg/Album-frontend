import { CssBaseline} from "@material-ui/core";
import React from "react";
import { Navbar, Upload, Home } from './components'
import {Route, Routes} from 'react-router-dom'
const App = () => {
    return(
        <>
            <CssBaseline />
            <div>
                <Navbar />
            </div>

            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>} />

                    <Route exact path="/upload" element={<Upload/>} />
                </Routes>
                    
            </div>
        </>
    )
}

export default App;