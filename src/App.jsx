import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hero1 from './Components/Hero1'
import Footer from './Components/Footer'
// import MarketWidgets from './Widgets/MarketWidgets'
import TradingViewWidget from './Widgets/Widgets'

function App() {
 

  return (
    <div>
      <TradingViewWidget/>
      <Navbar/>
      <Hero/>
      <Hero1/>
      {/* <MarketWidgets/> */}
      <Footer/>
    </div>
  )
}

export default App
