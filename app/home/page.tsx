import Image from 'next/image';
import Styles from '../components/styles/home.module.css';
import Footer from "../components/footer/Footer.js";
import CategoryList from "../components/category/CategoryList.js";
import SearchBar from  "../components/searchBar/SearchBar.js";
import FeaturedItems from "../components/featured/Featured.js";
import About from "../components/about/About.js";
import Navbar from '../components/navbar/Navbar.js';




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
        <h1 style={{ fontSize: 30, textAlign: 'center'}}>Categories</h1>
        <CategoryList /> 
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '60px' }}> <SearchBar centered={undefined} /> </div>
      <div style={{paddingTop: '40px'}}> 
        <h1 style={{ fontSize: 30, textAlign: 'center'}}>Featured Items</h1>
        <FeaturedItems /> 
        </div>
      <div> <Footer /> </div>
    </div>
  );
}

