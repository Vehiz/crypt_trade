import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hero1 from './Components/Hero1'
import Footer from './Components/Footer'
import Plans from './Components/Plans'
// import MarketWidgets from './Widgets/MarketWidgets'
import TradingViewWidget from './Widgets/Widgets'
import VideoGuide from './Components/VideoGuide'
import Sliderr from './Components/Sliderr'

function App() {
 

  return (
    <div>
      <TradingViewWidget/>
      <Navbar/>
      <Hero/>
      <Hero1/>
      <Plans/>
      <VideoGuide/>
      {/* <MarketWidgets/> */}
      <Sliderr/>
      <Footer/>
    </div>
  )
}

export default App
