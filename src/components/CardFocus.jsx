import { ArrowLeftCircleIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

function CardFocus() {
  const { cardID } = useParams();
  // console.log(cardID);

    const cities = useSelector((state) => 
      state.cities.value.filter((city) => city.id == cardID.toString())
    );

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
      <ArrowLeftCircleIcon className="max-[640px]:h-[2rem] sm:h-12 text-white mr-2 hover:scale-125 duration-500 cursor-pointer"/>
      </Link>
      <div className="min-[640px]:flex mx-2 h-max text-center">
        <img className="object-cover bg-white min-w-60 min-[640px]:rounded-s-lg shadow-2xl  max-h-[450px] min-[640px]:w-2/3" src={cities[0].imgURL}/>
        <div className="p-4 flex-1 bg-zinc-900 min-w-48 min-[640px]:rounded-r-lg shadow-2xl break-words hyphens-auto overflow-y-auto flex-col justify-items-center">
          <h2 className="text-2xl text-white font-bold">{cities[0].title}</h2>
          <p className="text-gray-400/75 max-[480px]:my-2 xl:my-8">{cities[0].description}</p>
          <div className="flex justify-center my-5">
            <span>{visitedLabel}</span>
          </div>
          <DeleteButton cardId={cities[0].id}/>
        </div>
      </div>
    </div>
  )
}

export default CardFocus;