
import TradingViewWidget from '../../Widgets/Widgets'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import Hero1 from '../../Components/Hero1'
import Plans from '../../Components/Plans'
import Sliderr from '../../Components/Sliderr'
import VideoGuide from '../../Components/VideoGuide'

const Home = () => {
  return (
    <section>
        <TradingViewWidget />
        <Navbar />
        <Hero />
        <Hero1 />
        <Plans />
        <VideoGuide />
        <Sliderr />
        <Footer />
    </section>
  )
}

export default Home