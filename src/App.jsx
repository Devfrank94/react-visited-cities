
import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
    <Navbar/>
    <div className="fm-container pt-10 h-screen bg-gradient-to-t from-gray-500 to-gray-800 flex justify-center">
      <Card 
      isVisited={false}
      title="Tokyo" 
      imgURL="https://images.unsplash.com/photo-1593839154339-377e24b3ba32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHRva3lvfGVufDB8fDB8fHwy"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      
      <Card
        isVisited={false}
        title="Chicago"
        imgURL="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8Mg%3D%3D"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

      <Card
        isVisited={false}
        title="New York"
        imgURL="https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

      <Card
        isVisited={true}
        title="Bern"
        imgURL="https://images.unsplash.com/photo-1604239034269-3be3c31180b6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eSUyMGJlcm58ZW58MHx8MHx8fDI%3D"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

    </div>

    </>
  )
}

export default App
