import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import Title from '../../components/Title'
const AddCar = () => {

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    description: '',
  })
  const currency = import.meta.env.VITE_CURRENCY;

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title="Add New Car" subTitle="Add a new car to your collection and make it available for booking.Fill in the form below for the car details." />
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl' >

        {/* Car Image */}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-4 rounded cursor-pointer' />
            <input type="file" id='car-image' accept="image/*" onChange={(e) => setImage(e.target.files[0])} hidden />
          </label>
          <p className='text-sm text-gray-500'>Upload a picture of your car</p>
        </div>
        {/* Car Brand and Model */}
        <div className='grid grid:cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type="text" placeholder='e.g. Mercedes,BMW, Audi...' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.brand} onChange={e => setCar({ ...car, brand: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type="text" placeholder='e.g. X5, E-Class, A-Class...' required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.model} onChange={e => setCar({ ...car, model: e.target.value })} />
          </div>
        </div>
        {/* Car Year and Price, Category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type="number" placeholder='2025' className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' required
              value={car.year} onChange={e => setCar({ ...car, year: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Daily price ({currency})</label>
            <input type="number" placeholder='100' className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' required
              value={car.pricePerDay} onChange={e => setCar({ ...car, pricePerDay: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' required
              value={car.category} onChange={e => setCar({ ...car, category: e.target.value })}>
              <option value=''>Select a Category</option>
              <option value='Suv'>SUV</option>
              <option value='Hatchback'>Hatchback</option>
              <option value='Convertible'>Convertible</option>
            </select>
          </div>
        </div>

        {/* Transmission, Fuel Type, Seating Capacity */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' required
              value={car.transmission} onChange={e => setCar({ ...car, transmission: e.target.value })}>
              <option value=''>Select a Transmission</option>
              <option value='automatic'>Automatic</option>
              <option value='manual'>Manual</option>
              <option value='semi automatic'>Semi- Automatic</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' required
              value={car.fuel_type} onChange={e => setCar({ ...car, fuel_type: e.target.value })}>
              <option value=''>Select a Fuel Type</option>
              <option value='petrol'>Petrol</option>
              <option value='diesel'>Diesel</option>
              <option value='gas'>Gas</option>
              <option value='electric'>Electric</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label>Seating Capacity</label>
            <input type="number" placeholder='4' className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' required
              value={car.seating_capacity} onChange={e => setCar({ ...car, seating_capacity: e.target.value })} />
          </div>
        </div>

        {/* Car Location */}
        <div className='flex flex-col w-full'>
          <label>Location</label>
          <select className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' required
            value={car.location} onChange={e => setCar({ ...car, location: e.target.value })}>
            <option value=''>Select a Location</option>
            <option value='New York'>New York</option>
            <option value='Chicago'>Chicago</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='Houston'>Houston</option>
            <option value='Phoenix'>Phoenix</option>
            <option value='Philadelphia'>Philadelphia</option>
          </select>
        </div>
        {/* Description */}
        <div className='flex flex-col w-full'>
          <label>Description</label>
          <textarea placeholder='e.g. A luxurious SUV with a comfortable interior and advanced features.' className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' required
            value={car.description} onChange={e => setCar({ ...car, description: e.target.value })} ></textarea>
        </div>

        <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
          <img src={assets.tick_icon} alt="" />
          List your Car
        </button>

      </form>
    </div>
  )
}

export default AddCar