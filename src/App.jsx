import react from "react"
import Header from './components/Header'
import Hero from "./components/Hero"
import { TrendingCollection } from "./components/TrendingCollection"
import TopCreators from "./components/topCreator/TopCreators"

function App() {
  return (
    <div className="max-w-7xl bg-[#2B2B2B] m-auto">
      <Header/>
      <Hero />
      <TrendingCollection/>
      <TopCreators/>
    </div>
  )
}

export default App
