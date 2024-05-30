/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeCity } from '../redux/citiesSlice';

function DeleteButton({ cardId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(removeCity(cardId));
    navigate('/');
  }

  return (
    <>
      <button className='px-4 py-2 text-white font-semibold bg-red-600 rounded-md shadow-xl' onClick={handleDelete}>Rimuovi</button>
    </>
    
  )
}

export default DeleteButton;