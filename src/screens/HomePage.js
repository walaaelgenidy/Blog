import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Slider from '../components/Slider';
import Stories from '../components/Stories';


const HomePage =()=>{
    return (
        <>
        <Header />
        <Slider />
        <Posts />
        <Stories/>
        <Footer />
        </>

    );
}

export default HomePage;