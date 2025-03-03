import Head from 'next/head';
import Navbar from '../components/Navbar';
import Styles from './home.module.css'

export default function HomePage(){
  return (
    <div className={Styles.container}>
      <Head>
        <title>Profile</title>
      </Head>
      {/* <Navbar/> */}
      <h1>HomePage</h1>
    </div>
);
}