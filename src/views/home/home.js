import React from 'react';
import "./home.css"
import "../../components/cards.css"
import Display from '../../components/cards';
import Header from "./../../components/header/header"
const products = [{
    title: 'Table',
    price: 40000,
    url: 'https://img.freepik.com/free-photo/home-interior-design-arrangement_23-2148986615.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid'

}, {
     title: 'Sofa',
    price: 47000,
    url: 'https://img.freepik.com/free-photo/contemporary-living-room-interior-design-with-white-sofa_53876-126774.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid'
},{
    title:'Dinning table',
    price:50000,
    url:'https://img.freepik.com/free-photo/table-set-dinning-table_1339-3440.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
},{
    title :'Cupboard',
    price:30000,
    url:'https://img.freepik.com/premium-photo/room-with-wall-that-has-wall-that-says-vases-it_987032-239692.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
},{
    title:'Dressing table',
    price : 20000,
    url :'https://www.shutterstock.com/shutterstock/photos/2360870471/display_1500/stock-photo-white-retro-mid-century-style-dressing-table-with-round-vanity-mirror-drawer-in-sunlight-on-beige-2360870471.jpg',
},{
    title:"Garden Table",
    price:15000,
    url:"https://img.freepik.com/free-photo/dessert-flowers-table-assortment_23-2149434116.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",
},{
    title:"Swing",
    price:5000,
    url:"https://img.freepik.com/premium-photo/swing-that-has-word-no-it_1260025-47055.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",
},{
    title:"TV cabinet",
    price:35000,
    url:"https://img.freepik.com/free-photo/interior-living-room-background_1409-4953.jpg?t=st=1724783572~exp=1724787172~hmac=524efe6ed162aee8c035f27fdaa6431e6fb258d45138e54a4a8493bc0eaa18b1&w=1380",
},{
    title:"Study table",
    price:15000,
    url:"https://img.freepik.com/free-photo/empty-classroom-desk-with-book-pencils_9975-23879.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",
}]
function Home() {
    return <div className='main'>
        <Header/>
        <h1 className='title'>Welcome to HomeTown</h1>
        <h2>Exotic Simple and Comfortable home decor..... </h2>
        <span>Explore our aesthetics...</span>
        <div className='cardcontainer'>
            {products.map((product) => (
                <Display
                    title={product.title}
                    price={product.price}
                    url={product.url}
                />
            ))}

        </div>
    </div>

}
export default Home;