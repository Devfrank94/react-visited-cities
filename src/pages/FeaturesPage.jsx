import Features from "../components/Features";
import Navbar from "../components/Navbar";


function FeaturesPage() {
  return (
    <div className="min-h-screen max-h-full bg-gradient-to-t from-gray-400 to-gray-800">
      <Navbar/>
      <Features/>
    </div>
  )
}

export default FeaturesPage;