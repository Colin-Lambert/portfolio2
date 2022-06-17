import React from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Footer from './FooterComponent';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;