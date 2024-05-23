import Blog from "../components/Blog";
import Navbar from "../components/Navbar";


function BlogPage() {
  return (
    <div className="min-h-screen max-h-full bg-gradient-to-t from-gray-400 to-gray-800">
      <Navbar/>
      <Blog/> 
    </div>
  )
}

export default BlogPage;