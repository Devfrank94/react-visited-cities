/* eslint-disable react/prop-types */

function Card({ title, imgURL }) {
  
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non aliquam recusandae mollitia adipisci sunt obcaecati."


  return(
      <div className="card flex-auto mx-2 w-60 h-max text-center rounded-lg bg-zinc-900 shadow-2xl">
        <img className="object-cover h-52 rounded w-full" src={imgURL} alt={title} />
        <div className="p-4 h-max">
          <h2 className="text-2xl text-white font-bold">{title}</h2>
          <p className="text-gray-500/75 text-wrap sm:text-balance">{description}</p>
        </div>
      </div>
    
  )
}

export default Card;