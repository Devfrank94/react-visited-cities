/* eslint-disable react/prop-types */
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

function Select(props) {

    const handleChange = (event) => {
      const selectedValue = event.target.value;
      props.onSelectChange(selectedValue)
    };

  return (
    <div className="my-6 grid place-content-center">
      <div className="flex flex-col gap-3 w-80 my-5 p-5 bg-gray-700 rounded-md shadow-lg">
        <label htmlFor="search" className="block text-sm font-medium leading-3 text-white">
          Filtra
          <AdjustmentsHorizontalIcon className="w-4 inline-flex ml-1 align-top"/>
        </label>
        <div>
          <select
            name="filter"
            onChange={handleChange}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="all">Tutte</option>
            <option value="isVisited">Visitata</option>
            <option value="!isVisited">Non Visitata</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Select;