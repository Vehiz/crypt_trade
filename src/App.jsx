import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hero1 from './Components/Hero1'
import TradingViewWidget from './Components/Widgets'

function App() {
 

  return (
    <div>
      <TradingViewWidget/>
      <Navbar/>
      <Hero/>
      <Hero1/>
    </div>
  )
}

export default App
