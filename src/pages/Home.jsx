import React from 'react'
import Hero from '../components/Hero'
import ChooseProgram from '../components/ChooseProgram'
import Member from '../components/Member'
import Timing from '../components/timing'
import Classes from '../components/Classes'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <ChooseProgram />
            <Timing />
            <Classes />
            <Member />
        </>
    )
}

export default Home