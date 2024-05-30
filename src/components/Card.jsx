import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
/* eslint-disable react/prop-types */

function Card({ title, imgURL, isVisited, description }) { 

  // Condizione che mostra la spunta verde o la x rossa  a seconda se il luogo è stato visitato o meno.
  const visitedLabel = (
    <span>
      {isVisited 
        ? <CheckCircleIcon className="inline h-6 w-6 m-3 text-green-700"/> 
        : <XCircleIcon className="inline h-6 w-6 m-3 text-red-700"/>
      }
      <p className='text-white font-semibold'> 
        {isVisited ? 'Visitata' : 'Non visitata'}
      </p>
    </span>
  );

  return(
      <div className="mb-3 cursor-pointer hover:scale-110 transition delay-150 duration-300 ease-in-out flex-none mx-2 w-60 h-max text-center shadow-2xl">
        <img className="object-cover bg-white rounded-t-md h-52 w-full" src={imgURL}/>
        <div className="p-4 h-64 bg-zinc-900 rounded-b-md overflow-y-auto break-words hyphens-auto">
          <h2 className="text-2xl text-white font-bold">{title}</h2>
          <p className="text-gray-400/75">{description}</p>
          <div className="flex justify-center my-5">
            <span>{visitedLabel}</span>
          </div>
        </div>
      </div>
    
  )
}

export default Card;