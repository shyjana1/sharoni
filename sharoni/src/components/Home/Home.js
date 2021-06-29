import React, {useState, useEffect} from 'react'
import './Home.css'
import Product from '../Products/Product'
import Bread from '../../images/bread_bg.jpg'
import Product1 from '../../images/bread2.jpg'
import Basket from '../../images/basket1.jpg'
import BreadBg from '../../images/bread_bg.jpg'
import Cookies from '../../images/cookies1.jpg'
import Bread2 from '../../images/bread_product1.jpg'
import Spreads from '../../images/spread.jpg'
import { useStateValue } from '../../StateProvider'
import SimpleMap from '../apiComponent/SimpleMap'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Bootstrap from 'react-bootstrap'
// import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    const [{filteredValue,}, dispatch] = useStateValue();
    const [products] = useState([

        { id: 1, title: "Home Bread",price:"3.99", image: Product1,description:"Devine bread" },
        { id: 2, title: "Bread Souper-Bowl",price:"1.99", image: BreadBg,description:"Greatest soup poured in bread" },
        { id: 3, title: "Spread",price:"1.99", image: Spreads, description:"Vegan Gluten free garlic and herb (walnut based) nut 'cheese' spread" },
        { id: 4, title: "Tahini Cookies",price:"11.99", image: Cookies, description:" Tahini Cookies Wonder" },
        { id: 5, title: "Bread Basket",price:"14.99", image: Bread2, description:"Bread Galore" },
        { id: 6, title: "Sharoni's Special: Bread & Garlic with herb nut 'cheese' spread",price:"31.99", image: Basket ,description:"Delicious Gluten free Bread with nut cheese spread." },
        
    ])
    return (
        <>

        <div className="home">
            <div className="home_container">
                <img className="home_image" src={Bread} />
            </div>
        </div>
        <div className="home_row">
        {
            products.filter(item=>{
                return item.title.toLowerCase().includes(filteredValue.toLowerCase())
            })
            .map(item=>{
                return <Product id={item.id} title={item.title} price={item.price} image={item.image} description={item.description} />
            })
        }
        </div>
        <SimpleMap />
        </>
    )
}

export default Home
