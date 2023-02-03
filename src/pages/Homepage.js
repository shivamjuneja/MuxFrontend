// import React from 'react'
import Nav from '../components/nav';
import HomeHeader from '../components/HomeComp/HomeHeader';
import LeverageTrading from '../components/HomeComp/LeverageTrading';
// import HomeCard from '../components/HomeComp/HomeCard';
import Footer from '../components/Footer';
import LevelUP from '../components/HomeComp/LevelUP';
import NewTechnology from '../components/HomeComp/NewTechnology';

export default function Homepage() {
  return (
    <>
    <Nav/>
    <HomeHeader/>
    <LevelUP/>
    <LeverageTrading/>
    <NewTechnology/>
    {/* <HomeCard/> */}
    <Footer/>
    </>
  )
}
