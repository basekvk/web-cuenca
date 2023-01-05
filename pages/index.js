import Head from 'next/head'
import HeaderTop from './../components/HeaderTop/HeaderTop';
import Header from './../components/Header/Header';
import Slides from '../components/Slides';
import About from '../components/About';
import ChoseUp from './../components/ChoseUs/ChoseUp';
import Portfolio from '../components/Portfolio';
import Team from './../components/Team/Team';
import Factor from '../components/Factor';
import Clients from './../components/Clients/Clients';
import Footer from './../components/Footer/Footer';





export default function Home() {
  return (
    <>
      <Head>
            
      </Head>
       <HeaderTop />
       <Header />
       <Slides />
       <About />
       <ChoseUp />
       <Portfolio />
       <Team />
       <Factor />
       <Clients />
       <Footer />
     
    </>
  )
}
