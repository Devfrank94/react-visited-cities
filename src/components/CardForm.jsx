/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function CardForm({ addCity }) {

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    imgURL: "",
    isVisited: false,
  });

  const handleInputChange =(e) =>{
    const {name, value, type, checked} = e.target
    const inputValue = type == "checkbox" ? checked : value
    setFormData({...formData, [name]: inputValue,});
  };

  //Modifico in tempo reale il document title quando aggiungo una nuova città
  useEffect(() => {
    document.title =  formData.title ? `Stai aggiungendo ${formData.title}` : `React Visited Cities`;
  },[formData]);

  const handleSubmit = (e) =>{
    //non permetto la ricarica della pagina al click del button submit
    e.preventDefault();
    console.log(e)

    const city = {
      id:  Math.random(),
      title: formData.title,
      description: formData.description,
      imgURL: formData.imgURL,
      isVisited: formData.isVisited,
    };

    //svuoto il form
    setFormData({
    title: "",
    description: "",
    imgURL: "",
    isVisited: false,
    });

    addCity(city);
  }

  return (
    <div className="pt-5 grid place-content-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 w-80 my-5 p-5 bg-gray-700 rounded-md shadow-lg">
          <label htmlFor="imgURL" className="block text-sm font-medium leading-3 text-white">
            Immagine Card
          </label>
            <input name="imgURL" type="text" value={formData.imgURL} onChange={handleInputChange} placeholder="Inserisci URL immagine" className="block rounded-md px-3 py-2 text-center text-sm font-semibold required:border-red-500 valid:border-green-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"></input>

          <label htmlFor="title" className="block text-sm font-medium leading-3 text-white">
            Città
          </label>
            <input name="title" type="text" value={formData.title} onChange={handleInputChange} placeholder="Inserisci nome Città" className="block rounded-md px-3 py-2 text-center text-sm font-semibold required:border-red-500 valid:border-green-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"></input>

          <label htmlFor="description" className="block text-sm font-medium leading-3 text-white">
            Descrizione
          </label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Inserisci descrizione..." className="block rounded-md px-3 py-2 text-center min-h-3.5 text-sm font-semibold required:border-red-500 valid:border-green-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"></textarea>

          <label htmlFor="isVisited" className="block text-sm font-medium leading-3 text-white">
            Visitata?
          </label>
            <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange} className="block required:border-red-500 valid:border-green-500 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"></input>
        
            <button type="submit" className="mt-3 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Aggiungi Card</button>
        </div>
      </form>
    </div>
    
  )
  
}

export default CardForm;