import React from 'react'
import"./Home.css"
import banner from"../imagges/banner1.png"
import Product from '../Product/Product'

function Home() {
  return (
    <div  className='home'>
        <div className='home__container'>
            <img className='home__image'
            src={banner} alt=''/>
            <div className='home__row'>
            <Product id="1234"
            image="https://m.media-amazon.com/images/I/51RH458E6RL._AC_SY200_.jpg"
            title=" AP Statistics Premium, 2024: 9 Practice Tests + Comprehensive Review + Online Practice (Barron's AP) "
            price={12.78}
            rating={4}/>  
             <Product id="12344"
            image="https://m.media-amazon.com/images/I/71yrLllDokL._AC_UL320_.jpg"
            title=" AP Statistics Premium, 2024: 9 Practice Tests + Comprehensive Review + Online Practice (Barron's AP) "
            price={120.78}
            rating={5}/> 
            <Product
            id="12345"
            image="https://m.media-amazon.com/images/I/71FldKWMyjL._AC_UY218_.jpg"
            title="Hamilton Beach 6-Speed Electric Hand Mixer with Whisk, Traditional Beaters, Snap-On Storage Case, Dough Hooks, Red"
            price={192.78}
            rating={4}/>   
            </div>
            <div className='home__row'>
                <Product
                id="12349"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
                title="Health &amp; Personal Care"
                price={109.78}
                rating={1}/>  
            <Product
            id="12346"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            title=" Shop Laptops &amp; Tablets"
            price={17.78}
            rating={3}/>  
            <Product 
            id="12348"
            image="https://m.media-amazon.com/images/I/61Wi87qUu5L._AC_UF226,226_FMjpg_.jpg"
            title="Under Armour Apparel, Footwear, and Accessories"
            price={190.78}
            rating={5}/> 
            <Product
                id="123411"
                image="https://m.media-amazon.com/images/I/51xbsVyPhGL._AC_UF226,226_FMjpg_.jpg"
                title="COOFANDY Men's Christmas Sweater Ugly Knitted Xmas Sweaters Casual Snowflake Pullover Knitwear"
                price={18.78}
                rating={2}/>  
            <Product
            id="123422"
            image="https://m.media-amazon.com/images/I/91KuFOBgkFL._AC_UL320_.jpg"
            title=" SHistory of Ethiopia: A Captivating Guide to Ethiopian History (African History)"
            price={55.78}
            rating={1}/>  
            <Product 
            id="123433"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
            title="Shop activity trackers and smartwatches"
            price={119.78}
            rating={3}/> 
            </div>
            <div className='home__row'>
            <Product
            id="12347"
            image="https://m.media-amazon.com/images/I/71RVfs7q-yL._AC_UL320_.jpg" 
            title="Acer Predator Orion 3000 PO3-640-UR12 Gaming Desktop | 12th Gen Intel Core i7-12700F 12-Core | NVIDIA GeForce RTX 3070 | 16GB DDR4 | 1TB Gen3 SSD | 1TB HDD | Intel WiFi 6E AX211 | RGB Keyboard &amp; Mouse"
            price={139.78}
            rating={4}/>  
            
            </div>
            
        </div>

    </div>
  )
}

export default Home
//https://images-eu.ssl-images-amazon.com/images/G02/digital.
//https://images-na.ssl-amazon.com/images/I/512ymoq7