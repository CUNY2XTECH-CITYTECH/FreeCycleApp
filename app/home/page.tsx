import Image from "next/image"
import Styles from '../components/styles/home.module.css'

import ProductForm from "../components/product-form"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/Footer"
import About from "../components/about/About"
import SearchBar from "../components/search-bar/search-bar"
import Feed from "../components/feed/feed"

export default function HomePage(){
    return (
      <div className={Styles.container}>
        <div className={Styles.imageWrapper}>
        <div><Navbar/></div>
          <Image
            src="/images/freecycle.png"
            alt="Your Image Description"
            layout="responsive "
            width={1200}
            height={600}
            className={Styles.img}
          />    
        </div>
        <div> <About /> </div>
  
        <div>
          <h1 style={{ fontSize: 30, textAlign: 'center'}}>Create a Product</h1>
          <div style={{paddingTop: '10px'}}>
            <ProductForm />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px' }}> <SearchBar/> </div>
        <div style={{paddingTop: '40px'}}> 
          {<Feed />}
          </div>
        <div> <Footer /> </div>
      </div>
    );
  }