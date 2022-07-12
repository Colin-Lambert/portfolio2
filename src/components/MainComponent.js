import React from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import ProjectsList from './ProjectsComponent';
import Footer from './FooterComponent';
import { Route, Routes } from 'react-router-dom';
import { PROJECTS } from '../shared/PROJECTS';
import '@animxyz/core';
import Home from './HomeComponent';

const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<ProjectsList projects={PROJECTS} />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;