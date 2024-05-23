import { useState } from 'react';
import Card from './Card.jsx';
import CardForm from './CardForm.jsx';
import Select from './Select.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Cards() { 

const cities = useSelector((state) => state.cities.value);

const [filterValue, setSelectedValue ] = useState("all")

const handleSelectChange = (value) => {
  setSelectedValue(value);
  console.log(value);
};

  return (
    <>
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
            <Link to={`/cards/${city.id}`} key={city.id}>
                <Card
                title={city.title}
                imgURL={city.imgURL}
                description={city.description}
                isVisited={city.isVisited}
                />
              </Link>
            ))}
        </div>
    </>
  )
}

export default Cards;