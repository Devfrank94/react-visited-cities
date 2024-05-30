import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    value: [
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
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
      toast.success('Città aggiunta con successo!');
    },
    delete: (state, action) => {
      const cityToDelete = action.payload;
      state.value = state.value.filter((city) => city.id !== cityToDelete);
      toast.success('Città eliminata con successo!');
    },
  },
})

export const { add, delete: removeCity } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer