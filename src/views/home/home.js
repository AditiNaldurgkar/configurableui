import React from 'react';
import "./home.css"
import "../../components/cards.css"
import Display from '../../components/cards';
import Header from "./../../components/header/header"
import Footer  from '../../components/footer/footer';
import {PRODUCTS ,HEADLINE,TAGLINE} from './../../config/data'

function Home() {
    return <div className='main'>
        <Header/>
        <h1 className='title'>{HEADLINE}</h1>
        <h2>{TAGLINE} </h2>
        <span>Explore our aesthetics...</span>
        <div className='cardcontainer'>
            {PRODUCTS.map((PRODUCTS) => (
                <Display
                    title={PRODUCTS.title}
                    price={PRODUCTS.price}
                    url={PRODUCTS.url}
                />
            ))}

        </div>
        <Footer/>
    </div>

}
export default Home;