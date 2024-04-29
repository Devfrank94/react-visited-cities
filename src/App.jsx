import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import CardForm from './components/CardForm.jsx';
import Select from './components/Select.jsx';



function App() { 


  const addCity = (city) => {
    setCities([...cities, city])
  }

  // creo  un array di oggetti che rappresentano le città, ciascuna con i propri dati.

const [cities, setCities] = useState([
  {
    id: 0,
    title: "Tokyo",
    imgURL: "https://images.unsplash.com/photo-1593839154339-377e24b3ba32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHRva3lvfGVufDB8fDB8fHwy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isVisited: false,
  },
  {
    id: 1,
    title: "Chicago",
    imgURL: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8Mg%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isVisited: false,
  },
  {
    id: 2,
    title: "New York",
    imgURL: "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isVisited: false,
  },
  {
    id: 3,
    title: "Bern",
    imgURL: "https://images.unsplash.com/photo-1604239034269-3be3c31180b6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eSUyMGJlcm58ZW58MHx8MHx8fDI%3D",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isVisited: true,
  },
  {
    id: 4,
    title: "Parigi",
    imgURL: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaWdpfGVufDB8fDB8fHww",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isVisited: false,
  },
  {
    id: 5,
    title: "Londra",
    imgURL: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZHJhfGVufDB8fDB8fHww",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isVisited: false,
  },
  {
    id: 6,
    title: "Malta",
    imgURL: "https://images.unsplash.com/photo-1522307617379-e982f8754d27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFsdGF8ZW58MHx8MHx8fDA%3D",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isVisited: true,
  },
  {
    id: 7,
    title: "Roma",
    imgURL: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9tYXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isVisited: true,
  },
]);

const [filterValue, setSelectedValue ] = useState("all")

const handleSelectChange = (value) => {
  setSelectedValue(value);
  console.log(value);
};

  return (
    <>
      <Navbar/>
      <div className=" min-h-screen max-h-full bg-gradient-to-t from-gray-400 to-gray-800">
        <CardForm addCity={addCity} />
        <Select onSelectChange={handleSelectChange}/>
        <div className="py-10 flex justify-center flex-wrap min-[320px]:gap-6 sm:gap-6 md:gap-6">
          {cities
          .filter((city) => {
            if (filterValue === "isVisited") {
              return city.isVisited === true;
            } else if (filterValue === "!isVisited") {
              return city.isVisited === false;
            } else {
              return  cities;
            } 
          })
          .map((city) => (
                <Card 
                key={city.id}
                title={city.title}
                imgURL={city.imgURL}
                description={city.description}
                isVisited={city.isVisited}
                />
            ))}
        </div>
      </div>
    </>
  )
}

export default App
