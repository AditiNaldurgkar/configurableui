import React from 'react';
import "./home.css"
import Display  from '../../components/cards';
function Home(){
    return <div className='main'>
        <h1>Welcome to Happy homes</h1>
        <h2>Exotic,Simple and Comfortable home decor..... </h2>
        <span>explore our aesthetics...</span>
        <div className='cardconainer'> 
            <Display title={"sofa"} price={50000} url="https://img.freepik.com/free-photo/realistic-modern-interior-design_23-2151439820.jpg?t=st=1724774945~exp=1724778545~hmac=350cef4cf5c409268cb5063e3004f6f6ac53e054f79ae8ab4395e9a591c044cb&w=996"/>
        </div>
    </div>

}
export default Home;