import AnalystEstimates from "./analyst-estimates"
import Carousel from "./carousel"

const Sentiments = () => {
  return (
    <div className="mt-4 p-4 bg-white rounded-xl border md:border-0 shadow-sm">
        <h1 className="font-semibold text-xl text-gray-800">Sentiment</h1>
        <h2 className="text-gray-500 font-medium mt-1">Key Events</h2>
        <Carousel />
        <AnalystEstimates buy={76} hold={8} sell={16}/>
    </div>
  )
}

export default Sentiments