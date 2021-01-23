import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import {Link} from 'react-router-dom'
import Featured from '../components/Featured'


export default function Home() {
    return (
    <>
    <Hero>
        <Banner title="Welcome to the UX Diaries" subtitle="A review of SG Gov apps, and mental experiments of possible new features, from a UX and behavioural science junkie"> 
        <Link to = '/reviews' className = "btn-primary">
            App Reviews
        </Link>
        </Banner>
    </Hero>
    <Services />
    <Featured />
    </>
    );
}
