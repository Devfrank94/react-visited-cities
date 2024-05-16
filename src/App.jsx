import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import CardForm from './components/CardForm.jsx';
import Select from './components/Select.jsx';
import { useSelector } from 'react-redux';



function App() { 

const cities = useSelector((state) => state.cities.value);

const [filterValue, setSelectedValue ] = useState("all")

const handleSelectChange = (value) => {
  setSelectedValue(value);
  console.log(value);
};

  return (
    <>
      <Navbar/>
      <div className=" min-h-screen max-h-full bg-gradient-to-t from-gray-400 to-gray-800">
        <CardForm/>
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
