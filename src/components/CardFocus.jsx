import { ArrowLeftCircleIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function CardFocus() {
  const { cardID } = useParams();
  // console.log(cardID);

  const cities = useSelector((state) => 
    state.cities.value.filter((city) => city.id == cardID.toString())
  );

  console.log(cities)

  const visitedLabel = (
    <span>
      {cities[0].isVisited 
        ? <CheckCircleIcon className="inline h-6 w-6 m-3 text-green-700"/> 
        : <XCircleIcon className="inline h-6 w-6 m-3 text-red-700"/>
      }
      <p className='text-white font-semibold'> 
        {cities[0].isVisited ? 'Visitata' : 'Non visitata'}
      </p>
    </span>
  );

  return(
    <div className="flex mt-10 m-7">
      <Link to='/'>
      <ArrowLeftCircleIcon className="max-[640px]:h-[8rem] sm:h-16 text-white mr-2 hover:scale-125 duration-500 cursor-pointer"/>
      </Link>
      <div className="card flex cursor-pointer mx-2 h-max text-center rounded-lg bg-zinc-900 shadow-2xl">
        <img className="object-cover rounded w-2/3 " src={cities[0].imgURL} alt={cities[0].title}/>
        <div className="p-4 h-64 overflow-scroll break-words hyphens-auto">
          <h2 className="text-2xl text-white font-bold">{cities[0].title}</h2>
          <p className="text-gray-400/75">{cities[0].description}</p>
          <div className="flex justify-center my-5">
            <span>{visitedLabel}</span>
          </div>
        </div>
      </div>
    </div>
      
    
  )
}

export default CardFocus;